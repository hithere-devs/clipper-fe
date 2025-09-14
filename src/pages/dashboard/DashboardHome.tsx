export default function DashboardHome() {
	return (
		<div className='space-y-6'>
			<div className='bg-white rounded-lg shadow p-6'>
				<h2 className='text-2xl font-bold text-gray-900 mb-4'>
					Dashboard Overview
				</h2>
				<p className='text-gray-600 mb-6'>
					Welcome to your dashboard! Here's an overview of your account.
				</p>

				{/* Stats Grid */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
					{stats.map((stat, index) => (
						<div key={index} className='bg-gray-50 rounded-lg p-4'>
							<div className='text-2xl mb-2'>{stat.icon}</div>
							<div className='text-2xl font-bold text-gray-900'>
								{stat.value}
							</div>
							<div className='text-sm text-gray-600'>{stat.label}</div>
						</div>
					))}
				</div>

				{/* Quick Actions */}
				<div>
					<h3 className='text-lg font-semibold text-gray-900 mb-4'>
						Quick Actions
					</h3>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
						{quickActions.map((action, index) => (
							<button
								key={index}
								className='p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors'
							>
								<div className='text-2xl mb-2'>{action.icon}</div>
								<div className='text-sm font-medium text-gray-900'>
									{action.label}
								</div>
							</button>
						))}
					</div>
				</div>
			</div>

			{/* Recent Activity */}
			<div className='bg-white rounded-lg shadow p-6'>
				<h3 className='text-lg font-semibold text-gray-900 mb-4'>
					Recent Activity
				</h3>
				<div className='space-y-3'>
					{recentActivity.map((activity, index) => (
						<div
							key={index}
							className='flex items-center space-x-3 p-3 bg-gray-50 rounded-lg'
						>
							<div className='text-lg'>{activity.icon}</div>
							<div className='flex-1'>
								<div className='text-sm font-medium text-gray-900'>
									{activity.title}
								</div>
								<div className='text-xs text-gray-500'>{activity.time}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

const stats = [
	{ icon: '📊', value: '24', label: 'Total Items' },
	{ icon: '👥', value: '5', label: 'Team Members' },
	{ icon: '🎯', value: '12', label: 'Active Projects' },
];

const quickActions = [
	{ icon: '➕', label: 'Add New' },
	{ icon: '📤', label: 'Upload' },
	{ icon: '👥', label: 'Invite' },
	{ icon: '📊', label: 'Reports' },
];

const recentActivity = [
	{ icon: '✅', title: 'Task completed successfully', time: '2 hours ago' },
	{ icon: '📤', title: 'File uploaded to project', time: '4 hours ago' },
	{ icon: '👥', title: 'New team member added', time: '1 day ago' },
	{ icon: '🔧', title: 'Settings updated', time: '2 days ago' },
];
