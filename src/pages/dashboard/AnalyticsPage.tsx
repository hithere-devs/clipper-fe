export default function AnalyticsPage() {
	return (
		<div className='space-y-6'>
			<div className='bg-white rounded-lg shadow p-6'>
				<h2 className='text-2xl font-bold text-gray-900 mb-6'>
					Analytics Dashboard
				</h2>

				{/* Key Metrics */}
				<div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-8'>
					{metrics.map((metric, index) => (
						<div
							key={index}
							className='bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-6'
						>
							<div className='text-3xl mb-2'>{metric.icon}</div>
							<div className='text-2xl font-bold'>{metric.value}</div>
							<div className='text-sm opacity-90'>{metric.label}</div>
							<div className='text-xs mt-2 opacity-75'>{metric.change}</div>
						</div>
					))}
				</div>

				{/* Charts Placeholder */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
					<div className='bg-gray-50 rounded-lg p-6 h-64 flex items-center justify-center'>
						<div className='text-center'>
							<div className='text-4xl mb-2'>📈</div>
							<div className='text-gray-600'>Revenue Chart</div>
							<div className='text-sm text-gray-500 mt-1'>
								Chart component would go here
							</div>
						</div>
					</div>
					<div className='bg-gray-50 rounded-lg p-6 h-64 flex items-center justify-center'>
						<div className='text-center'>
							<div className='text-4xl mb-2'>🥧</div>
							<div className='text-gray-600'>Usage Distribution</div>
							<div className='text-sm text-gray-500 mt-1'>
								Pie chart component would go here
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Performance Table */}
			<div className='bg-white rounded-lg shadow p-6'>
				<h3 className='text-lg font-semibold text-gray-900 mb-4'>
					Performance Overview
				</h3>
				<div className='overflow-x-auto'>
					<table className='min-w-full'>
						<thead>
							<tr className='border-b'>
								<th className='text-left py-3 px-4 font-medium text-gray-900'>
									Metric
								</th>
								<th className='text-left py-3 px-4 font-medium text-gray-900'>
									Current
								</th>
								<th className='text-left py-3 px-4 font-medium text-gray-900'>
									Previous
								</th>
								<th className='text-left py-3 px-4 font-medium text-gray-900'>
									Change
								</th>
							</tr>
						</thead>
						<tbody>
							{performanceData.map((row, index) => (
								<tr key={index} className='border-b'>
									<td className='py-3 px-4'>{row.metric}</td>
									<td className='py-3 px-4 font-medium'>{row.current}</td>
									<td className='py-3 px-4 text-gray-600'>{row.previous}</td>
									<td
										className={`py-3 px-4 font-medium ${
											row.isPositive ? 'text-green-600' : 'text-red-600'
										}`}
									>
										{row.change}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

const metrics = [
	{
		icon: '👥',
		value: '1,234',
		label: 'Total Users',
		change: '+12% from last month',
	},
	{
		icon: '💰',
		value: '$45.2K',
		label: 'Revenue',
		change: '+8% from last month',
	},
	{
		icon: '📊',
		value: '89%',
		label: 'Conversion Rate',
		change: '+2.1% from last month',
	},
	{
		icon: '⏱️',
		value: '2.4s',
		label: 'Avg Load Time',
		change: '-0.3s from last month',
	},
];

const performanceData = [
	{
		metric: 'Page Views',
		current: '125,430',
		previous: '118,920',
		change: '+5.5%',
		isPositive: true,
	},
	{
		metric: 'Unique Visitors',
		current: '8,945',
		previous: '8,120',
		change: '+10.2%',
		isPositive: true,
	},
	{
		metric: 'Bounce Rate',
		current: '32.1%',
		previous: '35.8%',
		change: '-3.7%',
		isPositive: true,
	},
	{
		metric: 'Session Duration',
		current: '4m 32s',
		previous: '4m 18s',
		change: '+3.2%',
		isPositive: true,
	},
];
