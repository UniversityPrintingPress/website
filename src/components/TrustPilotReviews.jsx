import { Star } from 'lucide-react';

const reviews = [
	{
		initials: 'CT',
		name: 'Cam Tims',
		time: 'A day ago',
		rating: 5,
		text: 'Great results! Fast Printing came recommended to me by our branding/marketing firm that is always creating fun and stylish materials — and we’re glad for the recommendation. Our project had unique …',
	},
	{
		initials: 'SC',
		name: 'Scott',
		time: 'A day ago',
		rating: 5,
		text: 'From the start, the staff assisted us in achieving the overall design that we needed for our specific application. At each stage of the process they were happy to help even with changes made after c…',
	},
	{
		initials: 'RO',
		name: 'Rob',
		time: '2 hours ago',
		rating: 5,
		text: 'I used Fast Printing for the first time and I am now an ongoing client going forward. Quality is great, stickers were nicely presented and artwork was exactly how it was designed. Fast delivery and gr…',
	},
];

export default function TrustPilotReviews() {
	return (
		<div className='bg-gray-100 p-8'>
			<div className='text-center mb-6'>
				<h1 className='text-2xl font-bold text-green-600 flex justify-center items-center gap-2'>
					<Star className='w-6 h-6 fill-green-600 text-green-600' />
					Trustpilot
				</h1>
				<p className='text-lg font-semibold mt-2'>Excellent</p>
				<div className='flex justify-center mt-1 text-green-600'>
					{'★★★★★'.split('').map((s, i) => (
						<Star key={i} className='w-5 h-5 fill-green-600' />
					))}
				</div>
				<p className='text-sm mt-1'>
					Based on{' '}
					<a href='#' className='text-blue-600 underline'>
						901 reviews
					</a>
				</p>
				<p className='text-4xl font-bold mt-2'>4.9</p>
			</div>

			<div className='grid md:grid-cols-3 gap-6'>
				{reviews.map((review, idx) => (
					<div key={idx} className='bg-white p-4 rounded shadow'>
						<div className='flex items-center gap-3 mb-2'>
							<div className='bg-orange-100 text-orange-800 rounded-full w-10 h-10 flex items-center justify-center font-bold'>
								{review.initials}
							</div>
							<div>
								<p className='font-semibold'>{review.name}</p>
								<p className='text-sm text-gray-500'>{review.time}</p>
							</div>
						</div>
						<div className='flex mb-2 text-green-600'>
							{'★★★★★'
								.slice(0, review.rating)
								.split('')
								.map((_, i) => (
									<Star key={i} className='w-4 h-4 fill-green-600' />
								))}
						</div>
						<p className='text-sm text-gray-700'>{review.text}</p>
						<a
							href='#'
							className='text-blue-600 text-sm font-medium mt-1 inline-block'
						>
							See more
						</a>
					</div>
				))}
			</div>
		</div>
	);
}
