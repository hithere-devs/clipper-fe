import { useCurrentRoute, useBreadcrumbs } from '@/routes/route-utils';

export function AppHeader() {
	const currentRoute = useCurrentRoute();
	const breadcrumbs = useBreadcrumbs();

	return (
		<header className='bg-white shadow-sm border-b'>
			<div className='px-6 py-4'>
				<div className='flex items-center justify-between'>
					{/* Page Title and Breadcrumbs */}
					<div>
						<h1 className='text-2xl font-semibold text-gray-900'>
							{currentRoute.title}
						</h1>
						<nav className='flex mt-1' aria-label='Breadcrumb'>
							<ol className='inline-flex items-center space-x-1 md:space-x-3'>
								{breadcrumbs.map((crumb, index) => (
									<li key={crumb.path} className='inline-flex items-center'>
										{index > 0 && <span className='mx-2 text-gray-400'>/</span>}
										<span
											className={`text-sm ${
												index === breadcrumbs.length - 1
													? 'text-gray-500'
													: 'text-blue-600 hover:text-blue-800'
											}`}
										>
											{crumb.name}
										</span>
									</li>
								))}
							</ol>
						</nav>
					</div>

					{/* User Menu */}
					<div className='flex items-center space-x-4'>
						<button className='text-gray-500 hover:text-gray-700'>🔔</button>
						<div className='flex items-center space-x-2'>
							<div className='w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center'>
								👤
							</div>
							<span className='text-sm font-medium text-gray-700'>User</span>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
