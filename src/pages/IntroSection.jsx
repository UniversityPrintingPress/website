import React from 'react';

const IntroSection = () => {
	return (
		<section className='bg-gray-50 px-6 md:px-12 py-16'>
			<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
				{/* Left Content */}
				<div className='text-gray-800 space-y-6'>
					<h2 className='text-3xl md:text-4xl font-bold leading-tight'>
						Custom Luxury Printing for Modern Brands
					</h2>

					<p className='text-base leading-relaxed'>
						At Fast Printing, we specialize in premium, custom-printed solutions
						tailored to elevate your brand. From{' '}
						<span className='font-medium text-gray-900'>luxury packaging</span>{' '}
						to
						<b> high-end business cards</b>, <b>labels</b>, and{' '}
						<b>invitations</b>, our craftsmanship speaks sophistication.
					</p>

					<p className='text-base leading-relaxed'>
						Choose from over{' '}
						<span className='text-sky-600 font-medium'>500+ paper stocks</span>{' '}
						and
						<span className='text-sky-600 font-medium'>
							{' '}
							100+ sticker materials
						</span>
						, with finishing options including foil stamping, embossing, spot
						UV, letterpress, and more.
					</p>

					<p className='text-base leading-relaxed'>
						We believe every print should reflect your brand’s identity — bold,
						refined, and unforgettable. Whether you're a startup or an
						established brand, our team delivers with unmatched quality, fast
						turnaround, and creative finesse.
					</p>

					<p className='text-base leading-relaxed'>
						Serving clients across the USA — including New York, Los Angeles,
						California, Texas, and Florida — we are your trusted partner in
						<strong> professional-grade printing excellence</strong>.
					</p>
				</div>

				{/* Right Image */}
				<div className='flex justify-center md:justify-end'>
					<img
						src='/images/introsection.png' // Make sure this path matches your actual file
						alt='Premium Custom Packaging Box by Fouz Beauty'
						className='max-w-md w-full h-auto rounded-xl shadow-lg border border-gray-200'
					/>
				</div>
			</div>
		</section>
	);
};

export default IntroSection;
