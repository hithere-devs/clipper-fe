import { useNavigate, useLocation, useParams } from 'react-router';
import { ROUTE_PATHS, ROUTE_NAMES, type RoutePath, type RouteName } from '@/routes/routes.config';

/**
 * Enhanced navigation hook with type safety
 */
export function useAppNavigation() {
    const navigate = useNavigate();
    const location = useLocation();

    const navigateTo = (path: RoutePath, options?: { replace?: boolean; state?: any }) => {
        navigate(path, options);
    };

    const navigateToRoute = (routeName: RouteName, params?: Record<string, string>, options?: { replace?: boolean; state?: any }) => {
        const path = getRoutePathByName(routeName, params);
        navigate(path, options);
    };

    const goBack = () => navigate(-1);
    const goForward = () => navigate(1);

    return {
        navigateTo,
        navigateToRoute,
        goBack,
        goForward,
        currentPath: location.pathname,
        currentSearch: location.search,
        currentHash: location.hash,
        currentState: location.state,
    };
}

/**
 * Get route path by route name
 */
export function getRoutePathByName(routeName: RouteName, params?: Record<string, string>): string {
    const routeMap: Record<RouteName, string> = {
        [ROUTE_NAMES.HOME]: ROUTE_PATHS.HOME,
        [ROUTE_NAMES.LANDING]: ROUTE_PATHS.LANDING,
        [ROUTE_NAMES.APP]: ROUTE_PATHS.APP,
        [ROUTE_NAMES.DASHBOARD]: ROUTE_PATHS.DASHBOARD,
        [ROUTE_NAMES.DASHBOARD_ANALYTICS]: ROUTE_PATHS.DASHBOARD_ANALYTICS,
        [ROUTE_NAMES.DASHBOARD_SETTINGS]: ROUTE_PATHS.DASHBOARD_SETTINGS,
        [ROUTE_NAMES.DASHBOARD_PROFILE]: ROUTE_PATHS.DASHBOARD_PROFILE,
        [ROUTE_NAMES.LOGIN]: ROUTE_PATHS.LOGIN,
        [ROUTE_NAMES.REGISTER]: ROUTE_PATHS.REGISTER,
        [ROUTE_NAMES.FORGOT_PASSWORD]: ROUTE_PATHS.FORGOT_PASSWORD,
        [ROUTE_NAMES.NOT_FOUND]: ROUTE_PATHS.NOT_FOUND,
        [ROUTE_NAMES.ERROR]: ROUTE_PATHS.ERROR,
    };

    let path = routeMap[routeName];

    // Replace dynamic segments with actual values
    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            path = path.replace(`:${key}`, value);
        });
    }

    return path;
}

/**
 * Check if current route matches given route name
 */
export function useRouteMatch(routeName: RouteName): boolean {
    const location = useLocation();
    const routePath = getRoutePathByName(routeName);

    // Simple path matching - can be enhanced for complex patterns
    return location.pathname === routePath || location.pathname.startsWith(routePath + '/');
}

/**
 * Get current route information
 */
export function useCurrentRoute() {
    const location = useLocation();
    const params = useParams();

    // Find matching route config
    const findRouteConfig = (path: string) => {
        // This is a simplified version - you might want to implement more sophisticated matching
        if (path === '/') return { name: ROUTE_NAMES.LANDING, title: 'Landing Page' };
        if (path.startsWith('/app')) return { name: ROUTE_NAMES.APP, title: 'Dashboard' };
        if (path === '/login') return { name: ROUTE_NAMES.LOGIN, title: 'Login' };
        if (path === '/register') return { name: ROUTE_NAMES.REGISTER, title: 'Register' };
        return { name: ROUTE_NAMES.NOT_FOUND, title: 'Not Found' };
    };

    const currentRoute = findRouteConfig(location.pathname);

    return {
        ...currentRoute,
        path: location.pathname,
        params,
        search: location.search,
        hash: location.hash,
        state: location.state,
    };
}

/**
 * Breadcrumb utilities
 */
export function useBreadcrumbs() {
    const location = useLocation();

    const generateBreadcrumbs = () => {
        const pathSegments = location.pathname.split('/').filter(Boolean);
        const breadcrumbs = [{ name: 'Home', path: '/' }];

        let currentPath = '';
        pathSegments.forEach((segment) => {
            currentPath += `/${segment}`;
            breadcrumbs.push({
                name: segment.charAt(0).toUpperCase() + segment.slice(1),
                path: currentPath,
            });
        });

        return breadcrumbs;
    };

    return generateBreadcrumbs();
}
