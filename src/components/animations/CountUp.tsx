import { cn } from '@/utils/common';
import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
	target: number;
	className?: string;
	duration?: number;
	delay?: number;
	prefix?: string;
	suffix?: string;
}

export default function CountUp({
	target,
	className,
	duration = 2,
	delay = 0,
	prefix = '',
	suffix = '',
}: CountUpProps) {
	const [count, setCount] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, delay * 1000);

		return () => clearTimeout(timer);
	}, [delay]);

	useEffect(() => {
		if (!isVisible) return;

		let startTime: number;
		let animationFrame: number;

		const animate = (currentTime: number) => {
			if (!startTime) startTime = currentTime;
			const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

			const easeOutQuart = 1 - Math.pow(1 - progress, 4);
			setCount(Math.floor(easeOutQuart * target));

			if (progress < 1) {
				animationFrame = requestAnimationFrame(animate);
			}
		};

		animationFrame = requestAnimationFrame(animate);

		return () => {
			if (animationFrame) {
				cancelAnimationFrame(animationFrame);
			}
		};
	}, [isVisible, target, duration]);

	return (
		<span ref={ref} className={cn(className)}>
			{prefix}{count.toLocaleString()}{suffix}
		</span>
	);
}
