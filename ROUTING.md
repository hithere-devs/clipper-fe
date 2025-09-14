# Clipper Frontend - React Router v7 Setup

A modern, modular React application with React Router v7 featuring clean
architecture, type safety, and centralized route management.

## 🏗️ Architecture Overview

### Key Features

- **React Router v7** with file-based routing patterns
- **Centralized Route Configuration** - All routes managed from a single place
- **Type Safety** - Full TypeScript support with route types
- **Lazy Loading** - Code splitting for optimal performance
- **Modular Layout System** - Reusable layouts for different app sections
- **Navigation Utilities** - Type-safe navigation hooks and helpers

### Project Structure

```
src/
├── routes/
│   ├── index.ts                 # Central route exports
│   ├── routes.config.ts         # Route definitions and configuration
│   ├── route-utils.ts          # Navigation hooks and utilities
│   └── AppRouter.tsx           # Main router setup
├── layouts/
│   ├── PublicLayout.tsx        # Layout for public pages
│   ├── AppLayout.tsx           # Layout for authenticated app
│   └── AuthLayout.tsx          # Layout for authentication pages
├── pages/
│   ├── LandingPage.tsx         # Home/landing page
│   ├── NotFoundPage.tsx        # 404 error page
│   ├── dashboard/              # Dashboard pages
│   │   ├── DashboardHome.tsx
│   │   ├── AnalyticsPage.tsx
│   │   ├── SettingsPage.tsx
│   │   └── ProfilePage.tsx
│   └── auth/                   # Authentication pages
│       ├── LoginPage.tsx
│       └── RegisterPage.tsx
└── components/
    ├── Navigation.tsx          # Navigation components
    ├── Sidebar.tsx            # App sidebar
    ├── AppHeader.tsx          # App header
    ├── PageLoader.tsx         # Loading component
    └── ErrorBoundary.tsx      # Error handling
```

## 🚀 Route Configuration

### Available Routes

| Route            | Component     | Layout       | Description         |
| ---------------- | ------------- | ------------ | ------------------- |
| `/`              | LandingPage   | PublicLayout | Landing/home page   |
| `/app`           | DashboardHome | AppLayout    | Main dashboard      |
| `/app/analytics` | AnalyticsPage | AppLayout    | Analytics dashboard |
| `/app/settings`  | SettingsPage  | AppLayout    | User settings       |
| `/app/profile`   | ProfilePage   | AppLayout    | User profile        |
| `/auth/login`    | LoginPage     | AuthLayout   | User login          |
| `/auth/register` | RegisterPage  | AuthLayout   | User registration   |
| `*`              | NotFoundPage  | -            | 404 page            |

### Route Management

All routes are centrally defined in `src/routes/routes.config.ts`:

```typescript
export const ROUTE_PATHS = {
	HOME: '/',
	APP: '/app',
	DASHBOARD_ANALYTICS: '/app/analytics',
	// ... more routes
} as const;

export const ROUTE_NAMES = {
	HOME: 'home',
	APP: 'app',
	DASHBOARD_ANALYTICS: 'dashboard.analytics',
	// ... more names
} as const;
```

## 🛠️ Navigation Utilities

### useAppNavigation Hook

Enhanced navigation with type safety:

```typescript
const { navigateTo, navigateToRoute, goBack } = useAppNavigation();

// Navigate using path
navigateTo(ROUTE_PATHS.APP);

// Navigate using route name
navigateToRoute(ROUTE_NAMES.DASHBOARD_ANALYTICS);

// Navigate with options
navigateTo(ROUTE_PATHS.LOGIN, { replace: true, state: { from: 'dashboard' } });
```

### Route Utilities

```typescript
// Check if current route matches
const isOnDashboard = useRouteMatch(ROUTE_NAMES.APP);

// Get current route information
const { name, title, path } = useCurrentRoute();

// Generate breadcrumbs
const breadcrumbs = useBreadcrumbs();
```

### Navigation Components

```typescript
// Type-safe navigation links
<NavLink to={ROUTE_PATHS.APP} activeClassName="active">
  Dashboard
</NavLink>

// Reusable navigation component
<Navigation variant="header" />
```

## 🎨 Layouts

### Public Layout

- Used for landing page and public content
- Includes public header with login/signup links
- Clean, marketing-focused design

### App Layout

- Used for authenticated dashboard pages
- Includes sidebar navigation and app header
- Full dashboard experience with breadcrumbs

### Auth Layout

- Used for login/registration pages
- Centered, minimal design
- Consistent branding

## 🔄 Code Splitting & Performance

- **Lazy Loading**: All pages are lazy-loaded for optimal bundle splitting
- **Suspense**: Smooth loading states with fallback components
- **Error Boundaries**: Graceful error handling with recovery options

## 🚀 Getting Started

1. **Start Development Server**

   ```bash
   npm run dev
   ```

2. **Navigate to Routes**

   - Landing Page: `http://localhost:5173/`
   - Dashboard: `http://localhost:5173/app`
   - Login: `http://localhost:5173/auth/login`

3. **Add New Routes**

   a. Add route configuration in `routes.config.ts`:

   ```typescript
   export const ROUTE_PATHS = {
   	// ... existing routes
   	NEW_FEATURE: '/app/new-feature',
   };

   export const ROUTE_NAMES = {
   	// ... existing names
   	NEW_FEATURE: 'new-feature',
   };
   ```

   b. Create the page component:

   ```typescript
   // src/pages/NewFeaturePage.tsx
   export default function NewFeaturePage() {
   	return <div>New Feature Page</div>;
   }
   ```

   c. Add to router in `AppRouter.tsx`:

   ```typescript
   {
     path: 'new-feature',
     element: withSuspense(NewFeaturePage),
   }
   ```

## 🔒 Type Safety

The routing system provides full TypeScript support:

- **Route Paths**: Typed path constants prevent typos
- **Route Names**: Enum-like route names for consistent referencing
- **Navigation**: Type-safe navigation functions
- **Parameters**: Automatic parameter type inference

## 🧪 Testing Routes

The modular structure makes testing easy:

```typescript
// Test route configuration
import { ROUTE_PATHS } from '../routes/routes.config';

test('should have correct route paths', () => {
	expect(ROUTE_PATHS.APP).toBe('/app');
});

// Test navigation
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

test('should render dashboard', () => {
	render(
		<MemoryRouter initialEntries={['/app']}>
			<AppRouter />
		</MemoryRouter>
	);
});
```

## 📱 Responsive Design

All layouts and pages are built with Tailwind CSS and are fully responsive:

- Mobile-first approach
- Responsive navigation (sidebar collapses on mobile)
- Adaptive layouts for different screen sizes

## 🛡️ Error Handling

- **Error Boundaries**: Catch and handle component errors gracefully
- **404 Pages**: Custom not found page with navigation options
- **Fallback UI**: Loading states and error recovery

This setup provides a solid foundation for a scalable React application with
clean, maintainable routing architecture.
