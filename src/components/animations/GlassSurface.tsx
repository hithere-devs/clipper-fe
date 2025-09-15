import { cn } from '@/utils/common';
import { type ReactNode } from 'react';

interface GlassSurfaceProps {
	children: ReactNode;
	className?: string;
}

export default function GlassSurface({
	children,
	className,
}: GlassSurfaceProps) {
	return (
		<div
			className={cn(
				'backdrop-blur-md bg-white/10 border border-white/20',
				'shadow-xl shadow-black/20',
				className
			)}
		>
			{children}
		</div>
	);
}
