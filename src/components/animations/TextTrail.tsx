import { cn } from '@/utils/common';
import { useEffect, useRef, useState } from 'react';

interface TextTrailProps {
	text: string;
	className?: string;
	delay?: number;
	duration?: number;
}

export default function TextTrail({
	text,
	className,
	delay = 0,
	duration = 1,
}: TextTrailProps) {
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
					? 'translate-y-0 opacity-100'
					: 'translate-y-4 opacity-0'
			)}
			style={{
				transitionDuration: `${duration * 1000}ms`,
			}}
		>
			{text}
		</div>
	);
}
