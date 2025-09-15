import { cn } from '@/utils/common';
import { useState, useEffect } from 'react';

interface TypewriterProps {
	text: string;
	className?: string;
	speed?: number;
	delay?: number;
	cursor?: boolean;
}

export default function Typewriter({
	text,
	className,
	speed = 100,
	delay = 0,
	cursor = true,
}: TypewriterProps) {
	const [displayText, setDisplayText] = useState('');
	const [currentIndex, setCurrentIndex] = useState(0);
	const [showCursor, setShowCursor] = useState(true);

	useEffect(() => {
		const startTyping = () => {
			if (currentIndex < text.length) {
				const timer = setTimeout(() => {
					setDisplayText(text.slice(0, currentIndex + 1));
					setCurrentIndex(currentIndex + 1);
				}, speed);
				return () => clearTimeout(timer);
			}
		};

		const delayTimer = setTimeout(startTyping, delay);
		return () => clearTimeout(delayTimer);
	}, [currentIndex, text, speed, delay]);

	// Cursor blinking effect
	useEffect(() => {
		if (cursor) {
			const cursorTimer = setInterval(() => {
				setShowCursor((prev) => !prev);
			}, 500);
			return () => clearInterval(cursorTimer);
		}
	}, [cursor]);

	return (
		<span className={cn('', className)}>
			{displayText}
			{cursor && (
				<span className={cn('ml-1', showCursor ? 'opacity-100' : 'opacity-0')}>
					|
				</span>
			)}
		</span>
	);
}
