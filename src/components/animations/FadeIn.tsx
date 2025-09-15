import { cn } from '@/utils/common';
import type { ReactNode } from 'react';
import { useState, useEffect, useRef } from 'react';

interface FadeInProps {
	children: ReactNode;
	className?: string;
	delay?: number;
	direction?: 'up' | 'down' | 'left' | 'right';
	distance?: number;
}

export default function FadeIn({
	children,
	className,
	delay = 0,
	direction = 'up',
	distance = 30,
}: FadeInProps) {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setTimeout(() => setIsVisible(true), delay);
				}
			},
			{ threshold: 0.1 }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, [delay]);

	const getTransform = () => {
		if (isVisible) return 'translate(0, 0)';

		switch (direction) {
			case 'up':
				return `translate(0, ${distance}px)`;
			case 'down':
				return `translate(0, -${distance}px)`;
			case 'left':
				return `translate(${distance}px, 0)`;
			case 'right':
				return `translate(-${distance}px, 0)`;
			default:
				return `translate(0, ${distance}px)`;
		}
	};

	return (
		<div
			ref={ref}
			className={cn('transition-all duration-700 ease-out', className)}
			style={{
				opacity: isVisible ? 1 : 0,
				transform: getTransform(),
			}}
		>
			{children}
		</div>
	);
}
