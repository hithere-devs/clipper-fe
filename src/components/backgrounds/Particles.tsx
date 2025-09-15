import { cn } from '@/utils/common';
import { useEffect, useRef } from 'react';

interface ParticlesProps {
	className?: string;
}

export default function Particles({ className }: ParticlesProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		let animationId: number;
		const particles: Array<{
			x: number;
			y: number;
			vx: number;
			vy: number;
			size: number;
			opacity: number;
			life: number;
		}> = [];

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		const createParticle = () => {
			return {
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				vx: (Math.random() - 0.5) * 2,
				vy: (Math.random() - 0.5) * 2,
				size: Math.random() * 3 + 1,
				opacity: Math.random() * 0.5 + 0.2,
				life: 1,
			};
		};

		const initParticles = () => {
			particles.length = 0;
			for (let i = 0; i < 100; i++) {
				particles.push(createParticle());
			}
		};

		const drawParticles = () => {
			ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			particles.forEach((particle, index) => {
				particle.x += particle.vx;
				particle.y += particle.vy;
				particle.life -= 0.01;

				// Wrap around screen
				if (particle.x < 0) particle.x = canvas.width;
				if (particle.x > canvas.width) particle.x = 0;
				if (particle.y < 0) particle.y = canvas.height;
				if (particle.y > canvas.height) particle.y = 0;

				// Reset particle if life is over
				if (particle.life <= 0) {
					particles[index] = createParticle();
				}

				ctx.beginPath();
				ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(147, 51, 234, ${particle.opacity * particle.life})`;
				ctx.fill();
			});

			animationId = requestAnimationFrame(drawParticles);
		};

		resizeCanvas();
		initParticles();
		drawParticles();

		window.addEventListener('resize', () => {
			resizeCanvas();
			initParticles();
		});

		return () => {
			window.removeEventListener('resize', resizeCanvas);
			cancelAnimationFrame(animationId);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className={cn('absolute inset-0 w-full h-full', className)}
		/>
	);
}
