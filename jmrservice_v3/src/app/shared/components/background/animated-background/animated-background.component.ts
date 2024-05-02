// animated-background.component.ts
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-animated-background',
  templateUrl: './animated-background.component.html',
  standalone: true,
  styleUrl: './animated-background.component.scss'
})
export class AnimatedBackgroundComponent implements OnInit {
  @ViewChild('backgroundCanvas', { static: true }) backgroundCanvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private squares: { x: number, y: number, size: number, speed: number, opacity: number }[] = [];

  ngOnInit(): void {
    this.ctx = this.backgroundCanvas.nativeElement.getContext('2d')!;
    this.resizeCanvas();
    this.generateSquares();
    this.animate();
  }

  resizeCanvas() {
    this.backgroundCanvas.nativeElement.width = window.innerWidth;
    this.backgroundCanvas.nativeElement.height = window.innerHeight;
  }

  generateSquares() {
    for (let i = 0; i < 10; i++) {
      const size = Math.random() * 70 + 40; // Random size between 40 and 100
      const x = 0;
      const y = Math.random() * this.backgroundCanvas.nativeElement.height;
      const speed = Math.random() + 1; // Random speed between 0 and 1
      const opacity: number = Math.random() // Random opacity between 0.1 and 0.9
      this.squares.push({ x, y, size, speed, opacity});
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    this.ctx.clearRect(0, 0, this.backgroundCanvas.nativeElement.width, this.backgroundCanvas.nativeElement.height);

    this.squares.forEach(square => {
      square.x -= square.speed;
      square.y -= square.speed * 0.5 + 5;
      square.speed -= 0.0001;


      if (square.y < -square.size) {
        square.y = this.backgroundCanvas.nativeElement.height + Math.random() * 100;
        square.x = Math.random() * this.backgroundCanvas.nativeElement.width;
        square.opacity = Math.random();
      }
      this.drawSquare(square);
    });
  }

  drawSquare(square: { x: number, y: number, size: number, speed: number, opacity: number }) {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.fillStyle = '#808080'; // Grey color
    this.ctx.globalAlpha = square.opacity;
    this.ctx.translate(square.x, square.y);
    this.ctx.moveTo(square.size / 2, 0);
    this.ctx.arcTo(square.size, 0, square.size, square.size, square.size / 2);
    this.ctx.arcTo(square.size, square.size, 0, square.size, square.size / 2);
    this.ctx.arcTo(0, square.size, 0, 0, square.size / 2);
    this.ctx.arcTo(0, 0, square.size, 0, square.size / 2);
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.restore();
  }
}
