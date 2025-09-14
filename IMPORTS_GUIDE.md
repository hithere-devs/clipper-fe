# @ Imports Setup Guide

This document explains the path alias (`@` imports) setup in your React
application, making imports cleaner and more maintainable.

## 🚀 Configuration

### TypeScript Configuration

**tsconfig.app.json**

```json
{
	"compilerOptions": {
		"baseUrl": ".",
		"paths": {
			"@/*": ["src/*"],
			"@/components/*": ["src/components/*"],
			"@/pages/*": ["src/pages/*"],
			"@/layouts/*": ["src/layouts/*"],
			"@/routes/*": ["src/routes/*"],
			"@/assets/*": ["src/assets/*"],
			"@/hooks/*": ["src/hooks/*"],
			"@/utils/*": ["src/utils/*"],
			"@/types/*": ["src/types/*"],
			"@/constants/*": ["src/constants/*"],
			"@/services/*": ["src/services/*"],
			"@/store/*": ["src/store/*"]
		}
	}
}
```

### Vite Configuration

**vite.config.ts**

```typescript
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@/components': fileURLToPath(
				new URL('./src/components', import.meta.url)
			),
			'@/pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
			// ... more aliases
		},
	},
});
```

## 📁 Directory Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── Navigation.tsx
│   └── index.ts        # Central exports
├── pages/              # Page components
│   ├── LandingPage.tsx
│   ├── auth/
│   └── dashboard/
├── layouts/            # Layout components
│   ├── AppLayout.tsx
│   ├── PublicLayout.tsx
│   └── AuthLayout.tsx
├── routes/             # Routing configuration
│   ├── routes.config.ts
│   ├── route-utils.ts
│   └── AppRouter.tsx
├── hooks/              # Custom React hooks
│   └── index.ts
├── utils/              # Utility functions
│   ├── common.ts
│   ├── styles.ts
│   └── index.ts
├── types/              # TypeScript type definitions
│   ├── common.ts
│   └── index.ts
├── constants/          # Application constants
│   └── index.ts
├── assets/             # Static assets
├── services/           # API services
└── store/              # State management
```

## 🎯 Usage Examples

### Before (Relative Imports)

```typescript
// ❌ Old way - relative imports
import { Button } from '../../../components/Button';
import { useAppNavigation } from '../routes/route-utils';
import { ROUTE_NAMES } from '../routes/routes.config';
import { formatDate } from '../../../utils/common';
```

### After (@ Imports)

```typescript
// ✅ New way - @ imports
import { Button } from '@/components/Button';
import { useAppNavigation } from '@/routes/route-utils';
import { ROUTE_NAMES } from '@/routes/routes.config';
import { formatDate } from '@/utils/common';
```

### Component Example

```typescript
// src/components/ExampleComponent.tsx
import type { ButtonProps } from '@/types/common';
import { cn } from '@/utils/styles';
import { useLoading } from '@/hooks';
import { API_CONFIG } from '@/constants';

export function ExampleComponent() {
	const { isLoading } = useLoading();

	return (
		<div className={cn('p-4', { 'opacity-50': isLoading })}>
			{/* Component content */}
		</div>
	);
}
```

### Page Example

```typescript
// src/pages/dashboard/AnalyticsPage.tsx
import { useAsync } from '@/hooks';
import { Button } from '@/components';
import { useAppNavigation } from '@/routes/route-utils';
import { API_CONFIG } from '@/constants';

export default function AnalyticsPage() {
	const { navigateToRoute } = useAppNavigation();
	const { data, loading } = useAsync(fetchAnalytics);

	return (
		<div>
			<Button onClick={() => navigateToRoute('dashboard')}>
				Back to Dashboard
			</Button>
		</div>
	);
}
```

## 📦 Available Aliases

| Alias            | Path               | Purpose                   |
| ---------------- | ------------------ | ------------------------- |
| `@/*`            | `src/*`            | General src folder access |
| `@/components/*` | `src/components/*` | UI components             |
| `@/pages/*`      | `src/pages/*`      | Page components           |
| `@/layouts/*`    | `src/layouts/*`    | Layout components         |
| `@/routes/*`     | `src/routes/*`     | Routing configuration     |
| `@/hooks/*`      | `src/hooks/*`      | Custom React hooks        |
| `@/utils/*`      | `src/utils/*`      | Utility functions         |
| `@/types/*`      | `src/types/*`      | TypeScript types          |
| `@/constants/*`  | `src/constants/*`  | App constants             |
| `@/assets/*`     | `src/assets/*`     | Static assets             |
| `@/services/*`   | `src/services/*`   | API services              |
| `@/store/*`      | `src/store/*`      | State management          |

## 🛠️ Utility Functions

### Style Utilities (`@/utils/styles`)

```typescript
import { cn, clsx } from '@/utils/styles';

// Conditional class names
const buttonClass = cn(
	'px-4 py-2 rounded',
	isActive && 'bg-blue-500',
	disabled && 'opacity-50'
);
```

### Common Utilities (`@/utils/common`)

```typescript
import { debounce, formatDate, generateId } from '@/utils/common';

const debouncedSearch = debounce(searchFunction, 300);
const formattedDate = formatDate(new Date());
const uniqueId = generateId();
```

### Custom Hooks (`@/hooks`)

```typescript
import { useLoading, useLocalStorage, useDebounce } from '@/hooks';

const { isLoading, startLoading, stopLoading } = useLoading();
const [value, setValue] = useLocalStorage('key', defaultValue);
const debouncedValue = useDebounce(inputValue, 500);
```

## 🎨 Type Definitions (`@/types`)

```typescript
import type { User, ApiResponse, LoadingState } from '@/types';

const user: User = {
	id: '1',
	email: 'user@example.com',
	firstName: 'John',
	lastName: 'Doe',
	role: UserRole.USER,
	createdAt: new Date().toISOString(),
	updatedAt: new Date().toISOString(),
};
```

## 📋 Constants (`@/constants`)

```typescript
import { API_CONFIG, ERROR_MESSAGES, VALIDATION_RULES } from '@/constants';

const apiUrl = API_CONFIG.BASE_URL;
const emailRegex = VALIDATION_RULES.EMAIL_REGEX;
```

## 🚀 Benefits

### 1. **Cleaner Imports**

- No more `../../../` relative path chains
- Consistent import structure across the codebase
- Easier to understand and maintain

### 2. **Better Refactoring**

- Moving files doesn't break imports
- IDE support for auto-completion and refactoring
- Reduced chance of import errors

### 3. **Team Consistency**

- Standardized import patterns
- Easier onboarding for new developers
- Consistent code style across the project

### 4. **Type Safety**

- Full TypeScript support
- Auto-completion in IDEs
- Compile-time error checking

## 🔧 IDE Setup

### VS Code

The setup should work automatically with the TypeScript configuration. You'll
get:

- Auto-completion for @ imports
- Go-to-definition support
- Error highlighting
- Import suggestions

### Additional VS Code Extensions

- **TypeScript Importer** - Auto import suggestions
- **Path Intellisense** - Auto-completion for file paths
- **Auto Import - ES6, TS, JSX, TSX** - Automatic import statements

## 📝 Best Practices

### 1. **Use Specific Aliases When Possible**

```typescript
// ✅ Preferred
import { Button } from '@/components/Button';

// ✅ Also good for multiple imports
import { Button, Modal, Input } from '@/components';

// ❌ Avoid when unnecessary
import { Button } from '@/components/ui/Button';
```

### 2. **Group Imports Logically**

```typescript
// External libraries
import React from 'react';
import { Router } from 'react-router';

// Internal @ imports
import { Button } from '@/components';
import { useAppNavigation } from '@/routes/route-utils';
import { formatDate } from '@/utils';

// Relative imports (if any)
import './Component.css';
```

### 3. **Use Index Files for Barrel Exports**

```typescript
// src/components/index.ts
export * from '@/components/Button';
export * from '@/components/Modal';
export * from '@/components/Input';

// Usage
import { Button, Modal, Input } from '@/components';
```

## 🐛 Troubleshooting

### Common Issues

1. **"Cannot find module" errors**

   - Ensure TypeScript and Vite configurations match
   - Restart TypeScript server in VS Code
   - Check file extensions (.ts, .tsx)

2. **Auto-completion not working**

   - Restart TypeScript server
   - Check tsconfig.json paths configuration
   - Ensure files are within the include paths

3. **Build errors**
   - Verify Vite alias configuration
   - Check for circular dependencies
   - Ensure all imported files exist

### Solutions

```bash
# Restart TypeScript server in VS Code
# Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"

# Clear Vite cache
npm run dev -- --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

This setup provides a robust foundation for maintainable imports throughout your
React application!
