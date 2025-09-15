import { cn } from '@/utils/common';
import type { ReactNode } from 'react';

interface SpotlightCardProps {
	children: ReactNode;
	className?: string;
	spotlightColor?: string;
}

export default function SpotlightCard({
	children,
	className,
	spotlightColor = 'rgba(255, 255, 255, 0.1)',
}: SpotlightCardProps) {
	return (
		<>
			<style>
				{`
          .spotlight-card {
            position: relative;
            overflow: hidden;
          }

          .spotlight-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(
              600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
              ${spotlightColor},
              transparent 40%
            );
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
          }

          .spotlight-card:hover::before {
            opacity: 1;
          }
        `}
			</style>
			<div
				className={cn('spotlight-card', className)}
				onMouseMove={(e) => {
					const rect = e.currentTarget.getBoundingClientRect();
					const x = ((e.clientX - rect.left) / rect.width) * 100;
					const y = ((e.clientY - rect.top) / rect.height) * 100;
					e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
					e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
				}}
			>
				{children}
			</div>
		</>
	);
}
