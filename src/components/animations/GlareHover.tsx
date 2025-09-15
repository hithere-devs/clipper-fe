import { cn } from '@/utils/common';
import { type ReactNode, useRef, useState } from 'react';

interface GlareHoverProps {
	children: ReactNode;
	className?: string;
}

export default function GlareHover({
	children,
	className,
}: GlareHoverProps) {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isHovered, setIsHovered] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!ref.current) return;

		const rect = ref.current.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		setMousePosition({ x, y });
	};

	return (
		<div
			ref={ref}
			className={cn(
				'relative overflow-hidden transition-all duration-300',
				className
			)}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{children}
			{isHovered && (
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
					}}
				/>
			)}
		</div>
	);
}
