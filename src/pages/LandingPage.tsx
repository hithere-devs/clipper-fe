import { useAppNavigation } from '@/routes/route-utils';
import { ROUTE_NAMES } from '@/routes/routes.config';
import { GridMotion } from '@/components/backgrounds';
import LandingNavbar from '@/components/LandingNavbar';

export default function LandingPage() {
	const { navigateToRoute } = useAppNavigation();

	return (
		<div className='min-h-screen bg-black text-white overflow-hidden'>
			{/* Landing Navbar */}
			<LandingNavbar />

			{/* Hero Section with Subtle GridMotion Background */}
			<div className='relative min-h-screen flex items-center justify-center'>
				{/* GridMotion animated background - more subtle */}
				<GridMotion
					className='absolute inset-0'
					gradientColor='rgba(0, 0, 0, 0.95)'
				/>

				{/* Subtle dark overlay */}
				<div className='absolute inset-0 bg-black/20 z-[5]' />

				<section className='w-full py-20 relative z-[10]'>
					<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
						{/* Clean headline without excessive effects */}
						<div className='mb-12'>
							<h1 className='text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight'>
								Create Less,{' '}
								<span className='bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent'>
									Trend More
								</span>
							</h1>
						</div>

						{/* Clean subtitle */}
						<p className='text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed'>
							Let our AI be your content machine. It repurposes your long videos
							into an endless supply of high-impact, shareable clips.
						</p>

						{/* Modern, subtle CTA buttons */}
						<div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
							<button
								onClick={() => navigateToRoute(ROUTE_NAMES.REGISTER)}
								className='bg-white text-black px-10 py-4 rounded-full font-medium text-lg hover:bg-gray-50 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out'
							>
								Start Creating Now
							</button>
							<button
								onClick={() => navigateToRoute(ROUTE_NAMES.LOGIN)}
								className='border border-white/30 text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-white/5 hover:border-white/50 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out backdrop-blur-sm'
							>
								Watch Demo
							</button>
						</div>
					</div>
				</section>
			</div>

			{/* Stats Section - Subtle and Clean */}
			<section className='relative py-20 overflow-hidden bg-black'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
							Trusted by Creators Worldwide
						</h2>
					</div>

					<div className='grid md:grid-cols-4 gap-8 text-center'>
						{stats.map((stat, index) => (
							<div
								key={index}
								className='p-8 rounded-xl border border-gray-800/30 bg-gray-900/20 backdrop-blur-sm hover:border-gray-700/50 transition-all duration-300'
							>
								<div className='text-4xl md:text-5xl font-bold mb-2 text-white'>
									{stat.value}
									{stat.suffix}
								</div>
								<p className='text-gray-400 text-lg'>{stat.label}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Features Section - Clean and Modern */}
			<section
				id='features'
				className='relative py-20 overflow-hidden bg-gray-950'
			>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
							AI-Powered Features
						</h2>
						<p className='text-xl text-gray-400 max-w-2xl mx-auto'>
							Everything you need to create viral content from your existing
							videos
						</p>
					</div>

					<div className='grid md:grid-cols-3 gap-8'>
						{features.map((feature, index) => (
							<div
								key={index}
								className='p-8 rounded-xl border border-gray-800/30 bg-black/40 backdrop-blur-sm hover:border-gray-700/50 hover:bg-black/60 transition-all duration-300 h-full'
							>
								<div className='text-5xl mb-6'>{feature.icon}</div>
								<h3 className='text-2xl font-bold mb-4 text-white'>
									{feature.title}
								</h3>
								<p className='text-gray-400 leading-relaxed mb-4'>
									{feature.description}
								</p>
								<p className='text-sm text-gray-300 font-medium'>
									{feature.benefit}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Process Section - Clean Steps */}
			<section
				id='how-it-works'
				className='relative py-20 overflow-hidden bg-black'
			>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
							How It Works
						</h2>
						<p className='text-xl text-gray-400 max-w-2xl mx-auto'>
							Transform your content in three simple steps
						</p>
					</div>

					<div className='grid md:grid-cols-3 gap-8'>
						{process.map((step, index) => (
							<div key={index} className='text-center'>
								<div className='w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto text-white hover:from-gray-600 hover:to-gray-500 transition-all duration-300'>
									{step.step}
								</div>
								<h3 className='text-2xl font-bold mb-4 text-white'>
									{step.title}
								</h3>
								<p className='text-gray-400 leading-relaxed'>
									{step.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Pricing Section - Clean and Modern */}
			<section
				id='pricing'
				className='relative py-20 overflow-hidden bg-gray-950'
			>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
							Simple Pricing
						</h2>
						<p className='text-xl text-gray-400 max-w-2xl mx-auto'>
							Choose the plan that's right for you
						</p>
					</div>

					<div className='grid md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
						{[
							{
								name: 'Starter',
								price: '$9',
								period: '/month',
								features: [
									'10 videos/month',
									'Basic AI analysis',
									'Standard quality',
									'Email support',
								],
								highlight: false,
							},
							{
								name: 'Pro',
								price: '$29',
								period: '/month',
								features: [
									'50 videos/month',
									'Advanced AI analysis',
									'HD quality',
									'Priority support',
									'Custom branding',
								],
								highlight: true,
							},
							{
								name: 'Enterprise',
								price: '$99',
								period: '/month',
								features: [
									'Unlimited videos',
									'Premium AI analysis',
									'4K quality',
									'24/7 support',
									'White-label solution',
								],
								highlight: false,
							},
						].map((plan) => (
							<div
								key={plan.name}
								className={`p-8 rounded-xl border h-full transition-all duration-300 hover:scale-105 ${
									plan.highlight
										? 'border-gray-600/50 bg-gray-900/40 ring-1 ring-gray-500/20'
										: 'border-gray-800/30 bg-black/40 hover:border-gray-700/50'
								}`}
							>
								{plan.highlight && (
									<div className='text-center mb-4'>
										<span className='bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-medium'>
											Most Popular
										</span>
									</div>
								)}
								<h3 className='text-2xl font-bold mb-4 text-white'>
									{plan.name}
								</h3>
								<div className='mb-6'>
									<span className='text-4xl font-bold text-white'>
										{plan.price}
									</span>
									<span className='text-gray-400'>{plan.period}</span>
								</div>
								<ul className='space-y-3 mb-8'>
									{plan.features.map((feature, featureIndex) => (
										<li
											key={featureIndex}
											className='flex items-center text-gray-300'
										>
											<span className='text-gray-400 mr-3'>✓</span>
											<span className='text-sm'>{feature}</span>
										</li>
									))}
								</ul>
								<button
									onClick={() => navigateToRoute(ROUTE_NAMES.REGISTER)}
									className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
										plan.highlight
											? 'bg-white text-black hover:bg-gray-100'
											: 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
									}`}
								>
									Get Started
								</button>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* About Section - Clean and Professional */}
			<section id='about' className='relative py-20 overflow-hidden bg-black'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
							About Clipper
						</h2>
						<p className='text-xl text-gray-400 max-w-2xl mx-auto'>
							We're revolutionizing how creators turn long-form content into
							viral clips
						</p>
					</div>

					<div className='grid md:grid-cols-2 gap-12 items-center'>
						<div>
							<h3 className='text-3xl font-bold mb-6 text-white'>
								Our Mission
							</h3>
							<p className='text-lg text-gray-300 mb-8 leading-relaxed'>
								We believe every creator deserves the tools to maximize their
								content's potential. Our AI-powered platform analyzes your
								videos to identify the most engaging moments and automatically
								creates viral-ready clips.
							</p>
							<h4 className='text-2xl font-bold mb-4 text-white'>
								Why Choose Clipper?
							</h4>
							<ul className='space-y-3'>
								{[
									'AI-powered content analysis',
									'Automated viral clip detection',
									'Multi-platform optimization',
									'Real-time trend analysis',
									'Professional-grade editing tools',
								].map((item, index) => (
									<li key={index} className='flex items-center text-gray-300'>
										<span className='text-gray-500 mr-3'>→</span>
										<span className='text-lg'>{item}</span>
									</li>
								))}
							</ul>
						</div>
						<div className='relative'>
							<div className='p-8 rounded-xl border border-gray-800/30 bg-gray-900/20 backdrop-blur-sm'>
								<div className='text-center'>
									<div className='w-32 h-32 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-6'>
										<span className='text-6xl'>🎬</span>
									</div>
									<h3 className='text-2xl font-bold mb-4 text-white'>
										Join 10,000+ Creators
									</h3>
									<p className='text-gray-400'>
										Already creating viral content with Clipper
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section - Clean and Focused */}
			<section className='relative py-20 overflow-hidden bg-gray-950'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
					<h2 className='text-4xl md:text-5xl font-bold mb-8 text-white'>
						Ready to Go Viral?
					</h2>
					<p className='text-xl mb-12 text-gray-400 max-w-2xl mx-auto'>
						Join thousands of creators who are already using Clipper to
						transform their content and reach millions of viewers.
					</p>

					<div className='flex justify-center'>
						<button
							onClick={() => navigateToRoute(ROUTE_NAMES.REGISTER)}
							className='bg-white text-black px-12 py-4 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gray-100'
						>
							Create Your First Clip
						</button>
					</div>
				</div>
			</section>
		</div>
	);
}

const stats = [
	{
		value: 50000,
		suffix: '+',
		label: 'Clips Generated',
	},
	{
		value: 85,
		suffix: '%',
		label: 'Viral Success Rate',
	},
	{
		value: 10,
		suffix: 'M+',
		label: 'Views Generated',
	},
	{
		value: 5000,
		suffix: '+',
		label: 'Happy Creators',
	},
];

const features = [
	{
		icon: '🤖',
		title: 'AI Clip Detection',
		description:
			'Our advanced AI analyzes your videos to automatically identify the most engaging moments and create perfect clips.',
		benefit: 'Save 90% of editing time',
	},
	{
		icon: '📊',
		title: 'Virality Scoring',
		description:
			'Each clip gets a virality score based on engagement patterns, trending topics, and proven viral elements.',
		benefit: 'Increase engagement by 300%',
	},
	{
		icon: '💬',
		title: 'Smart Captions',
		description:
			'Automatically generated captions with perfect timing, styling, and emphasis on key words that drive engagement.',
		benefit: 'Boost accessibility & reach',
	},
	{
		icon: '🎯',
		title: 'Trend Analysis',
		description:
			'Stay ahead of trends with real-time analysis of what content is performing across all major platforms.',
		benefit: 'Always stay relevant',
	},
	{
		icon: '✂️',
		title: 'Perfect Timing',
		description:
			'AI determines the optimal clip length and pacing for maximum retention and engagement on each platform.',
		benefit: 'Maximize watch time',
	},
	{
		icon: '🚀',
		title: 'Multi-Platform Export',
		description:
			'Export clips optimized for TikTok, Instagram Reels, YouTube Shorts, and Twitter with platform-specific formatting.',
		benefit: 'Reach every audience',
	},
];

const process = [
	{
		step: '1',
		title: 'Upload Your Video',
		description:
			'Simply drag and drop your long-form video content. We support all major formats and automatically process your upload.',
	},
	{
		step: '2',
		title: 'AI Analysis',
		description:
			'Our AI analyzes your content for engaging moments, trending topics, and viral potential while generating smart captions.',
	},
	{
		step: '3',
		title: 'Download & Share',
		description:
			'Review your clips with virality scores, make any final edits, and export optimized versions for all platforms.',
	},
];
