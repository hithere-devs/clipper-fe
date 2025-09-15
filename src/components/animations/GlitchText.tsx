import { cn } from '@/utils/common';
import { useEffect, useRef, useState } from 'react';

interface GlitchTextProps {
	text: string;
	className?: string;
	delay?: number;
	duration?: number;
}

export default function GlitchText({
	text,
	className,
	delay = 0,
}: GlitchTextProps) {
	const [isVisible, setIsVisible] = useState(false);
	const [isGlitching, setIsGlitching] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, delay * 1000);

		return () => clearTimeout(timer);
	}, [delay]);

	useEffect(() => {
		if (!isVisible) return;

		const glitchInterval = setInterval(() => {
			setIsGlitching(true);
			setTimeout(() => setIsGlitching(false), 200);
		}, 3000);

		return () => clearInterval(glitchInterval);
	}, [isVisible]);

	return (
		<div
			ref={ref}
			className={cn(
				'relative inline-block transition-all duration-500',
				className,
				isVisible ? 'opacity-100' : 'opacity-0'
			)}
		>
			<span
				className={cn(
					'relative z-10 transition-all duration-200',
					isGlitching && 'animate-pulse'
				)}
			>
				{text}
			</span>
			{isGlitching && (
				<>
					<span
						className="absolute top-0 left-0 text-red-500 opacity-70 animate-pulse"
						style={{
							transform: 'translate(2px, -2px)',
							clipPath: 'polygon(0 0, 100% 0, 100% 35%, 0 35%)',
						}}
					>
						{text}
					</span>
					<span
						className="absolute top-0 left-0 text-blue-500 opacity-70 animate-pulse"
						style={{
							transform: 'translate(-2px, 2px)',
							clipPath: 'polygon(0 65%, 100% 65%, 100% 100%, 0 100%)',
						}}
					>
						{text}
					</span>
				</>
			)}
		</div>
	);
}
