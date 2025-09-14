#!/usr/bin/env node

/**
 * Import Converter Script
 * Converts relative imports to @ imports across the codebase
 * Usage: node scripts/convert-imports.js
 */

const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');

// Mapping of relative paths to @ imports
const importMappings = {
	// Components
	'../components/': '@/components/',
	'../../components/': '@/components/',
	'../../../components/': '@/components/',
	'./components/': '@/components/',

	// Pages
	'../pages/': '@/pages/',
	'../../pages/': '@/pages/',
	'../../../pages/': '@/pages/',

	// Layouts
	'../layouts/': '@/layouts/',
	'../../layouts/': '@/layouts/',
	'../../../layouts/': '@/layouts/',

	// Routes
	'../routes/': '@/routes/',
	'../../routes/': '@/routes/',
	'../../../routes/': '@/routes/',
	'./routes/': '@/routes/',

	// Utils
	'../utils/': '@/utils/',
	'../../utils/': '@/utils/',
	'../../../utils/': '@/utils/',

	// Hooks
	'../hooks/': '@/hooks/',
	'../../hooks/': '@/hooks/',
	'../../../hooks/': '@/hooks/',

	// Types
	'../types/': '@/types/',
	'../../types/': '@/types/',
	'../../../types/': '@/types/',

	// Constants
	'../constants/': '@/constants/',
	'../../constants/': '@/constants/',
	'../../../constants/': '@/constants/',

	// Assets
	'../assets/': '@/assets/',
	'../../assets/': '@/assets/',
	'../../../assets/': '@/assets/',
};

function getAllFiles(dir, extension = '.tsx') {
	const files = [];

	function traverse(currentDir) {
		const items = fs.readdirSync(currentDir);

		for (const item of items) {
			const fullPath = path.join(currentDir, item);
			const stat = fs.statSync(fullPath);

			if (
				stat.isDirectory() &&
				!item.startsWith('.') &&
				item !== 'node_modules'
			) {
				traverse(fullPath);
			} else if (
				stat.isFile() &&
				(fullPath.endsWith('.tsx') || fullPath.endsWith('.ts'))
			) {
				files.push(fullPath);
			}
		}
	}

	traverse(dir);
	return files;
}

function convertImports(filePath) {
	let content = fs.readFileSync(filePath, 'utf8');
	let hasChanges = false;

	// Convert import statements
	for (const [relativePath, atImport] of Object.entries(importMappings)) {
		const importRegex = new RegExp(
			`from ['"]${relativePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`,
			'g'
		);
		const newContent = content.replace(importRegex, `from '${atImport}`);

		if (newContent !== content) {
			content = newContent;
			hasChanges = true;
		}
	}

	// Also handle dynamic imports
	for (const [relativePath, atImport] of Object.entries(importMappings)) {
		const dynamicImportRegex = new RegExp(
			`import\\(['"]${relativePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`,
			'g'
		);
		const newContent = content.replace(
			dynamicImportRegex,
			`import('${atImport}`
		);

		if (newContent !== content) {
			content = newContent;
			hasChanges = true;
		}
	}

	if (hasChanges) {
		fs.writeFileSync(filePath, content);
		console.log(`✅ Updated: ${path.relative(process.cwd(), filePath)}`);
		return true;
	}

	return false;
}

function main() {
	console.log('🔄 Converting relative imports to @ imports...\n');

	const files = getAllFiles(srcDir);
	let updatedCount = 0;

	for (const file of files) {
		if (convertImports(file)) {
			updatedCount++;
		}
	}

	console.log(`\n🎉 Conversion complete! Updated ${updatedCount} files.`);

	if (updatedCount > 0) {
		console.log('\n📝 Next steps:');
		console.log('1. Review the changes');
		console.log('2. Test your application');
		console.log('3. Commit the changes');
	}
}

main();
