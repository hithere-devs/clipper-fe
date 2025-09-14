import { Outlet } from 'react-router';

export function PublicLayout() {
	return (
		<div className='min-h-screen bg-gray-50'>
			{/* Public Header */}
			<header className='bg-white shadow-sm border-b'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex justify-between items-center h-16'>
						<div className='flex items-center'>
							<h1 className='text-xl font-semibold text-gray-900'>Clipper</h1>
						</div>
						<nav className='flex items-center space-x-4'>
							<a
								href='/auth/login'
								className='text-gray-600 hover:text-gray-900'
							>
								Login
							</a>
							<a
								href='/auth/register'
								className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700'
							>
								Sign Up
							</a>
						</nav>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<main>
				<Outlet />
			</main>

			{/* Public Footer */}
			<footer className='bg-gray-800 text-white mt-auto'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
					<div className='text-center'>
						<p>&copy; 2025 Clipper. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
