import { useAppNavigation } from '@/routes/route-utils';
import { ROUTE_NAMES } from '@/routes/routes.config';

export default function RegisterPage() {
	const { navigateToRoute } = useAppNavigation();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// In a real app, you'd handle registration here
		navigateToRoute(ROUTE_NAMES.APP);
	};

	return (
		<form onSubmit={handleSubmit} className='space-y-6'>
			<div>
				<h2 className='text-2xl font-bold text-gray-900 text-center mb-2'>
					Create your account
				</h2>
				<p className='text-center text-gray-600'>
					Already have an account?{' '}
					<button
						type='button'
						onClick={() => navigateToRoute(ROUTE_NAMES.LOGIN)}
						className='text-blue-600 hover:text-blue-800'
					>
						Sign in
					</button>
				</p>
			</div>

			<div className='space-y-4'>
				<div className='grid grid-cols-2 gap-4'>
					<div>
						<label
							htmlFor='firstName'
							className='block text-sm font-medium text-gray-700 mb-1'
						>
							First name
						</label>
						<input
							id='firstName'
							name='firstName'
							type='text'
							autoComplete='given-name'
							required
							className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
							placeholder='First name'
						/>
					</div>
					<div>
						<label
							htmlFor='lastName'
							className='block text-sm font-medium text-gray-700 mb-1'
						>
							Last name
						</label>
						<input
							id='lastName'
							name='lastName'
							type='text'
							autoComplete='family-name'
							required
							className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
							placeholder='Last name'
						/>
					</div>
				</div>

				<div>
					<label
						htmlFor='email'
						className='block text-sm font-medium text-gray-700 mb-1'
					>
						Email address
					</label>
					<input
						id='email'
						name='email'
						type='email'
						autoComplete='email'
						required
						className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
						placeholder='Enter your email'
					/>
				</div>

				<div>
					<label
						htmlFor='password'
						className='block text-sm font-medium text-gray-700 mb-1'
					>
						Password
					</label>
					<input
						id='password'
						name='password'
						type='password'
						autoComplete='new-password'
						required
						className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
						placeholder='Enter your password'
					/>
				</div>

				<div>
					<label
						htmlFor='confirmPassword'
						className='block text-sm font-medium text-gray-700 mb-1'
					>
						Confirm password
					</label>
					<input
						id='confirmPassword'
						name='confirmPassword'
						type='password'
						autoComplete='new-password'
						required
						className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
						placeholder='Confirm your password'
					/>
				</div>
			</div>

			<div className='flex items-center'>
				<input
					id='terms'
					name='terms'
					type='checkbox'
					required
					className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
				/>
				<label htmlFor='terms' className='ml-2 block text-sm text-gray-700'>
					I agree to the{' '}
					<a href='#' className='text-blue-600 hover:text-blue-800'>
						Terms of Service
					</a>{' '}
					and{' '}
					<a href='#' className='text-blue-600 hover:text-blue-800'>
						Privacy Policy
					</a>
				</label>
			</div>

			<div>
				<button
					type='submit'
					className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors'
				>
					Create account
				</button>
			</div>

			<div className='relative'>
				<div className='absolute inset-0 flex items-center'>
					<div className='w-full border-t border-gray-300' />
				</div>
				<div className='relative flex justify-center text-sm'>
					<span className='px-2 bg-white text-gray-500'>Or continue with</span>
				</div>
			</div>

			<div className='grid grid-cols-2 gap-3'>
				<button
					type='button'
					className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
				>
					<span>Google</span>
				</button>
				<button
					type='button'
					className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
				>
					<span>GitHub</span>
				</button>
			</div>
		</form>
	);
}
