import { cn } from '@/utils/common';
import { useEffect, useRef } from 'react';

interface AuroraProps {
	className?: string;
}

export default function Aurora({ className }: AuroraProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		let animationId: number;

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		const drawAurora = (time: number) => {
			// Safety check for canvas dimensions
			if (canvas.width === 0 || canvas.height === 0) return;

			ctx.clearRect(0, 0, canvas.width, canvas.height);

			const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
			gradient.addColorStop(0, 'rgba(147, 51, 234, 0.1)');
			gradient.addColorStop(0.5, 'rgba(236, 72, 153, 0.1)');
			gradient.addColorStop(1, 'rgba(251, 146, 60, 0.1)');

			ctx.fillStyle = gradient;
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			// Add flowing particles
			for (let i = 0; i < 50; i++) {
				const x = (Math.sin(time * 0.001 + i) * canvas.width) / 2 + canvas.width / 2;
				const y = (Math.cos(time * 0.0008 + i * 0.5) * canvas.height) / 2 + canvas.height / 2;
				const size = Math.max(0.5, Math.abs(Math.sin(time * 0.002 + i) * 3) + 1); // Ensure positive radius with minimum

				// Additional safety checks
				if (isNaN(x) || isNaN(y) || isNaN(size)) continue;

				ctx.beginPath();
				ctx.arc(x, y, size, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(147, 51, 234, ${Math.max(0, Math.min(1, Math.abs(Math.sin(time * 0.003 + i) * 0.3) + 0.3))})`;
				ctx.fill();
			}

			animationId = requestAnimationFrame(drawAurora);
		};

		resizeCanvas();
		drawAurora(0);

		window.addEventListener('resize', resizeCanvas);

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
