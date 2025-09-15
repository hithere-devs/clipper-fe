import { cn } from '@/utils/common';
import type { ReactNode } from 'react';

interface GradientTextProps {
	children: ReactNode;
	className?: string;
	from?: string;
	to?: string;
	via?: string;
}

export default function GradientText({
	children,
	className,
	from = 'from-purple-400',
	to = 'to-pink-400',
	via = 'via-blue-500',
}: GradientTextProps) {
	return (
		<div
			className={cn(
				'bg-gradient-to-r bg-clip-text text-transparent font-bold',
				from,
				via,
				to,
				className
			)}
		>
			{children}
		</div>
	);
}
