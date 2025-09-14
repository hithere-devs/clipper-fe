export default function ProfilePage() {
	return (
		<div className='space-y-6'>
			<div className='bg-white rounded-lg shadow'>
				<div className='px-6 py-4 border-b'>
					<h2 className='text-2xl font-bold text-gray-900'>My Profile</h2>
					<p className='text-gray-600 mt-1'>
						Manage your personal information and preferences
					</p>
				</div>

				<div className='p-6'>
					{/* Profile Header */}
					<div className='flex items-center space-x-6 mb-8'>
						<div className='w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-4xl'>
							👤
						</div>
						<div className='flex-1'>
							<h3 className='text-xl font-bold text-gray-900'>John Doe</h3>
							<p className='text-gray-600'>john.doe@example.com</p>
							<p className='text-sm text-gray-500 mt-1'>
								Member since January 2025
							</p>
						</div>
						<button className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors'>
							Change Photo
						</button>
					</div>

					{/* Profile Information */}
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
						<div>
							<label className='block text-sm font-medium text-gray-700 mb-2'>
								First Name
							</label>
							<input
								type='text'
								className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
								defaultValue='John'
							/>
						</div>
						<div>
							<label className='block text-sm font-medium text-gray-700 mb-2'>
								Last Name
							</label>
							<input
								type='text'
								className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
								defaultValue='Doe'
							/>
						</div>
						<div>
							<label className='block text-sm font-medium text-gray-700 mb-2'>
								Phone Number
							</label>
							<input
								type='tel'
								className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
								defaultValue='+1 (555) 123-4567'
							/>
						</div>
						<div>
							<label className='block text-sm font-medium text-gray-700 mb-2'>
								Time Zone
							</label>
							<select className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
								<option value='UTC-8'>Pacific Time (UTC-8)</option>
								<option value='UTC-5'>Eastern Time (UTC-5)</option>
								<option value='UTC'>UTC</option>
							</select>
						</div>
					</div>

					{/* Bio */}
					<div className='mb-8'>
						<label className='block text-sm font-medium text-gray-700 mb-2'>
							Bio
						</label>
						<textarea
							rows={4}
							className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
							placeholder='Tell us about yourself...'
							defaultValue='Software developer with a passion for creating amazing user experiences.'
						/>
					</div>

					{/* Activity Summary */}
					<div className='bg-gray-50 rounded-lg p-6 mb-8'>
						<h4 className='text-lg font-semibold text-gray-900 mb-4'>
							Activity Summary
						</h4>
						<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
							{activityStats.map((stat, index) => (
								<div key={index} className='text-center'>
									<div className='text-2xl font-bold text-blue-600'>
										{stat.value}
									</div>
									<div className='text-sm text-gray-600'>{stat.label}</div>
								</div>
							))}
						</div>
					</div>

					{/* Recent Activity */}
					<div className='mb-8'>
						<h4 className='text-lg font-semibold text-gray-900 mb-4'>
							Recent Activity
						</h4>
						<div className='space-y-3'>
							{recentActivities.map((activity, index) => (
								<div
									key={index}
									className='flex items-center space-x-3 p-3 bg-gray-50 rounded-lg'
								>
									<div className='text-lg'>{activity.icon}</div>
									<div className='flex-1'>
										<div className='text-sm font-medium text-gray-900'>
											{activity.action}
										</div>
										<div className='text-xs text-gray-500'>
											{activity.timestamp}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Actions */}
					<div className='pt-6 border-t'>
						<div className='flex space-x-4'>
							<button className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors'>
								Update Profile
							</button>
							<button className='border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors'>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const activityStats = [
	{ value: '24', label: 'Projects' },
	{ value: '156', label: 'Tasks Completed' },
	{ value: '8', label: 'Team Members' },
	{ value: '92%', label: 'Success Rate' },
];

const recentActivities = [
	{
		icon: '✅',
		action: 'Completed project milestone',
		timestamp: '2 hours ago',
	},
	{ icon: '📤', action: 'Uploaded new document', timestamp: '5 hours ago' },
	{ icon: '💬', action: 'Left comment on task', timestamp: '1 day ago' },
	{ icon: '👥', action: 'Joined team meeting', timestamp: '2 days ago' },
	{ icon: '⚙️', action: 'Updated profile settings', timestamp: '3 days ago' },
];
