

import { useAppNavigation } from '@/routes/route-utils';
import { ROUTE_NAMES } from '@/routes/routes.config';
import {
	ShinyText,
	FloatingElement,
	SplitText,
	BlurText,
	TextType,
	TextTrail,
	ScrollReveal,
	DecryptedText,
	FuzzyText,
	CountUp,
	Magnet,
	ElectricBorder,
	ClickSpark,
	GlareHover,
	BounceCards,
	GlassSurface,
	TiltedCard,
	MagicBento,
} from '@/components/animations';
import { Aurora, Galaxy, Particles } from '@/components/backgrounds';
import VideoPreview from '@/components/VideoPreview';
import LandingNavbar from '@/components/LandingNavbar';

export default function LandingPage() {
	const { navigateToRoute } = useAppNavigation();

	return (
		<div className='min-h-screen bg-black text-white overflow-hidden'>
			{/* Landing Navbar */}
			<LandingNavbar />

			{/* Hero Section with Advanced Background */}
			<div className='relative min-h-screen flex items-center justify-center'>
				{/* Multiple layered backgrounds for depth */}
				<Aurora className='absolute inset-0' />
				<Particles className='absolute inset-0' />

				{/* Floating geometric elements */}
				<div className='absolute inset-0 pointer-events-none'>
					<FloatingElement
						delay={0}
						amplitude={30}
						duration={4}
						className='absolute top-20 left-10'
					>
						<div className='w-8 h-8 bg-purple-500/30 rounded-full blur-sm' />
					</FloatingElement>
					<FloatingElement
						delay={1}
						amplitude={25}
						duration={5}
						className='absolute top-40 right-20'
					>
						<div className='w-6 h-6 bg-pink-500/30 rounded-full blur-sm' />
					</FloatingElement>
					<FloatingElement
						delay={2}
						amplitude={35}
						duration={3.5}
						className='absolute bottom-40 left-20'
					>
						<div className='w-10 h-10 bg-blue-500/30 rounded-full blur-sm' />
					</FloatingElement>
					<FloatingElement
						delay={0.5}
						amplitude={20}
						duration={6}
						className='absolute bottom-20 right-10'
					>
						<div className='w-4 h-4 bg-orange-500/30 rounded-full blur-sm' />
					</FloatingElement>
				</div>

				<section className='w-full py-20 relative z-10'>
					<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
						{/* Main headline with advanced text animations */}
						<div className='mb-8'>
							<SplitText
								text="Turn Long Videos Into"
								className='text-5xl md:text-7xl font-bold mb-4 block'
								delay={0.1}
								duration={0.8}
							/>
							<SplitText
								text="Viral Clips"
								className='text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent'
								delay={0.5}
								duration={1.2}
							/>
						</div>

						{/* Subtitle with typewriter effect */}
						<div className='text-xl md:text-2xl mb-4 max-w-4xl mx-auto text-gray-300'>
							<TextType
								text="AI-powered video clipping with automatic captions, virality scoring, smart editing, trend analysis, and perfect timing"
								className='text-white font-semibold'
								speed={50}
								delay={1.5}
							/>
						</div>

						{/* Description with scroll reveal */}
						<ScrollReveal delay={2}>
							<p className='text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-400'>
								Upload your long-form content and watch our AI transform it into
								engaging short clips optimized for maximum reach and engagement.
							</p>
						</ScrollReveal>

						{/* CTA Buttons with advanced effects */}
						<div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
							<Magnet>
								<ElectricBorder>
									<ClickSpark>
										<button
											onClick={() => navigateToRoute(ROUTE_NAMES.REGISTER)}
											className='group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'
										>
											<ShinyText className='text-white'>
												Start Creating Clips
											</ShinyText>
										</button>
									</ClickSpark>
								</ElectricBorder>
							</Magnet>

							<GlareHover>
								<button
									onClick={() => navigateToRoute(ROUTE_NAMES.LOGIN)}
									className='border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300'
								>
									Sign In
								</button>
							</GlareHover>
						</div>
					</div>
				</section>
			</div>

			{/* Demo Section with Advanced Background */}
			<section className='relative py-20 overflow-hidden'>
				<Galaxy className='absolute inset-0' />

				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
					<ScrollReveal>
						<div className='text-center mb-16'>
							<BlurText
								text="See It In Action"
								className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent'
								delay={0.2}
								duration={1}
							/>
							<TextTrail
								text="Watch how our AI transforms long-form content into viral clips"
								className='text-xl text-gray-400 max-w-2xl mx-auto'
								delay={0.5}
							/>
						</div>
					</ScrollReveal>

					<ScrollReveal delay={0.8}>
						<div className='max-w-4xl mx-auto'>
							<GlassSurface className='p-4 rounded-2xl'>
								<VideoPreview />
							</GlassSurface>
						</div>
					</ScrollReveal>
				</div>
			</section>

			{/* Stats Section with Advanced Effects */}
			<section className='relative py-20 overflow-hidden bg-gradient-to-b from-black to-gray-900'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
					<ScrollReveal>
						<div className='text-center mb-16'>
							<DecryptedText
								text="Trusted by Creators Worldwide"
								className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent'
								delay={0.3}
								duration={1.5}
							/>
						</div>
					</ScrollReveal>

					<div className='grid md:grid-cols-4 gap-8 text-center'>
						{stats.map((stat, index) => (
							<ScrollReveal key={index} delay={index * 0.2}>
								<BounceCards>
									<GlassSurface className='p-8 rounded-2xl border border-gray-800/50'>
										<div className='text-4xl md:text-5xl font-bold mb-2'>
											<CountUp
												target={stat.value}
												suffix={stat.suffix}
												className='text-purple-400'
												duration={2}
												delay={index * 0.3}
											/>
										</div>
										<FuzzyText
											text={stat.label}
											className='text-gray-400 text-lg'
											delay={index * 0.3 + 0.5}
										/>
									</GlassSurface>
								</BounceCards>
							</ScrollReveal>
						))}
					</div>
				</div>
			</section>

			{/* Features Section with Magic Bento Grid */}
			<section id="features" className='relative py-20 overflow-hidden bg-gray-900'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
					<ScrollReveal>
						<div className='text-center mb-16'>
							<BlurText
								text="AI-Powered Features"
								className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent'
								delay={0.2}
								duration={1.2}
							/>
							<TextTrail
								text="Everything you need to create viral content from your existing videos"
								className='text-xl text-gray-400 max-w-2xl mx-auto'
								delay={0.5}
							/>
						</div>
					</ScrollReveal>

					<MagicBento className='grid md:grid-cols-3 gap-8'>
						{features.map((feature, index) => (
							<ScrollReveal key={index} delay={index * 0.15}>
								<TiltedCard>
									<GlassSurface className='p-8 rounded-2xl border border-gray-800/50 h-full'>
										<div className='text-5xl mb-6'>
											{feature.icon}
										</div>
										<SplitText
											text={feature.title}
											className='text-2xl font-bold mb-4 text-white'
											delay={index * 0.2 + 0.3}
										/>
										<TextTrail
											text={feature.description}
											className='text-gray-400 leading-relaxed mb-4'
											delay={index * 0.2 + 0.5}
										/>
										<FuzzyText
											text={feature.benefit}
											className='text-sm text-purple-400 font-semibold'
											delay={index * 0.2 + 0.7}
										/>
									</GlassSurface>
								</TiltedCard>
							</ScrollReveal>
						))}
					</MagicBento>
				</div>
			</section>

			{/* Process Section with Stepper */}
			<section id="how-it-works" className='relative py-20 overflow-hidden bg-black'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
					<ScrollReveal>
						<div className='text-center mb-16'>
							<BlurText
								text="How It Works"
								className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent'
								delay={0.2}
								duration={1.5}
							/>
							<TextTrail
								text="Transform your content in three simple steps"
								className='text-xl text-gray-400 max-w-2xl mx-auto'
								delay={0.5}
							/>
						</div>
					</ScrollReveal>

					<div className='grid md:grid-cols-3 gap-8'>
						{process.map((step, index) => (
							<ScrollReveal key={index} delay={index * 0.3}>
								<div className='text-center'>
									<Magnet>
										<div className='w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto relative'>
											<SplitText
												text={step.step}
												className='text-white'
												delay={index * 0.2 + 0.5}
											/>
										</div>
									</Magnet>
									<SplitText
										text={step.title}
										className='text-2xl font-bold mb-4 text-white'
										delay={index * 0.2 + 0.7}
									/>
									<TextTrail
										text={step.description}
										className='text-gray-400 leading-relaxed'
										delay={index * 0.2 + 0.9}
									/>
								</div>
							</ScrollReveal>
						))}
					</div>
				</div>
			</section>

			{/* Pricing Section */}
			<section id="pricing" className='relative py-20 overflow-hidden bg-gray-900'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
					<ScrollReveal>
						<div className='text-center mb-16'>
							<BlurText
								text="Simple Pricing"
								className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent'
								delay={0.2}
								duration={1.2}
							/>
							<TextTrail
								text="Choose the plan that's right for you"
								className='text-xl text-gray-400 max-w-2xl mx-auto'
								delay={0.5}
							/>
						</div>
					</ScrollReveal>

					<div className='grid md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
						{[
							{
								name: 'Starter',
								price: '$9',
								period: '/month',
								features: ['10 videos/month', 'Basic AI analysis', 'Standard quality', 'Email support'],
								highlight: false,
							},
							{
								name: 'Pro',
								price: '$29',
								period: '/month',
								features: ['50 videos/month', 'Advanced AI analysis', 'HD quality', 'Priority support', 'Custom branding'],
								highlight: true,
							},
							{
								name: 'Enterprise',
								price: '$99',
								period: '/month',
								features: ['Unlimited videos', 'Premium AI analysis', '4K quality', '24/7 support', 'White-label solution'],
								highlight: false,
							},
						].map((plan, index) => (
							<ScrollReveal key={plan.name} delay={index * 0.2}>
								<BounceCards>
									<GlassSurface className={`p-8 rounded-2xl border h-full ${
										plan.highlight
											? 'border-purple-500/50 bg-gradient-to-b from-purple-900/20 to-pink-900/20'
											: 'border-gray-800/50'
									}`}>
										{plan.highlight && (
											<div className='text-center mb-4'>
												<span className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>
													Most Popular
												</span>
											</div>
										)}
										<SplitText
											text={plan.name}
											className='text-2xl font-bold mb-4 text-white'
											delay={index * 0.2 + 0.3}
										/>
										<div className='mb-6'>
											<span className='text-4xl font-bold text-white'>{plan.price}</span>
											<span className='text-gray-400'>{plan.period}</span>
										</div>
										<ul className='space-y-3 mb-8'>
											{plan.features.map((feature, featureIndex) => (
												<li key={featureIndex} className='flex items-center text-gray-300'>
													<span className='text-green-400 mr-3'>✓</span>
													<FuzzyText
														text={feature}
														className='text-sm'
														delay={index * 0.2 + featureIndex * 0.1 + 0.5}
													/>
												</li>
											))}
										</ul>
										<Magnet>
											<ElectricBorder>
												<ClickSpark>
													<button
														onClick={() => navigateToRoute(ROUTE_NAMES.REGISTER)}
														className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
															plan.highlight
																? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
																: 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-600'
														}`}
													>
														Get Started
													</button>
												</ClickSpark>
											</ElectricBorder>
										</Magnet>
									</GlassSurface>
								</BounceCards>
							</ScrollReveal>
						))}
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id="about" className='relative py-20 overflow-hidden bg-black'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
					<ScrollReveal>
						<div className='text-center mb-16'>
							<BlurText
								text="About Clipper"
								className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent'
								delay={0.2}
								duration={1.2}
							/>
							<TextTrail
								text="We're revolutionizing how creators turn long-form content into viral clips"
								className='text-xl text-gray-400 max-w-2xl mx-auto'
								delay={0.5}
							/>
						</div>
					</ScrollReveal>

					<div className='grid md:grid-cols-2 gap-12 items-center'>
						<div>
							<SplitText
								text="Our Mission"
								className='text-3xl font-bold mb-6 text-white'
								delay={0.3}
							/>
							<TextTrail
								text="We believe every creator deserves the tools to maximize their content's potential. Our AI-powered platform analyzes your videos to identify the most engaging moments and automatically creates viral-ready clips."
								className='text-lg text-gray-300 mb-8 leading-relaxed'
								delay={0.5}
							/>
							<SplitText
								text="Why Choose Clipper?"
								className='text-2xl font-bold mb-4 text-white'
								delay={0.7}
							/>
							<ul className='space-y-3'>
								{[
									'AI-powered content analysis',
									'Automated viral clip detection',
									'Multi-platform optimization',
									'Real-time trend analysis',
									'Professional-grade editing tools'
								].map((item, index) => (
									<li key={index} className='flex items-center text-gray-300'>
										<span className='text-purple-400 mr-3'>→</span>
										<FuzzyText
											text={item}
											className='text-lg'
											delay={0.9 + index * 0.1}
										/>
									</li>
								))}
							</ul>
						</div>
						<div className='relative'>
							<GlassSurface className='p-8 rounded-2xl'>
								<div className='text-center'>
									<div className='w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6'>
										<span className='text-6xl'>🎬</span>
									</div>
									<SplitText
										text="Join 10,000+ Creators"
										className='text-2xl font-bold mb-4 text-white'
										delay={1.1}
									/>
									<TextTrail
										text="Already creating viral content with Clipper"
										className='text-gray-400'
										delay={1.3}
									/>
								</div>
							</GlassSurface>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section with Advanced Effects */}
			<section className='relative py-20 overflow-hidden bg-gradient-to-r from-purple-900 to-pink-900'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
					<ScrollReveal>
						<h2 className='text-4xl md:text-5xl font-bold mb-8'>
							<TextType
								text="Ready to Go Viral?"
								className='text-white text-4xl md:text-5xl'
								delay={0.3}
								speed={100}
							/>
						</h2>
						<TextTrail
							text="Join thousands of creators who are already using Clipper to transform their content and reach millions of viewers."
							className='text-xl mb-12 text-purple-200 max-w-2xl mx-auto'
							delay={0.6}
						/>

						<div className='flex justify-center'>
							<Magnet>
								<ClickSpark>
									<button
										onClick={() => navigateToRoute(ROUTE_NAMES.REGISTER)}
										className='group relative bg-white text-purple-900 px-12 py-4 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'
									>
										<ShinyText className='relative z-10'>
											Create Your First Clip
										</ShinyText>
										<div className='absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
									</button>
								</ClickSpark>
							</Magnet>
						</div>
					</ScrollReveal>
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
