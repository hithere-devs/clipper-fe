import { Link, useLocation } from 'react-router';
import { ROUTE_PATHS, type RoutePath } from '@/routes/routes.config';

interface NavLinkProps {
	to: RoutePath;
	children: React.ReactNode;
	className?: string;
	activeClassName?: string;
}

export function NavLink({
	to,
	children,
	className = '',
	activeClassName = 'active',
}: NavLinkProps) {
	const location = useLocation();
	const isActive =
		location.pathname === to || location.pathname.startsWith(to + '/');

	return (
		<Link to={to} className={`${className} ${isActive ? activeClassName : ''}`}>
			{children}
		</Link>
	);
}

interface NavigationProps {
	variant?: 'header' | 'sidebar' | 'footer';
}

export function Navigation({ variant = 'header' }: NavigationProps) {
	const baseClasses = 'flex items-center space-x-4';
	const variantClasses = {
		header: 'bg-white shadow-sm px-6 py-4',
		sidebar: 'bg-gray-800 text-white p-4 flex-col space-y-2 space-x-0',
		footer: 'bg-gray-800 text-white p-4',
	};

	return (
		<nav className={`${baseClasses} ${variantClasses[variant]}`}>
			<NavLink
				to={ROUTE_PATHS.HOME}
				className='text-gray-600 hover:text-gray-900'
				activeClassName='text-blue-600 font-semibold'
			>
				Home
			</NavLink>
			<NavLink
				to={ROUTE_PATHS.APP}
				className='text-gray-600 hover:text-gray-900'
				activeClassName='text-blue-600 font-semibold'
			>
				Dashboard
			</NavLink>
		</nav>
	);
}
