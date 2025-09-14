import { useAppNavigation } from '@/routes/route-utils';
import { ROUTE_NAMES } from '@/routes/routes.config';
import { Button } from '@/components/Button';

export default function LandingPage() {
	const { navigateToRoute } = useAppNavigation();

	return (
		<div className='min-h-screen'>
			{/* Hero Section */}
			<section className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h1 className='text-4xl md:text-6xl font-bold mb-6'>
						Welcome to Clipper
					</h1>
					<p className='text-xl md:text-2xl mb-8 max-w-3xl mx-auto'>
						The ultimate platform for managing your content efficiently and
						beautifully.
					</p>
					<div className='space-x-4'>
						<button
							onClick={() => navigateToRoute(ROUTE_NAMES.APP)}
							className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
						>
							Get Started
						</button>
						<button
							onClick={() => navigateToRoute(ROUTE_NAMES.LOGIN)}
							className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors'
						>
							Sign In
						</button>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className='py-20 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
							Powerful Features
						</h2>
						<p className='text-xl text-gray-600 max-w-2xl mx-auto'>
							Everything you need to manage your content in one place
						</p>
					</div>

					<div className='grid md:grid-cols-3 gap-8'>
						{features.map((feature, index) => (
							<div key={index} className='text-center p-6'>
								<div className='text-4xl mb-4'>{feature.icon}</div>
								<h3 className='text-xl font-semibold text-gray-900 mb-2'>
									{feature.title}
								</h3>
								<p className='text-gray-600'>{feature.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-20 bg-gray-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8'>
						Ready to get started?
					</h2>
					<button
						onClick={() => navigateToRoute(ROUTE_NAMES.REGISTER)}
						className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
					>
						Create Your Account
					</button>
				</div>
			</section>
		</div>
	);
}

const features = [
	{
		icon: '🚀',
		title: 'Fast & Efficient',
		description: 'Lightning-fast performance with modern technology stack.',
	},
	{
		icon: '🔒',
		title: 'Secure',
		description: 'Enterprise-grade security to keep your data safe.',
	},
	{
		icon: '📊',
		title: 'Analytics',
		description: 'Comprehensive analytics to track your progress.',
	},
];
