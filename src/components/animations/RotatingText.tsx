import { cn } from '@/utils/common';
import { useState, useEffect } from 'react';

interface RotatingTextProps {
	texts: string[];
	className?: string;
	interval?: number;
}

export default function RotatingText({
	texts,
	className,
	interval = 3000,
}: RotatingTextProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		const timer = setInterval(() => {
			setIsAnimating(true);
			setTimeout(() => {
				setCurrentIndex((prev) => (prev + 1) % texts.length);
				setIsAnimating(false);
			}, 300);
		}, interval);

		return () => clearInterval(timer);
	}, [texts.length, interval]);

	return (
		<div className={cn('relative inline-block', className)}>
			<div
				className={cn(
					'transition-all duration-300 ease-in-out',
					isAnimating
						? 'opacity-0 transform scale-95'
						: 'opacity-100 transform scale-100'
				)}
			>
				{texts[currentIndex]}
			</div>
		</div>
	);
}
