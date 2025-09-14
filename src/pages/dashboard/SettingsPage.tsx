export default function SettingsPage() {
	return (
		<div className='space-y-6'>
			<div className='bg-white rounded-lg shadow'>
				<div className='px-6 py-4 border-b'>
					<h2 className='text-2xl font-bold text-gray-900'>Settings</h2>
					<p className='text-gray-600 mt-1'>
						Manage your account preferences and configurations
					</p>
				</div>

				<div className='p-6 space-y-8'>
					{/* Profile Settings */}
					<section>
						<h3 className='text-lg font-semibold text-gray-900 mb-4'>
							Profile Information
						</h3>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							<div>
								<label className='block text-sm font-medium text-gray-700 mb-2'>
									Full Name
								</label>
								<input
									type='text'
									className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
									defaultValue='John Doe'
								/>
							</div>
							<div>
								<label className='block text-sm font-medium text-gray-700 mb-2'>
									Email Address
								</label>
								<input
									type='email'
									className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
									defaultValue='john@example.com'
								/>
							</div>
						</div>
					</section>

					{/* Notification Settings */}
					<section>
						<h3 className='text-lg font-semibold text-gray-900 mb-4'>
							Notifications
						</h3>
						<div className='space-y-4'>
							{notificationSettings.map((setting, index) => (
								<div key={index} className='flex items-center justify-between'>
									<div>
										<div className='font-medium text-gray-900'>
											{setting.title}
										</div>
										<div className='text-sm text-gray-600'>
											{setting.description}
										</div>
									</div>
									<label className='relative inline-flex items-center cursor-pointer'>
										<input
											type='checkbox'
											className='sr-only peer'
											defaultChecked={setting.enabled}
										/>
										<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
									</label>
								</div>
							))}
						</div>
					</section>

					{/* Privacy Settings */}
					<section>
						<h3 className='text-lg font-semibold text-gray-900 mb-4'>
							Privacy
						</h3>
						<div className='space-y-4'>
							{privacySettings.map((setting, index) => (
								<div key={index} className='flex items-start space-x-3'>
									<input
										type='checkbox'
										className='mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
										defaultChecked={setting.enabled}
									/>
									<div className='flex-1'>
										<div className='font-medium text-gray-900'>
											{setting.title}
										</div>
										<div className='text-sm text-gray-600'>
											{setting.description}
										</div>
									</div>
								</div>
							))}
						</div>
					</section>

					{/* Actions */}
					<div className='pt-6 border-t'>
						<div className='flex space-x-4'>
							<button className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors'>
								Save Changes
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

const notificationSettings = [
	{
		title: 'Email Notifications',
		description: 'Receive email updates about your account activity',
		enabled: true,
	},
	{
		title: 'Push Notifications',
		description: 'Get push notifications on your devices',
		enabled: false,
	},
	{
		title: 'SMS Notifications',
		description: 'Receive important updates via SMS',
		enabled: true,
	},
];

const privacySettings = [
	{
		title: 'Make profile public',
		description: 'Allow others to see your profile information',
		enabled: false,
	},
	{
		title: 'Share usage analytics',
		description: 'Help improve our service by sharing anonymous usage data',
		enabled: true,
	},
	{
		title: 'Marketing communications',
		description: 'Receive promotional emails and product updates',
		enabled: false,
	},
];
