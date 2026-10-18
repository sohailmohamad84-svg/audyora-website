/**
 * Original Hero Canvas: Harmonic Audience Resonance Network.
 * An interactive mathematical particle wave representing audience reach,
 * creative synergy, and marketing connectivity.
 */
export class HeroCanvas {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private animationFrameId: number | null = null;
  private isVisible = true;
  private width = 0;
  private height = 0;
  private mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
  private particles: Array<{
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    radius: number;
    color: string;
    speed: number;
    angle: number;
  }> = [];

  constructor(canvasElement: HTMLCanvasElement) {
    this.canvas = canvasElement;
    const context = this.canvas.getContext("2d");
    if (!context) {
      throw new Error("Canvas 2D context is unavailable");
    }
    this.ctx = context;
    this.init();
  }

  private init(): void {
    this.resize();
    window.addEventListener("resize", () => this.resize());

    // Mouse listener
    window.addEventListener("mousemove", (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.targetX = e.clientX - rect.left;
      this.mouse.targetY = e.clientY - rect.top;
    });

    // Theme listener to refresh particle colors
    window.addEventListener("audyora-theme-change", () => {
      this.createParticles();
    });

    // Observer to pause animation when not on screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          this.isVisible = entry.isIntersecting;
          if (this.isVisible && !this.animationFrameId) {
            this.animate();
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(this.canvas);

    this.createParticles();
    this.animate();
  }

  private resize(): void {
    const parent = this.canvas.parentElement;
    if (!parent) return;

    this.width = parent.clientWidth;
    this.height = parent.clientHeight || 600;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.ctx.scale(dpr, dpr);
    this.createParticles();
  }

  private createParticles(): void {
    this.particles = [];
    const particleCount = Math.floor(Math.min(this.width / 18, 55));
    const colors = ["#6366F1", "#38BDF8", "#8B5CF6", "#A855F7"];

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * this.width;
      const y = Math.random() * this.height;
      this.particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        radius: Math.random() * 2 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 0.02 + 0.008,
        angle: Math.random() * Math.PI * 2,
      });
    }
  }

  private animate(): void {
    if (!this.isVisible) {
      this.animationFrameId = null;
      return;
    }

    // Smooth mouse lerp
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.08;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.08;

    this.ctx.clearRect(0, 0, this.width, this.height);

    // Update and draw particles
    const time = Date.now() * 0.001;

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      // Harmonic motion
      p.angle += p.speed;
      p.x = p.baseX + Math.sin(p.angle + time) * 35;
      p.y = p.baseY + Math.cos(p.angle * 0.8 + time) * 25;

      // Mouse repulsion/attraction field
      const dx = this.mouse.x - p.x;
      const dy = this.mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 140) {
        const force = (140 - dist) / 140;
        p.x -= (dx / dist) * force * 18;
        p.y -= (dy / dist) * force * 18;
      }

      // Draw particle glow
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = p.color;
      this.ctx.fill();

      // Connect near neighbors (Audience Network)
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const linkDx = p.x - p2.x;
        const linkDy = p.y - p2.y;
        const linkDist = Math.sqrt(linkDx * linkDx + linkDy * linkDy);

        if (linkDist < 120) {
          const alpha = (1 - linkDist / 120) * 0.22;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
          this.ctx.lineWidth = 1;
          this.ctx.stroke();
        }
      }
    }

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  public destroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}
