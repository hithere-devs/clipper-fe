import { cn } from '@/utils/common';
import type { ReactNode } from 'react';

interface ShinyTextProps {
	children: ReactNode;
	className?: string;
	shimmerWidth?: number;
}

export default function ShinyText({
	children,
	className,
	shimmerWidth = 100,
}: ShinyTextProps) {
	return (
		<>
			<style>
				{`
          @keyframes shimmer {
            0% { background-position: -100% 0; }
            100% { background-position: 100% 0; }
          }
          .shimmer-text {
            background-image: linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.8) 50%, transparent 75%);
            animation: shimmer 2s infinite;
          }
        `}
			</style>
			<div
				className={cn(
					'relative inline-block overflow-hidden bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 bg-clip-text text-transparent shimmer-text',
					className
				)}
				style={{
					backgroundSize: `${shimmerWidth * 2}% 100%`,
				}}
			>
				{children}
			</div>
		</>
	);
}
