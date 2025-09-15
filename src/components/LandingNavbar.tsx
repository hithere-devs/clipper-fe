import { useState, useEffect } from 'react';
import { useAppNavigation } from '@/routes/route-utils';
import { ROUTE_NAMES } from '@/routes/routes.config';
import {
	SplitText,
	Magnet,
	ElectricBorder,
	ClickSpark,
	GlareHover,
	GlassSurface,
} from '@/components/animations';
import { smoothScrollTo } from '@/utils/smoothScroll';

export default function LandingNavbar() {
	const { navigateToRoute } = useAppNavigation();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navItems = [
		{ name: 'Features', href: 'features' },
		{ name: 'How It Works', href: 'how-it-works' },
		{ name: 'Pricing', href: 'pricing' },
		{ name: 'About', href: 'about' },
	];

	const handleNavClick = (href: string) => {
		smoothScrollTo(href, 100);
		setIsMobileMenuOpen(false);
	};

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? 'bg-black/90 backdrop-blur-md border-b border-white/10'
					: 'bg-transparent'
			}`}
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-16'>
					{/* Logo */}
					<div className='flex-shrink-0'>
						<Magnet>
							<button
								onClick={() => navigateToRoute(ROUTE_NAMES.HOME)}
								className='flex items-center space-x-2 group'
							>
								<div className='w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center'>
									<span className='text-white font-bold text-lg'>C</span>
								</div>
								<SplitText
									text="Clipper"
									className='text-xl font-bold text-white group-hover:text-purple-400 transition-colors'
									delay={0}
									duration={0.5}
								/>
							</button>
						</Magnet>
					</div>

					{/* Desktop Navigation */}
					<div className='hidden md:block'>
						<div className='ml-10 flex items-baseline space-x-8'>
							{navItems.map((item, index) => (
								<Magnet key={item.name}>
									<GlareHover>
										<button
											onClick={() => handleNavClick(item.href)}
											className='text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200'
										>
											<SplitText
												text={item.name}
												className='block'
												delay={index * 0.1}
												duration={0.3}
											/>
										</button>
									</GlareHover>
								</Magnet>
							))}
						</div>
					</div>

					{/* CTA Buttons */}
					<div className='hidden md:flex items-center space-x-4'>
						<GlareHover>
							<button
								onClick={() => navigateToRoute(ROUTE_NAMES.LOGIN)}
								className='text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors duration-200'
							>
								Sign In
							</button>
						</GlareHover>

						<Magnet>
							<ElectricBorder>
								<ClickSpark>
									<button
										onClick={() => navigateToRoute(ROUTE_NAMES.REGISTER)}
										className='bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105'
									>
										Get Started
									</button>
								</ClickSpark>
							</ElectricBorder>
						</Magnet>
					</div>

					{/* Mobile menu button */}
					<div className='md:hidden'>
						<Magnet>
							<button
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
								className='text-gray-300 hover:text-white p-2'
							>
								<svg
									className='h-6 w-6'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									{isMobileMenuOpen ? (
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M6 18L18 6M6 6l12 12'
										/>
									) : (
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M4 6h16M4 12h16M4 18h16'
										/>
									)}
								</svg>
							</button>
						</Magnet>
					</div>
				</div>

				{/* Mobile Navigation Menu */}
				{isMobileMenuOpen && (
					<div className='md:hidden'>
						<GlassSurface className='mt-2 rounded-lg p-4 space-y-2'>
						{navItems.map((item, index) => (
							<Magnet key={item.name}>
								<button
									onClick={() => handleNavClick(item.href)}
									className='block w-full text-left text-gray-300 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-200'
								>
									<SplitText
										text={item.name}
										className='block'
										delay={index * 0.1}
										duration={0.3}
									/>
								</button>
							</Magnet>
						))}
							<div className='pt-4 border-t border-white/10 space-y-2'>
								<GlareHover>
									<button
										onClick={() => {
											navigateToRoute(ROUTE_NAMES.LOGIN);
											setIsMobileMenuOpen(false);
										}}
										className='block w-full text-left text-gray-300 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-200'
									>
										Sign In
									</button>
								</GlareHover>

								<Magnet>
									<ElectricBorder>
										<ClickSpark>
											<button
												onClick={() => {
													navigateToRoute(ROUTE_NAMES.REGISTER);
													setIsMobileMenuOpen(false);
												}}
												className='block w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-3 py-2 rounded-lg text-base font-medium transition-all duration-300'
											>
												Get Started
											</button>
										</ClickSpark>
									</ElectricBorder>
								</Magnet>
							</div>
						</GlassSurface>
					</div>
				)}
			</div>
		</nav>
	);
}
