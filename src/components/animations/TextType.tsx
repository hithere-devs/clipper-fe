import { cn } from '@/utils/common';
import { useEffect, useState } from 'react';

interface TextTypeProps {
	text: string;
	className?: string;
	speed?: number;
	delay?: number;
	cursor?: boolean;
}

export default function TextType({
	text,
	className,
	speed = 50,
	delay = 0,
	cursor = true,
}: TextTypeProps) {
	const [displayedText, setDisplayedText] = useState('');
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isTyping, setIsTyping] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsTyping(true);
		}, delay * 1000);

		return () => clearTimeout(timer);
	}, [delay]);

	useEffect(() => {
		if (!isTyping || currentIndex >= text.length) return;

		const timer = setTimeout(() => {
			setDisplayedText(text.slice(0, currentIndex + 1));
			setCurrentIndex(currentIndex + 1);
		}, speed);

		return () => clearTimeout(timer);
	}, [currentIndex, isTyping, text, speed]);

	return (
		<span className={cn('inline-block', className)}>
			{displayedText}
			{cursor && (
				<span className="animate-pulse text-current">|</span>
			)}
		</span>
	);
}
