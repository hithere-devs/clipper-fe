import { cn } from '@/utils/common';
import { useEffect, useRef, useState } from 'react';

interface GlowTextProps {
	text: string;
	className?: string;
	delay?: number;
	glowColor?: string;
	intensity?: 'low' | 'medium' | 'high';
}

export default function GlowText({
	text,
	className,
	delay = 0,
	glowColor = 'rgba(168, 85, 247, 0.6)',
	intensity = 'medium',
}: GlowTextProps) {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, delay * 1000);

		return () => clearTimeout(timer);
	}, [delay]);

	const getGlowIntensity = () => {
		switch (intensity) {
			case 'low':
				return '0 0 10px';
			case 'medium':
				return '0 0 20px';
			case 'high':
				return '0 0 30px';
			default:
				return '0 0 20px';
		}
	};

	return (
		<div
			ref={ref}
			className={cn(
				'transition-all duration-1000 ease-out',
				isVisible ? 'opacity-100' : 'opacity-0',
				className
			)}
			style={{
				textShadow: isVisible
					? `${getGlowIntensity()} ${glowColor}, ${getGlowIntensity()} ${glowColor}`
					: 'none',
				transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
			}}
		>
			{text}
		</div>
	);
}
