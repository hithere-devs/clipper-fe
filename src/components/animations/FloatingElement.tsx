import { cn } from '@/utils/common';
import type { ReactNode } from 'react';

interface FloatingElementProps {
	children: ReactNode;
	className?: string;
	delay?: number;
	amplitude?: number;
	duration?: number;
}

export default function FloatingElement({
	children,
	className,
	delay = 0,
	amplitude = 20,
	duration = 3,
}: FloatingElementProps) {
	return (
		<>
			<style>
				{`
          .floating-element {
            animation: float ${duration}s ease-in-out infinite;
            animation-delay: ${delay}s;
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-${amplitude}px);
            }
          }
        `}
			</style>
			<div className={cn('floating-element', className)}>{children}</div>
		</>
	);
}
