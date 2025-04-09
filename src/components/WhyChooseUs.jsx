export default function WhyChooseUs() {
	return (
		<section className='py-16 px-6 md:px-12 bg-white'>
			<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
				<div className='flex justify-center'>
					<img
						src='/images/whychooseus.png'
						alt='Organic Oils'
						className='max-w-[300px] md:max-w-[400px] w-full'
					/>
				</div>
				<div>
					<h2 className='text-xl md:text-2xl font-semibold mb-4'>
						Why Choose UNIVERSITY PRINTING for Your Printing Project?
					</h2>
					<p className='text-gray-700 mb-4'>
						Are you searching for high-quality printing products at affordable
						prices? Look no further than Fast Printing. Our name says it all,
						and we take great pride in delivering exceptional service to our
						valued customers. Since our founding in 2005, we have been providing
						our clients with premium products at outstanding value.
					</p>
					<p className='text-gray-700'>
						We know how important it is to start distributing your perfectly
						crafted brand materials as soon as possible. That’s why, when you
						order from us, we <span className='font-semibold'>guarantee</span>{' '}
						delivery in days, not weeks. This commitment to customer
						satisfaction is why we have so many happy customers across USA.
					</p>
				</div>
			</div>
		</section>
	);
}
