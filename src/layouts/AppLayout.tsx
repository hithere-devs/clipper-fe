import { Outlet } from 'react-router';
import { Sidebar } from '@/components/Sidebar';
import { AppHeader } from '@/components/AppHeader';

export function AppLayout() {
	return (
		<div className='min-h-screen bg-gray-50 flex'>
			{/* Sidebar */}
			<Sidebar />

			{/* Main Content Area */}
			<div className='flex-1 flex flex-col'>
				{/* App Header */}
				<AppHeader />

				{/* Main Content */}
				<main className='flex-1 p-6'>
					<Outlet />
				</main>
			</div>
		</div>
	);
}
