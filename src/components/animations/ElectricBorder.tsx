import { cn } from '@/utils/common';
import { type ReactNode, useRef, useState } from 'react';

interface ElectricBorderProps {
	children: ReactNode;
	className?: string;
}

export default function ElectricBorder({
	children,
	className,
}: ElectricBorderProps) {
	const [isHovered, setIsHovered] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	return (
		<div
			ref={ref}
			className={cn(
				'relative overflow-hidden rounded-xl',
				className
			)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* Electric border effect */}
			<div
				className={cn(
					'absolute inset-0 rounded-xl transition-opacity duration-300',
					isHovered ? 'opacity-100' : 'opacity-0'
				)}
				style={{
					background: 'linear-gradient(45deg, #8b5cf6, #ec4899, #f59e0b, #8b5cf6)',
					backgroundSize: '400% 400%',
					animation: isHovered ? 'gradientShift 2s ease infinite' : 'none',
				}}
			/>
			<div className="relative z-10 bg-black/90 rounded-xl p-1">
				{children}
			</div>
			<style>{`
				@keyframes gradientShift {
					0% { background-position: 0% 50%; }
					50% { background-position: 100% 50%; }
					100% { background-position: 0% 50%; }
				}
			`}</style>
		</div>
	);
}
