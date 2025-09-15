import { cn } from '@/utils/common';
import type { ReactNode } from 'react';

interface PulseProps {
	children: ReactNode;
	className?: string;
	intensity?: 'subtle' | 'medium' | 'strong';
	color?: string;
}

export default function Pulse({
	children,
	className,
	intensity = 'medium',
	color = 'rgba(168, 85, 247, 0.4)',
}: PulseProps) {
	const getScale = () => {
		switch (intensity) {
			case 'subtle':
				return '1.02';
			case 'medium':
				return '1.05';
			case 'strong':
				return '1.1';
			default:
				return '1.05';
		}
	};

	return (
		<>
			<style>
				{`
          .pulse-element {
            position: relative;
          }

          .pulse-element::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            height: 100%;
            background: ${color};
            border-radius: inherit;
            transform: translate(-50%, -50%) scale(1);
            animation: pulse 2s ease-in-out infinite;
            z-index: -1;
          }

          @keyframes pulse {
            0%, 100% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 0.7;
            }
            50% {
              transform: translate(-50%, -50%) scale(${getScale()});
              opacity: 0.3;
            }
          }
        `}
			</style>
			<div className={cn('pulse-element', className)}>{children}</div>
		</>
	);
}
