import { cn } from '@/utils/common';
import { useState, useEffect, useRef } from 'react';

interface CounterProps {
	target: number;
	duration?: number;
	className?: string;
	prefix?: string;
	suffix?: string;
	decimals?: number;
}

export default function Counter({
	target,
	duration = 2000,
	className,
	prefix = '',
	suffix = '',
	decimals = 0,
}: CounterProps) {
	const [count, setCount] = useState(0);
	const [hasStarted, setHasStarted] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !hasStarted) {
					setHasStarted(true);

					const startTime = Date.now();
					const endTime = startTime + duration;

					const updateCount = () => {
						const now = Date.now();
						const progress = Math.min((now - startTime) / duration, 1);

						// Easing function for smooth animation
						const easeOutQuart = 1 - Math.pow(1 - progress, 4);
						const currentCount = target * easeOutQuart;

						setCount(currentCount);

						if (now < endTime) {
							requestAnimationFrame(updateCount);
						} else {
							setCount(target);
						}
					};

					requestAnimationFrame(updateCount);
				}
			},
			{ threshold: 0.5 }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, [target, duration, hasStarted]);

	const displayValue = count.toFixed(decimals);

	return (
		<div ref={ref} className={cn('font-bold', className)}>
			{prefix}
			{displayValue}
			{suffix}
		</div>
	);
}
