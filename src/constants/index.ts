/**
 * Application constants
 */

// API Configuration
export const API_CONFIG = {
    BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
    TIMEOUT: 30000,
    RETRY_ATTEMPTS: 3,
} as const;

// Application Configuration
export const APP_CONFIG = {
    NAME: 'Clipper',
    VERSION: '1.0.0',
    DESCRIPTION: 'The ultimate platform for managing your content efficiently and beautifully.',
    AUTHOR: 'Clipper Team',
    URL: import.meta.env.VITE_APP_URL || 'http://localhost:5173',
} as const;

// UI Constants
export const UI_CONFIG = {
    SIDEBAR_WIDTH: 256,
    HEADER_HEIGHT: 64,
    MOBILE_BREAKPOINT: 768,
    TABLET_BREAKPOINT: 1024,
    DESKTOP_BREAKPOINT: 1280,
} as const;

// Storage Keys
export const STORAGE_KEYS = {
    AUTH_TOKEN: 'clipper_auth_token',
    REFRESH_TOKEN: 'clipper_refresh_token',
    USER_PREFERENCES: 'clipper_user_preferences',
    THEME: 'clipper_theme',
    LANGUAGE: 'clipper_language',
} as const;

// Error Messages
export const ERROR_MESSAGES = {
    NETWORK_ERROR: 'Network error. Please check your connection and try again.',
    UNAUTHORIZED: 'You are not authorized to perform this action.',
    FORBIDDEN: 'Access denied. You do not have permission to access this resource.',
    NOT_FOUND: 'The requested resource was not found.',
    SERVER_ERROR: 'Server error. Please try again later.',
    VALIDATION_ERROR: 'Please check your input and try again.',
    UNKNOWN_ERROR: 'An unexpected error occurred. Please try again.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
    SAVED: 'Changes saved successfully!',
    CREATED: 'Item created successfully!',
    UPDATED: 'Item updated successfully!',
    DELETED: 'Item deleted successfully!',
    UPLOADED: 'File uploaded successfully!',
    COPIED: 'Copied to clipboard!',
} as const;

// Animation Durations (in milliseconds)
export const ANIMATION_DURATION = {
    FAST: 150,
    DEFAULT: 250,
    SLOW: 350,
    VERY_SLOW: 500,
} as const;

// Form Validation
export const VALIDATION_RULES = {
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PASSWORD_MIN_LENGTH: 8,
    USERNAME_MIN_LENGTH: 3,
    USERNAME_MAX_LENGTH: 30,
    NAME_MAX_LENGTH: 50,
    PHONE_REGEX: /^\+?[\d\s\-\(\)]+$/,
} as const;

// File Upload
export const FILE_CONFIG = {
    MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
    ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    ALLOWED_DOCUMENT_TYPES: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
    CHUNK_SIZE: 1024 * 1024, // 1MB chunks for large file uploads
} as const;

// Pagination
export const PAGINATION_CONFIG = {
    DEFAULT_PAGE_SIZE: 20,
    MAX_PAGE_SIZE: 100,
    PAGE_SIZE_OPTIONS: [10, 20, 50, 100] as const,
} as const;

// Date Formats
export const DATE_FORMATS = {
    DISPLAY: 'MMM dd, yyyy',
    DISPLAY_WITH_TIME: 'MMM dd, yyyy HH:mm',
    ISO: 'yyyy-MM-dd',
    TIME_ONLY: 'HH:mm',
    RELATIVE_TIME_THRESHOLD: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
} as const;

// Feature Flags
export const FEATURE_FLAGS = {
    ENABLE_ANALYTICS: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
    ENABLE_DEBUG: import.meta.env.DEV,
    ENABLE_BETA_FEATURES: import.meta.env.VITE_ENABLE_BETA === 'true',
    ENABLE_MAINTENANCE_MODE: import.meta.env.VITE_MAINTENANCE_MODE === 'true',
} as const;
