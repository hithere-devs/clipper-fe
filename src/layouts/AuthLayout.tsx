import { Outlet } from 'react-router';

export function AuthLayout() {
	return (
		<div className='min-h-screen bg-gray-50 flex items-center justify-center'>
			<div className='max-w-md w-full space-y-8'>
				{/* Auth Header */}
				<div className='text-center'>
					<h1 className='text-3xl font-bold text-gray-900'>Clipper</h1>
					<p className='mt-2 text-gray-600'>Welcome back</p>
				</div>

				{/* Auth Form Content */}
				<div className='bg-white py-8 px-6 shadow rounded-lg'>
					<Outlet />
				</div>

				{/* Footer */}
				<div className='text-center'>
					<p className='text-sm text-gray-500'>
						&copy; 2025 Clipper. All rights reserved.
					</p>
				</div>
			</div>
		</div>
	);
}
