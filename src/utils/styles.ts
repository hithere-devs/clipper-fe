/**
 * CSS class name utilities
 */

/**
 * Combine multiple class name objects/strings
 */
export function clsx(...inputs: any[]): string {
    const classes: string[] = [];

    for (const input of inputs) {
        if (!input) continue;

        if (typeof input === 'string') {
            classes.push(input);
        } else if (Array.isArray(input)) {
            const inner = clsx(...input);
            if (inner) classes.push(inner);
        } else if (typeof input === 'object') {
            for (const key in input) {
                if (input[key]) classes.push(key);
            }
        }
    }

    return classes.join(' ');
}

/**
 * Conditional class names based on variants
 */
export function variants<T extends Record<string, Record<string, string>>>(
    variants: T,
    defaultVariants?: Partial<{ [K in keyof T]: keyof T[K] }>
) {
    return (props?: Partial<{ [K in keyof T]: keyof T[K] }>) => {
        const classes: string[] = [];

        const finalProps = { ...defaultVariants, ...props };

        for (const variant in finalProps) {
            const value = finalProps[variant];
            if (value && variants[variant] && variants[variant][value as string]) {
                classes.push(variants[variant][value as string]);
            }
        }

        return classes.join(' ');
    };
}
