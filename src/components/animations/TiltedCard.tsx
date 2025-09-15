import { cn } from '@/utils/common';
import { type ReactNode, useRef, useState } from 'react';

interface TiltedCardProps {
	children: ReactNode;
	className?: string;
}

export default function TiltedCard({
	children,
	className,
}: TiltedCardProps) {
	const [rotation, setRotation] = useState({ x: 0, y: 0 });
	const ref = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!ref.current) return;

		const rect = ref.current.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;

		const rotateX = (e.clientY - centerY) / 10;
		const rotateY = (centerX - e.clientX) / 10;

		setRotation({ x: rotateX, y: rotateY });
	};

	const handleMouseLeave = () => {
		setRotation({ x: 0, y: 0 });
	};

	return (
		<div
			ref={ref}
			className={cn(
				'transition-transform duration-300 ease-out',
				className
			)}
			style={{
				transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
			}}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			{children}
		</div>
	);
}
