import { cn } from '@/utils/common';
import { useEffect, useRef, useState } from 'react';

interface DecryptedTextProps {
	text: string;
	className?: string;
	delay?: number;
	duration?: number;
}

export default function DecryptedText({
	text,
	className,
	delay = 0,
	duration = 1.5,
}: DecryptedTextProps) {
	const [displayedText, setDisplayedText] = useState('');
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

		let currentIndex = 0;
		const interval = setInterval(() => {
			if (currentIndex <= text.length) {
				setDisplayedText(text.slice(0, currentIndex));
				currentIndex++;
			} else {
				clearInterval(interval);
			}
		}, (duration * 1000) / text.length);

		return () => clearInterval(interval);
	}, [isVisible, text, duration]);

	return (
		<div
			ref={ref}
			className={cn(
				'transition-all duration-500',
				className,
				isVisible ? 'opacity-100' : 'opacity-0'
			)}
		>
			{displayedText}
			<span className="animate-pulse">|</span>
		</div>
	);
}
