/**
 * Custom React hooks for common functionality
 */

import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Hook for managing loading states
 */
export function useLoading(initialState = false) {
    const [isLoading, setIsLoading] = useState(initialState);

    const startLoading = useCallback(() => setIsLoading(true), []);
    const stopLoading = useCallback(() => setIsLoading(false), []);
    const toggleLoading = useCallback(() => setIsLoading(prev => !prev), []);

    return {
        isLoading,
        startLoading,
        stopLoading,
        toggleLoading,
    };
}

/**
 * Hook for managing async operations
 */
export function useAsync<T, E = Error>(
    asyncFunction: () => Promise<T>,
    immediate = true
) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(immediate);
    const [error, setError] = useState<E | null>(null);

    const execute = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const result = await asyncFunction();
            setData(result);
            return result;
        } catch (err) {
            setError(err as E);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [asyncFunction]);

    useEffect(() => {
        if (immediate) {
            execute();
        }
    }, [immediate, execute]);

    return {
        data,
        loading,
        error,
        execute,
    };
}

/**
 * Hook for debouncing values
 */
export function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

/**
 * Hook for local storage with type safety
 */
export function useLocalStorage<T>(
    key: string,
    initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    });

    const setValue = (value: T | ((val: T) => T)) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error);
        }
    };

    return [storedValue, setValue];
}

/**
 * Hook for handling previous values
 */
export function usePrevious<T>(value: T): T | undefined {
    const ref = useRef<T | undefined>(undefined);
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

/**
 * Hook for handling outside clicks
 */
export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
    ref: React.RefObject<T>,
    handler: (event: Event) => void
) {
    useEffect(() => {
        const listener = (event: Event) => {
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }
            handler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);
}

/**
 * Hook for handling keyboard shortcuts
 */
export function useKeyboardShortcut(
    keys: string[],
    callback: () => void,
    options: { preventDefault?: boolean; stopPropagation?: boolean } = {}
) {
    const { preventDefault = true, stopPropagation = true } = options;

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            const pressedKeys: string[] = [];

            if (event.ctrlKey) pressedKeys.push('ctrl');
            if (event.shiftKey) pressedKeys.push('shift');
            if (event.altKey) pressedKeys.push('alt');
            if (event.metaKey) pressedKeys.push('meta');

            pressedKeys.push(event.key.toLowerCase());

            if (keys.every(key => pressedKeys.includes(key.toLowerCase()))) {
                if (preventDefault) event.preventDefault();
                if (stopPropagation) event.stopPropagation();
                callback();
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    }, [keys, callback, preventDefault, stopPropagation]);
}

/**
 * Hook for window size
 */
export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}
