import { createBrowserRouter, RouterProvider } from 'react-router';
import { Suspense, lazy } from 'react';

// Layouts
import { PublicLayout } from '@/layouts/PublicLayout';
import { AppLayout } from '@/layouts/AppLayout';
import { AuthLayout } from '@/layouts/AuthLayout';

// Loading component
import { PageLoader } from '@/components/PageLoader';
import { ErrorBoundary } from '@/components/ErrorBoundary';

// Lazy load pages for code splitting
const LandingPage = lazy(() => import('@/pages/LandingPage'));
const DashboardHome = lazy(() => import('@/pages/dashboard/DashboardHome'));
const AnalyticsPage = lazy(() => import('@/pages/dashboard/AnalyticsPage'));
const SettingsPage = lazy(() => import('@/pages/dashboard/SettingsPage'));
const ProfilePage = lazy(() => import('@/pages/dashboard/ProfilePage'));
const LoginPage = lazy(() => import('@/pages/auth/LoginPage'));
const RegisterPage = lazy(() => import('@/pages/auth/RegisterPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

// Higher-order component for lazy loading with suspense
const withSuspense = (Component: React.ComponentType) => (
	<Suspense fallback={<PageLoader />}>
		<Component />
	</Suspense>
);

// Route configuration following React Router v7 patterns
export const router = createBrowserRouter([
	{
		path: '/',
		element: <PublicLayout />,
		errorElement: <ErrorBoundary />,
		children: [
			{
				index: true,
				element: withSuspense(LandingPage),
			},
		],
	},
	{
		path: '/app',
		element: <AppLayout />,
		errorElement: <ErrorBoundary />,
		children: [
			{
				index: true,
				element: withSuspense(DashboardHome),
			},
			{
				path: 'analytics',
				element: withSuspense(AnalyticsPage),
			},
			{
				path: 'settings',
				element: withSuspense(SettingsPage),
			},
			{
				path: 'profile',
				element: withSuspense(ProfilePage),
			},
		],
	},
	{
		path: '/auth',
		element: <AuthLayout />,
		errorElement: <ErrorBoundary />,
		children: [
			{
				path: 'login',
				element: withSuspense(LoginPage),
			},
			{
				path: 'register',
				element: withSuspense(RegisterPage),
			},
		],
	},
	{
		path: '*',
		element: withSuspense(NotFoundPage),
	},
]);

// Router Provider Component
export function AppRouter() {
	return <RouterProvider router={router} />;
}
