import { cn } from '@/utils/common';
import { useState } from 'react';

interface VideoPreviewProps {
	className?: string;
}

export default function VideoPreview({ className }: VideoPreviewProps) {
	const [isPlaying, setIsPlaying] = useState(false);

	return (
		<div
			className={cn(
				'relative bg-gray-900 rounded-2xl overflow-hidden',
				className
			)}
		>
			{/* Video placeholder */}
			<div className='aspect-video bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center relative'>
				{!isPlaying ? (
					<button
						onClick={() => setIsPlaying(true)}
						className='group w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300'
					>
						<div className='w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1' />
					</button>
				) : (
					<div className='w-full h-full flex items-center justify-center'>
						<div className='text-white text-center'>
							<div className='text-6xl mb-4'>🎬</div>
							<div className='text-lg'>Demo Video Playing...</div>
							<button
								onClick={() => setIsPlaying(false)}
								className='mt-4 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors'
							>
								Reset
							</button>
						</div>
					</div>
				)}

				{/* Video overlay UI */}
				<div className='absolute bottom-4 left-4 right-4'>
					<div className='bg-black/50 backdrop-blur-sm rounded-lg p-3'>
						<div className='flex items-center justify-between mb-2'>
							<span className='text-white text-sm font-medium'>
								Long Video → Viral Clips
							</span>
							<span className='text-green-400 text-xs font-bold'>
								98% Viral Score
							</span>
						</div>
						<div className='w-full bg-gray-700 rounded-full h-1'>
							<div className='bg-purple-500 h-1 rounded-full w-3/4' />
						</div>
					</div>
				</div>
			</div>

			{/* Preview clips */}
			<div className='p-4'>
				<div className='text-white text-sm font-medium mb-3'>
					Generated Clips
				</div>
				<div className='grid grid-cols-3 gap-2'>
					{[1, 2, 3].map((clip) => (
						<div
							key={clip}
							className='aspect-[9/16] bg-gray-800 rounded-lg relative overflow-hidden'
						>
							<div className='absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 opacity-70' />
							<div className='absolute bottom-2 left-2 right-2'>
								<div className='text-white text-xs font-bold'>Clip {clip}</div>
								<div className='text-white/70 text-xs'>0:{clip}5s</div>
								<div className='flex items-center mt-1'>
									<div className='w-1 h-1 bg-green-400 rounded-full mr-1' />
									<span className='text-green-400 text-xs'>
										{90 + clip}% viral
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
