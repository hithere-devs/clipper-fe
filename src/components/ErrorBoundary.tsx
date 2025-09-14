import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Props {
	children?: ReactNode;
}

interface State {
	hasError: boolean;
	error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false,
	};

	public static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error('Uncaught error:', error, errorInfo);
	}

	public render() {
		if (this.state.hasError) {
			return (
				<div className='min-h-screen bg-gray-50 flex items-center justify-center'>
					<div className='max-w-md w-full text-center'>
						<div className='bg-white p-8 rounded-lg shadow-md'>
							<div className='text-red-500 text-6xl mb-4'>⚠️</div>
							<h1 className='text-2xl font-bold text-gray-900 mb-4'>
								Something went wrong
							</h1>
							<p className='text-gray-600 mb-6'>
								We're sorry, but something unexpected happened. Please try
								refreshing the page.
							</p>
							<button
								onClick={() => window.location.reload()}
								className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700'
							>
								Refresh Page
							</button>
						</div>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}
