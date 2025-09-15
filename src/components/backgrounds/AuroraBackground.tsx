import type { ReactNode } from 'react';

interface AuroraBackgroundProps {
	children: ReactNode;
	className?: string;
}

export default function AuroraBackground({
	children,
	className = '',
}: AuroraBackgroundProps) {
	return (
		<>
			<style>
				{`
          .aurora-container {
            position: relative;
            overflow: hidden;
          }

          .aurora {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background:
              radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, 0.3), transparent),
              radial-gradient(ellipse 80% 80% at 80% 50%, rgba(255, 119, 198, 0.3), transparent),
              radial-gradient(ellipse 80% 80% at 20% 80%, rgba(120, 219, 255, 0.3), transparent);
            background-size: 100% 100%, 80% 80%, 90% 90%;
            animation: aurora 8s ease-in-out infinite alternate;
          }

          @keyframes aurora {
            0% {
              transform: rotate(0deg) scale(1);
              opacity: 0.8;
            }
            50% {
              transform: rotate(180deg) scale(1.1);
              opacity: 1;
            }
            100% {
              transform: rotate(360deg) scale(1);
              opacity: 0.8;
            }
          }
        `}
			</style>
			<div className={`aurora-container ${className}`}>
				<div className='aurora' />
				<div className='relative z-10'>{children}</div>
			</div>
		</>
	);
}
