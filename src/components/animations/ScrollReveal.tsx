import { cn } from '@/utils/common';
import { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	direction?: 'up' | 'down' | 'left' | 'right';
	distance?: number;
}

export default function ScrollReveal({
	children,
	className,
	delay = 0,
	direction = 'up',
	distance = 50,
}: ScrollRevealProps) {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						setIsVisible(true);
					}, delay * 1000);
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
		if (!isVisible) {
			switch (direction) {
				case 'up':
					return `translateY(${distance}px)`;
				case 'down':
					return `translateY(-${distance}px)`;
				case 'left':
					return `translateX(${distance}px)`;
				case 'right':
					return `translateX(-${distance}px)`;
				default:
					return `translateY(${distance}px)`;
			}
		}
		return 'translateY(0) translateX(0)';
	};

	return (
		<div
			ref={ref}
			className={cn(
				'transition-all duration-1000 ease-out',
				className
			)}
			style={{
				transform: getTransform(),
				opacity: isVisible ? 1 : 0,
			}}
		>
			{children}
		</div>
	);
}
