import { useAppNavigation, useRouteMatch } from '@/routes/route-utils';
import { ROUTE_NAMES } from '@/routes/routes.config';

interface SidebarItem {
	name: string;
	route: string;
	icon: string;
}

const sidebarItems: SidebarItem[] = [
	{ name: 'Dashboard', route: ROUTE_NAMES.DASHBOARD, icon: '📊' },
	{ name: 'Analytics', route: ROUTE_NAMES.DASHBOARD_ANALYTICS, icon: '📈' },
	{ name: 'Settings', route: ROUTE_NAMES.DASHBOARD_SETTINGS, icon: '⚙️' },
	{ name: 'Profile', route: ROUTE_NAMES.DASHBOARD_PROFILE, icon: '👤' },
];

export function Sidebar() {
	const { navigateToRoute } = useAppNavigation();

	return (
		<div className='bg-gray-800 text-white w-64 min-h-screen'>
			<div className='p-4'>
				<h2 className='text-xl font-bold'>Clipper Dashboard</h2>
			</div>

			<nav className='mt-8'>
				{sidebarItems.map((item) => (
					<SidebarItem
						key={item.name}
						item={item}
						onClick={() => navigateToRoute(item.route as any)}
					/>
				))}
			</nav>
		</div>
	);
}

interface SidebarItemProps {
	item: SidebarItem;
	onClick: () => void;
}

function SidebarItem({ item, onClick }: SidebarItemProps) {
	const isActive = useRouteMatch(item.route as any);

	return (
		<button
			onClick={onClick}
			className={`w-full text-left px-4 py-3 flex items-center space-x-3 hover:bg-gray-700 transition-colors ${
				isActive ? 'bg-gray-700 border-r-2 border-blue-500' : ''
			}`}
		>
			<span className='text-lg'>{item.icon}</span>
			<span>{item.name}</span>
		</button>
	);
}
