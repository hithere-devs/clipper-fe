import { cn } from '@/utils/common';
import { useEffect, useRef } from 'react';

interface GalaxyProps {
	className?: string;
}

export default function Galaxy({ className }: GalaxyProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		let animationId: number;
		const stars: Array<{
			x: number;
			y: number;
			vx: number;
			vy: number;
			size: number;
			opacity: number;
		}> = [];

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		const initStars = () => {
			stars.length = 0;
			for (let i = 0; i < 200; i++) {
				stars.push({
					x: Math.random() * canvas.width,
					y: Math.random() * canvas.height,
					vx: (Math.random() - 0.5) * 0.5,
					vy: (Math.random() - 0.5) * 0.5,
					size: Math.random() * 2 + 1,
					opacity: Math.random() * 0.8 + 0.2,
				});
			}
		};

		const drawGalaxy = () => {
			ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			// Draw stars
			stars.forEach((star) => {
				star.x += star.vx;
				star.y += star.vy;

				// Wrap around screen
				if (star.x < 0) star.x = canvas.width;
				if (star.x > canvas.width) star.x = 0;
				if (star.y < 0) star.y = canvas.height;
				if (star.y > canvas.height) star.y = 0;

				ctx.beginPath();
				ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
				ctx.fill();
			});

			// Draw nebula
			const gradient = ctx.createRadialGradient(
				canvas.width / 2,
				canvas.height / 2,
				0,
				canvas.width / 2,
				canvas.height / 2,
				Math.min(canvas.width, canvas.height) / 2
			);
			gradient.addColorStop(0, 'rgba(147, 51, 234, 0.1)');
			gradient.addColorStop(0.5, 'rgba(236, 72, 153, 0.05)');
			gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

			ctx.fillStyle = gradient;
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			animationId = requestAnimationFrame(drawGalaxy);
		};

		resizeCanvas();
		initStars();
		drawGalaxy();

		window.addEventListener('resize', () => {
			resizeCanvas();
			initStars();
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
