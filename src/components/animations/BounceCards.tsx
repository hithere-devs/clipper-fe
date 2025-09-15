import { cn } from '@/utils/common';
import { type ReactNode, useRef } from 'react';

interface BounceCardsProps {
	children: ReactNode;
	className?: string;
}

export default function BounceCards({
	children,
	className,
}: BounceCardsProps) {
	const ref = useRef<HTMLDivElement>(null);

	return (
		<div
			ref={ref}
			className={cn(
				'transition-all duration-300 ease-out',
				'hover:scale-105 hover:-translate-y-2',
				className
			)}
		>
			{children}
		</div>
	);
}
