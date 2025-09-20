import { useEffect, useRef, type FC, type ReactNode } from 'react';
import { gsap } from 'gsap';

interface GridMotionProps {
	items?: (string | ReactNode)[];
	gradientColor?: string;
	className?: string;
}

const GridMotion: FC<GridMotionProps> = ({
	items = [],
	gradientColor = 'rgba(0, 0, 0, 0.95)',
	className = '',
}) => {
	const gridRef = useRef<HTMLDivElement>(null);
	const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
	const mouseXRef = useRef<number>(window.innerWidth / 2);

	const totalItems = 28;

	// More subtle Clipper-themed content
	const clipperItems = [
		'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3RxZzdja2puNHBjemJ2c29wNmZqeWh6ZTBibGZnZWxwZmJobmM4MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S3nv0DkUTqCWQk1u9P/giphy.gif',
		<div key='viral-1' className='text-gray-400 text-sm font-medium opacity-60'>
			Viral
		</div>,
		'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXBpcjFzMmlweDhjZXM0eHQ4bXNrMTI0MmE2dTV5N2k5dG05OXY0byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o8gLk4EnYuHVCK7tZg/giphy.gif',
		<div key='ai-1' className='text-gray-400 text-sm font-medium opacity-60'>
			AI Clips
		</div>,
		'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzM4ZjlxZzE4a2lydG93Ynk4OXBvNTlzOGVzcmZ4MmxjcWQ2bGdqdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/j0QzDgFZRX2njRxxtP/giphy.gif',
		<div key='score-1' className='text-gray-400 text-sm font-medium opacity-60'>
			Score
		</div>,
		'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3RxZzdja2puNHBjemJ2c29wNmZqeWh6ZTBibGZnZWxwZmJobmM4MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S3nv0DkUTqCWQk1u9P/giphy.gif',
		<div
			key='caption-1'
			className='text-gray-400 text-sm font-medium opacity-60'
		>
			Captions
		</div>,
		'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXBpcjFzMmlweDhjZXM0eHQ4bXNrMTI0MmE2dTV5N2k5dG05OXY0byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o8gLk4EnYuHVCK7tZg/giphy.gif',
		<div key='trend-1' className='text-gray-400 text-sm font-medium opacity-60'>
			Trending
		</div>,
		'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzM4ZjlxZzE4a2lydG93Ynk4OXBvNTlzOGVzcmZ4MmxjcWQ2bGdqdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/j0QzDgFZRX2njRxxtP/giphy.gif',
		<div
			key='export-1'
			className='text-gray-400 text-sm font-medium opacity-60'
		>
			Export
		</div>,
		'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3RxZzdja2puNHBjemJ2c29wNmZqeWh6ZTBibGZnZWxwZmJobmM4MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S3nv0DkUTqCWQk1u9P/giphy.gif',
		<div
			key='social-1'
			className='text-gray-400 text-sm font-medium opacity-60'
		>
			Social
		</div>,
		'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXBpcjFzMmlweDhjZXM0eHQ4bXNrMTI0MmE2dTV5N2k5dG05OXY0byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o8gLk4EnYuHVCK7tZg/giphy.gif',
		<div key='tiktok-1' className='text-purple-400 font-bold'>
			🎵 TIKTOK
		</div>,
		'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzM4ZjlxZzE4a2lydG93Ynk4OXBvNTlzOGVzcmZ4MmxjcWQ2bGdqdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/j0QzDgFZRX2njRxxtP/giphy.gif',
		<div key='insta-1' className='text-pink-400 font-bold'>
			📷 INSTA
		</div>,
		'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3RxZzdja2puNHBjemJ2c29wNmZqeWh6ZTBibGZnZWxwZmJobmM4MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S3nv0DkUTqCWQk1u9P/giphy.gif',
		<div key='youtube-1' className='text-red-400 font-bold'>
			▶️ YOUTUBE
		</div>,
		'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXBpcjFzMmlweDhjZXM0eHQ4bXNrMTI0MmE2dTV5N2k5dG05OXY0byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o8gLk4EnYuHVCK7tZg/giphy.gif',
		<div key='edit-1' className='text-blue-400 font-bold'>
			✂️ EDIT
		</div>,
		'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzM4ZjlxZzE4a2lydG93Ynk4OXBvNTlzOGVzcmZ4MmxjcWQ2bGdqdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/j0QzDgFZRX2njRxxtP/giphy.gif',
		<div key='analytics-1' className='text-green-400 font-bold'>
			📈 ANALYTICS
		</div>,
		'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3RxZzdja2puNHBjemJ2c29wNmZqeWh6ZTBibGZnZWxwZmJobmM4MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S3nv0DkUTqCWQk1u9P/giphy.gif',
		<div key='speed-1' className='text-cyan-400 font-bold'>
			⚡ FAST
		</div>,
		'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXBpcjFzMmlweDhjZXM0eHQ4bXNrMTI0MmE2dTV5N2k5dG05OXY0byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o8gLk4EnYuHVCK7tZg/giphy.gif',
		<div key='creator-1' className='text-orange-400 font-bold'>
			👥 CREATORS
		</div>,
		'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzM4ZjlxZzE4a2lydG93Ynk4OXBvNTlzOGVzcmZ4MmxjcWQ2bGdqdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/j0QzDgFZRX2njRxxtP/giphy.gif',
		<div key='clipper-1' className='text-purple-500 font-bold text-lg'>
			CLIPPER
		</div>,
	];

	const combinedItems =
		items.length > 0
			? items.slice(0, totalItems)
			: clipperItems.slice(0, totalItems);

	useEffect(() => {
		gsap.ticker.lagSmoothing(0);

		const handleMouseMove = (e: MouseEvent): void => {
			mouseXRef.current = e.clientX;
		};

		const updateMotion = (): void => {
			const maxMoveAmount = 30; // Much more subtle movement
			const baseDuration = 2.5; // Slower, more fluid
			const inertiaFactors = [0.9, 0.7, 0.5, 0.4];

			rowRefs.current.forEach((row, index) => {
				if (row) {
					const direction = index % 2 === 0 ? 1 : -1;
					const moveAmount =
						((mouseXRef.current / window.innerWidth) * maxMoveAmount -
							maxMoveAmount / 2) *
						direction *
						0.3; // Additional subtlety factor

					gsap.to(row, {
						x: moveAmount,
						duration:
							baseDuration + inertiaFactors[index % inertiaFactors.length],
						ease: 'power2.out',
						overwrite: 'auto',
					});
				}
			});
		};

		const removeAnimationLoop = gsap.ticker.add(updateMotion);
		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			removeAnimationLoop();
		};
	}, []);

	return (
		<div ref={gridRef} className={`h-full w-full overflow-hidden ${className}`}>
			<section
				className='w-full h-full overflow-hidden relative flex items-center justify-center'
				style={{
					background: `radial-gradient(ellipse at center, ${gradientColor} 0%, transparent 70%)`,
				}}
			>
				{/* Darker overlay for subtle background effect */}
				<div className='absolute inset-0 bg-black/70 z-[3]' />

				{/* Grid container */}
				<div className='gap-6 flex-none relative w-[120vw] h-[120vh] grid grid-rows-4 grid-cols-1 rotate-[-12deg] origin-center z-[2]'>
					{Array.from({ length: 4 }, (_, rowIndex) => (
						<div
							key={rowIndex}
							className='grid gap-6 grid-cols-7'
							style={{ willChange: 'transform, filter' }}
							ref={(el) => {
								if (el) rowRefs.current[rowIndex] = el;
							}}
						>
							{Array.from({ length: 7 }, (_, itemIndex) => {
								const content = combinedItems[rowIndex * 7 + itemIndex];
								return (
									<div key={itemIndex} className='relative group'>
										<div className='relative w-full h-24 md:h-32 overflow-hidden rounded-lg bg-gray-900/80 backdrop-blur-sm flex items-center justify-center text-white text-sm md:text-base border border-gray-700/50 transition-all duration-300 group-hover:scale-105 group-hover:border-purple-500/50'>
											{typeof content === 'string' &&
											content.startsWith('http') ? (
												<>
													<img
														src={content}
														alt='Video content'
														className='w-full h-full object-cover absolute top-0 left-0 opacity-80'
														loading='lazy'
													/>
													<div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
												</>
											) : (
												<div className='p-2 text-center z-[1] relative'>
													{content}
												</div>
											)}
										</div>
									</div>
								);
							})}
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default GridMotion;
