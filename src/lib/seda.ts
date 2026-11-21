// Motor de la seda de la portada: una tela de terracota en un lienzo fijo detrás del contenido. El pliegue se
// calcula en el sombreador (posición y normal a la vez) y la tela viaja entre poses atadas a las secciones.
// Un solo bucle: lo llama gsap.ticker desde Seda.tsx.
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

type Pose = { ax: number; y: number; rx: number; rz: number; s: number; amp: number };

const FOV = 30;
const DIST = 14;
const ALTO = 2 * DIST * Math.tan((FOV * Math.PI) / 360); // alto visible en unidades

// Sección de la portada → pose de la tela (m = móvil). ax es la fracción del medio ancho de pantalla.
const GUION: [string, (m: boolean) => Pose][] = [
  [".hs", (m) => ({ ax: 0, y: m ? -0.2 : -1.62, rx: -0.42, rz: -0.035, s: m ? 0.58 : 1, amp: 1 })],
  [".man", (m) => ({ ax: -0.15, y: -3.5, rx: -0.7, rz: 0.16, s: m ? 0.58 : 1, amp: 0.8 })],
  [".equ", (m) => ({ ax: -1.02, y: 0, rx: -0.25, rz: 1.47, s: m ? 0.45 : 0.8, amp: 0.9 })],
  [".gal", (m) => ({ ax: 0.2, y: 3.3, rx: -0.6, rz: -0.14, s: m ? 0.55 : 0.9, amp: 1 })],
  [".doc", (m) => ({ ax: 1.04, y: 0, rx: -0.25, rz: -1.47, s: m ? 0.45 : 0.8, amp: 0.9 })],
  [".pq", (m) => ({ ax: 1.04, y: 0.4, rx: -0.3, rz: -1.4, s: m ? 0.45 : 0.8, amp: 0.9 })],
  [".cie", (m) => ({ ax: 0, y: m ? 2.6 : 2.3, rx: -0.5, rz: 0.05, s: m ? 0.58 : 1, amp: 1.1 })],
];

const GLSL = /* glsl */ `
uniform float uT; uniform float uAmp;
float sedaG(float x) { return 0.85 * sin(0.42 * x + 0.6) + 0.18 * sin(0.9 * x + uT * 0.3); }
float sedaGp(float x) { return 0.357 * cos(0.42 * x + 0.6) + 0.162 * cos(0.9 * x + uT * 0.3); }
// Altura del pliegue y sus derivadas en x e y.
vec3 sedaF(vec2 p) {
  float a = 0.62 * p.x + 1.5 * p.y + uT * 0.5, b = 1.45 * p.x - 2.2 * p.y + 1.0 + uT * 0.7, c = 3.1 * p.y + 0.3 * p.x - uT * 0.4;
  return uAmp * vec3(0.55 * sin(a) + 0.2 * sin(b) + 0.14 * sin(c), 0.341 * cos(a) + 0.29 * cos(b) + 0.042 * cos(c), 0.825 * cos(a) - 0.44 * cos(b) + 0.434 * cos(c));
}
`;

const mezcla = (a: number, b: number, t: number) => a + (b - a) * t;
const suave = (t: number) => { const c = Math.min(1, Math.max(0, (t - 0.15) / 0.7)); return c * c * (3 - 2 * c); };

export class MotorSeda {
  private renderer: THREE.WebGLRenderer;
  private escena = new THREE.Scene();
  private camara = new THREE.PerspectiveCamera(FOV, 1, 0.1, 100);
  private tela: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshPhysicalMaterial>;
  private unif = { uT: { value: 0 }, uAmp: { value: 1 } };
  private paradas: { y: number; pose: (m: boolean) => Pose }[] = [];
  private actual: Pose | null = null;
  private medioAncho = 6;
  private movil = false;
  private ratio: number;
  private lentos = 0;
  private puntero = { x: 0, y: 0, sx: 0, sy: 0 };
  private alMedir = () => this.medir();
  private alPuntero = (e: PointerEvent) => { this.puntero.x = (e.clientX / innerWidth) * 2 - 1; this.puntero.y = (e.clientY / innerHeight) * 2 - 1; };
  entrada = 0; // 0 = fuera de cuadro por abajo, 1 = en su sitio (lo anima Seda.tsx al terminar el preloader)
  quieto = false;
  snap = false;

  constructor(lienzo: HTMLCanvasElement) {
    this.movil = innerWidth < 900;
    this.renderer = new THREE.WebGLRenderer({ canvas: lienzo, alpha: true, antialias: true, powerPreference: "high-performance" });
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.ratio = Math.min(devicePixelRatio, this.movil ? 1.5 : 1.75);
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.escena.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();
    const principal = new THREE.DirectionalLight(0xfff0e0, 2.6); principal.position.set(-6, 8, 7);
    const relleno = new THREE.DirectionalLight(0xff9a70, 0.9); relleno.position.set(8, -2, 5);
    this.escena.add(principal, relleno);
    this.camara.position.z = DIST;

    const mat = new THREE.MeshPhysicalMaterial({ color: 0xb8573c, roughness: 0.42, metalness: 0.08, sheen: 1, sheenColor: 0xffb48f, sheenRoughness: 0.35, clearcoat: 0.25, side: THREE.DoubleSide, envMapIntensity: 0.9 });
    mat.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, this.unif);
      sh.vertexShader = GLSL + sh.vertexShader
        .replace("#include <beginnormal_vertex>", "vec3 sF = sedaF(position.xy); vec3 objectNormal = normalize(vec3(sedaGp(position.x) * sF.z - sF.y, -sF.z, 1.0));")
        .replace("#include <begin_vertex>", "vec3 transformed = vec3(position.x, position.y + sedaG(position.x), sF.x);");
    };
    this.tela = new THREE.Mesh(new THREE.PlaneGeometry(30, 3.6, this.movil ? 180 : 320, this.movil ? 40 : 64), mat);
    this.tela.frustumCulled = false;
    this.escena.add(this.tela);

    addEventListener("resize", this.alMedir);
    addEventListener("load", this.alMedir);
    addEventListener("pointermove", this.alPuntero, { passive: true });
    this.medir();
  }

  async compilar() { await this.renderer.compileAsync(this.escena, this.camara); }

  medir() {
    const w = innerWidth, h = innerHeight;
    this.movil = w < 900;
    this.renderer.setPixelRatio(this.ratio);
    this.renderer.setSize(w, h, false);
    this.camara.aspect = w / h;
    this.camara.updateProjectionMatrix();
    this.medioAncho = (ALTO / 2) * (w / h);
    this.paradas = [];
    for (const [sel, pose] of GUION) {
      const el = document.querySelector<HTMLElement>(sel);
      if (!el) continue;
      const c = el.getBoundingClientRect(), arriba = c.top + scrollY;
      this.paradas.push({ y: sel === ".hs" ? h / 2 : arriba + Math.min(c.height, h * 1.4) / 2, pose });
    }
    this.paradas.sort((a, b) => a.y - b.y);
  }

  private objetivo(aguja: number): Pose {
    const ps = this.paradas;
    let b = ps.findIndex((s) => s.y > aguja);
    if (b === 0) return ps[0].pose(this.movil);
    if (b < 0) b = ps.length;
    const A = ps[b - 1], B = ps[Math.min(b, ps.length - 1)], pa = A.pose(this.movil);
    if (A === B) return pa;
    const pb = B.pose(this.movil), t = suave((aguja - A.y) / (B.y - A.y));
    return { ax: mezcla(pa.ax, pb.ax, t), y: mezcla(pa.y, pb.y, t), rx: mezcla(pa.rx, pb.rx, t), rz: mezcla(pa.rz, pb.rz, t), s: mezcla(pa.s, pb.s, t), amp: mezcla(pa.amp, pb.amp, t) };
  }

  cuadro(dt: number) {
    if (!this.paradas.length) return;
    dt = Math.min(dt, 0.05);
    if (!this.quieto) this.unif.uT.value += dt;
    const o = this.objetivo(scrollY + innerHeight / 2);
    const k = this.snap || this.quieto || !this.actual ? 1 : 1 - Math.exp(-dt * 4);
    const a = (this.actual ??= { ...o });
    a.ax += (o.ax - a.ax) * k; a.y += (o.y - a.y) * k; a.rx += (o.rx - a.rx) * k; a.rz += (o.rz - a.rz) * k; a.s += (o.s - a.s) * k; a.amp += (o.amp - a.amp) * k;
    const pk = 1 - Math.exp(-dt * 3);
    this.puntero.sx += (this.puntero.x - this.puntero.sx) * pk;
    this.puntero.sy += (this.puntero.y - this.puntero.sy) * pk;
    const vivo = this.quieto ? 0 : 1;
    this.tela.position.set(a.ax * this.medioAncho, a.y - (1 - this.entrada) * 5.5, 0);
    this.tela.rotation.set(a.rx + this.puntero.sy * 0.05 * vivo, this.puntero.sx * 0.06 * vivo, a.rz);
    this.tela.scale.setScalar(a.s);
    this.unif.uAmp.value = a.amp;
    this.renderer.render(this.escena, this.camara);
    // Calidad adaptativa: si va lento dos segundos seguidos, baja la resolución.
    this.lentos = dt > 1 / 38 ? this.lentos + dt : 0;
    if (this.lentos > 2 && this.ratio > 1) { this.ratio = Math.max(1, this.ratio - 0.25); this.lentos = 0; this.renderer.setPixelRatio(this.ratio); this.renderer.setSize(innerWidth, innerHeight, false); }
  }

  destruir() {
    removeEventListener("resize", this.alMedir);
    removeEventListener("load", this.alMedir);
    removeEventListener("pointermove", this.alPuntero);
    this.tela.geometry.dispose();
    this.tela.material.dispose();
    this.escena.environment?.dispose();
    this.renderer.dispose();
  }
}
