import { cn } from '@/utils/common';
import { type ReactNode, useRef, useState } from 'react';

interface MagnetProps {
	children: ReactNode;
	className?: string;
	strength?: number;
}

export default function Magnet({
	children,
	className,
	strength = 0.3,
}: MagnetProps) {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const ref = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!ref.current) return;

		const rect = ref.current.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;

		const deltaX = (e.clientX - centerX) * strength;
		const deltaY = (e.clientY - centerY) * strength;

		setPosition({ x: deltaX, y: deltaY });
	};

	const handleMouseLeave = () => {
		setPosition({ x: 0, y: 0 });
	};

	return (
		<div
			ref={ref}
			className={cn(
				'transition-transform duration-300 ease-out',
				className
			)}
			style={{
				transform: `translate(${position.x}px, ${position.y}px)`,
			}}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			{children}
		</div>
	);
}
