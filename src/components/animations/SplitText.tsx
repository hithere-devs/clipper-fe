import { cn } from '@/utils/common';
import { useEffect, useRef, useState } from 'react';

interface SplitTextProps {
	text: string;
	className?: string;
	delay?: number;
	duration?: number;
	splitBy?: 'char' | 'word';
}

export default function SplitText({
	text,
	className,
	delay = 0,
	duration = 0.8,
	splitBy = 'char',
}: SplitTextProps) {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, delay * 1000);

		return () => clearTimeout(timer);
	}, [delay]);

	const splitText = splitBy === 'char' ? text.split('') : text.split(' ');

	return (
		<div ref={ref} className={cn('inline-block', className)}>
			{splitText.map((char, index) => (
				<span
					key={index}
					className={cn(
						'inline-block transition-all duration-500 ease-out',
						isVisible
							? 'translate-y-0 opacity-100'
							: 'translate-y-8 opacity-0'
					)}
					style={{
						transitionDelay: `${(index * duration * 100) / splitText.length}ms`,
					}}
				>
					{char === ' ' ? '\u00A0' : char}
				</span>
			))}
		</div>
	);
}
