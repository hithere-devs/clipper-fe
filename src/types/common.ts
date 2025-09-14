/**
 * Common TypeScript type definitions for the application
 */

// Base types
export interface ApiResponse<T = any> {
    data: T;
    message?: string;
    success: boolean;
    error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}

// User related types
export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    avatar?: string;
    role: UserRole;
    createdAt: string;
    updatedAt: string;
}

export const UserRole = {
    ADMIN: 'admin',
    USER: 'user',
    MODERATOR: 'moderator',
} as const;

export type UserRole = typeof UserRole[keyof typeof UserRole];

// Navigation types
export interface NavItem {
    id: string;
    label: string;
    path: string;
    icon?: string;
    children?: NavItem[];
    requiresAuth?: boolean;
}

// Form types
export interface FormState<T = any> {
    data: T;
    errors: Partial<Record<keyof T, string>>;
    isSubmitting: boolean;
    isValid: boolean;
}

// Loading states
export const LoadingState = {
    IDLE: 'idle',
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error',
} as const;

export type LoadingState = typeof LoadingState[keyof typeof LoadingState];

// Common component props
export interface BaseComponentProps {
    className?: string;
    children?: React.ReactNode;
}

export interface ButtonProps extends BaseComponentProps {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
}

// Route types (extending from route config)
export interface RouteMetadata {
    title: string;
    description?: string;
    keywords?: string[];
    ogImage?: string;
}

// Error types
export interface AppError {
    code: string;
    message: string;
    details?: any;
    timestamp: string;
}

// Theme types
export interface Theme {
    colors: {
        primary: string;
        secondary: string;
        background: string;
        foreground: string;
        muted: string;
        accent: string;
        destructive: string;
    };
    fonts: {
        sans: string;
        serif: string;
        mono: string;
    };
    spacing: Record<string, string>;
    breakpoints: Record<string, string>;
}
