import { cn } from '@/utils/common';
import { type ReactNode } from 'react';

interface MagicBentoProps {
	children: ReactNode;
	className?: string;
}

export default function MagicBento({
	children,
	className,
}: MagicBentoProps) {
	return (
		<div
			className={cn(
				'grid gap-6',
				'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
				className
			)}
		>
			{children}
		</div>
	);
}
