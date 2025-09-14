import { useAppNavigation } from '@/routes/route-utils';
import { ROUTE_NAMES } from '@/routes/routes.config';

export default function NotFoundPage() {
	const { navigateToRoute } = useAppNavigation();

	return (
		<div className='min-h-screen bg-gray-50 flex items-center justify-center'>
			<div className='max-w-md w-full text-center'>
				<div className='bg-white p-8 rounded-lg shadow-md'>
					<div className='text-6xl mb-4'>🔍</div>
					<h1 className='text-4xl font-bold text-gray-900 mb-4'>404</h1>
					<h2 className='text-xl font-semibold text-gray-700 mb-4'>
						Page Not Found
					</h2>
					<p className='text-gray-600 mb-8'>
						Sorry, the page you are looking for doesn't exist or has been moved.
					</p>
					<div className='space-y-4'>
						<button
							onClick={() => navigateToRoute(ROUTE_NAMES.LANDING)}
							className='w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors'
						>
							Go Home
						</button>
						<button
							onClick={() => window.history.back()}
							className='w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors'
						>
							Go Back
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
