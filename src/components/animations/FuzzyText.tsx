import { cn } from '@/utils/common';
import { useEffect, useRef, useState } from 'react';

interface FuzzyTextProps {
	text: string;
	className?: string;
	delay?: number;
}

export default function FuzzyText({
	text,
	className,
	delay = 0,
}: FuzzyTextProps) {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, delay * 1000);

		return () => clearTimeout(timer);
	}, [delay]);

	return (
		<div
			ref={ref}
			className={cn(
				'transition-all duration-1000 ease-out',
				className,
				isVisible
					? 'blur-0 opacity-100'
					: 'blur-sm opacity-0'
			)}
		>
			{text}
		</div>
	);
}
