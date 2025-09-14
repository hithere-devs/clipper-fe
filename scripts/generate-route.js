#!/usr/bin/env node

/**
 * Route Generator Script
 * Usage: node scripts/generate-route.js <routeName> <path>
 * Example: node scripts/generate-route.js UserManagement /app/users
 */

const fs = require('fs');
const path = require('path');

const routeName = process.argv[2];
const routePath = process.argv[3];

if (!routeName || !routePath) {
	console.error('Usage: node generate-route.js <routeName> <path>');
	console.error('Example: node generate-route.js UserManagement /app/users');
	process.exit(1);
}

// Convert routeName to different formats
const componentName = routeName.charAt(0).toUpperCase() + routeName.slice(1);
const constantName = routeName
	.toUpperCase()
	.replace(/([A-Z])/g, '_$1')
	.replace(/^_/, '');
const fileName = routeName
	.toLowerCase()
	.replace(/([A-Z])/g, '-$1')
	.replace(/^-/, '');

// Generate page component
const pageTemplate = `export default function ${componentName}Page() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">${componentName}</h2>
        <p className="text-gray-600">
          This is the ${componentName} page. Add your content here.
        </p>
      </div>
    </div>
  );
}
`;

// Determine the directory structure
const pathParts = routePath.split('/').filter(Boolean);
const isAppRoute = pathParts[0] === 'app';
const pageDir = isAppRoute ? 'pages/dashboard' : 'pages';
const pagePath = path.join(
	__dirname,
	'../src',
	pageDir,
	`${componentName}Page.tsx`
);

// Create the page file
fs.writeFileSync(pagePath, pageTemplate);
console.log(`✅ Created page component: ${pagePath}`);

// Instructions for manual updates
console.log('\n📝 Manual steps to complete the route setup:');
console.log('1. Add to routes.config.ts:');
console.log(`   ${constantName}: '${routePath}',`);
console.log('2. Add to AppRouter.tsx:');
console.log(
	`   { path: '${pathParts
		.slice(1)
		.join('/')}', element: withSuspense(${componentName}Page) }`
);
console.log('3. Import the component in AppRouter.tsx:');
console.log(
	`   const ${componentName}Page = lazy(() => import('../${pageDir}/${componentName}Page'));`
);
