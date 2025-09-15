import { cn } from '@/utils/common';
import { useEffect, useRef, useState } from 'react';

interface BlurTextProps {
	text: string;
	className?: string;
	delay?: number;
	duration?: number;
}

export default function BlurText({
	text,
	className,
	delay = 0,
	duration = 1,
}: BlurTextProps) {
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
					: 'blur-lg opacity-0'
			)}
			style={{
				transitionDuration: `${duration * 1000}ms`,
			}}
		>
			{text}
		</div>
	);
}
