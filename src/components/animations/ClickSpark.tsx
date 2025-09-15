import { cn } from '@/utils/common';
import { type ReactNode, useRef, useState } from 'react';

interface ClickSparkProps {
	children: ReactNode;
	className?: string;
}

export default function ClickSpark({
	children,
	className,
}: ClickSparkProps) {
	const [sparks, setSparks] = useState<Array<{
		id: number;
		x: number;
		y: number;
		vx: number;
		vy: number;
		life: number;
	}>>([]);
	const ref = useRef<HTMLDivElement>(null);

	const createSpark = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!ref.current) return;

		const rect = ref.current.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		const newSparks = Array.from({ length: 8 }, (_, i) => ({
			id: Date.now() + i,
			x,
			y,
			vx: (Math.random() - 0.5) * 10,
			vy: (Math.random() - 0.5) * 10,
			life: 1,
		}));

		setSparks(prev => [...prev, ...newSparks]);
	};

	// Update sparks
	useState(() => {
		const interval = setInterval(() => {
			setSparks(prev =>
				prev
					.map(spark => ({
						...spark,
						x: spark.x + spark.vx,
						y: spark.y + spark.vy,
						life: spark.life - 0.02,
					}))
					.filter(spark => spark.life > 0)
			);
		}, 16);

		return () => clearInterval(interval);
	});

	return (
		<div
			ref={ref}
			className={cn('relative', className)}
			onClick={createSpark}
		>
			{children}
			{sparks.map(spark => (
				<div
					key={spark.id}
					className="absolute w-1 h-1 bg-yellow-400 rounded-full pointer-events-none"
					style={{
						left: spark.x,
						top: spark.y,
						opacity: spark.life,
						transform: `scale(${spark.life})`,
					}}
				/>
			))}
		</div>
	);
}
