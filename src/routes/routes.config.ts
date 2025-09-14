/**
 * Centralized Route Configuration
 * This file contains all route definitions, paths, and metadata
 * Provides type safety and single source of truth for routing
 */

export const ROUTE_PATHS = {
    // Public routes
    HOME: '/',
    LANDING: '/',

    // Protected routes
    APP: '/app',
    DASHBOARD: '/app',

    // Dashboard sub-routes
    DASHBOARD_ANALYTICS: '/app/analytics',
    DASHBOARD_SETTINGS: '/app/settings',
    DASHBOARD_PROFILE: '/app/profile',

    // Auth routes
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',

    // Error routes
    NOT_FOUND: '/404',
    ERROR: '/error',
} as const;

export const ROUTE_NAMES = {
    HOME: 'home',
    LANDING: 'landing',
    APP: 'app',
    DASHBOARD: 'dashboard',
    DASHBOARD_ANALYTICS: 'dashboard.analytics',
    DASHBOARD_SETTINGS: 'dashboard.settings',
    DASHBOARD_PROFILE: 'dashboard.profile',
    LOGIN: 'login',
    REGISTER: 'register',
    FORGOT_PASSWORD: 'forgot-password',
    NOT_FOUND: 'not-found',
    ERROR: 'error',
} as const;

export interface RouteConfig {
    path: string;
    name: string;
    component: string;
    title?: string;
    description?: string;
    requiresAuth?: boolean;
    layout?: string;
    children?: RouteConfig[];
}

export const routeConfigs: RouteConfig[] = [
    {
        path: ROUTE_PATHS.LANDING,
        name: ROUTE_NAMES.LANDING,
        component: 'LandingPage',
        title: 'Welcome to Clipper',
        description: 'Landing page for new users',
        requiresAuth: false,
        layout: 'PublicLayout',
    },
    {
        path: ROUTE_PATHS.APP,
        name: ROUTE_NAMES.APP,
        component: 'DashboardLayout',
        title: 'Dashboard',
        description: 'Main application dashboard',
        requiresAuth: true,
        layout: 'AppLayout',
        children: [
            {
                path: '',
                name: ROUTE_NAMES.DASHBOARD,
                component: 'DashboardHome',
                title: 'Dashboard Home',
                requiresAuth: true,
            },
            {
                path: 'analytics',
                name: ROUTE_NAMES.DASHBOARD_ANALYTICS,
                component: 'AnalyticsPage',
                title: 'Analytics',
                requiresAuth: true,
            },
            {
                path: 'settings',
                name: ROUTE_NAMES.DASHBOARD_SETTINGS,
                component: 'SettingsPage',
                title: 'Settings',
                requiresAuth: true,
            },
            {
                path: 'profile',
                name: ROUTE_NAMES.DASHBOARD_PROFILE,
                component: 'ProfilePage',
                title: 'Profile',
                requiresAuth: true,
            },
        ],
    },
    {
        path: ROUTE_PATHS.LOGIN,
        name: ROUTE_NAMES.LOGIN,
        component: 'LoginPage',
        title: 'Login',
        requiresAuth: false,
        layout: 'AuthLayout',
    },
    {
        path: ROUTE_PATHS.REGISTER,
        name: ROUTE_NAMES.REGISTER,
        component: 'RegisterPage',
        title: 'Register',
        requiresAuth: false,
        layout: 'AuthLayout',
    },
    {
        path: '*',
        name: ROUTE_NAMES.NOT_FOUND,
        component: 'NotFoundPage',
        title: '404 - Page Not Found',
        requiresAuth: false,
    },
];

// Type exports for better TypeScript support
export type RoutePath = typeof ROUTE_PATHS[keyof typeof ROUTE_PATHS];
export type RouteName = typeof ROUTE_NAMES[keyof typeof ROUTE_NAMES];
