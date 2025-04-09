'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function TrustedBrands() {
	const brandLogos = [
		'/logos/1.png',
		'/logos/2.png',
		'/logos/3.png',
		'/logos/4.png',
		// Add more as needed
	];

	return (
		<div className='py-16 px-4 bg-white text-center'>
			<h2 className='text-xl md:text-2xl font-medium mb-10'>
				Trusted By Leading Brands Worldwide
			</h2>

			{/* Mobile Carousel */}
			<div className='block md:hidden'>
				<Swiper
					slidesPerView={2}
					spaceBetween={20}
					className='max-w-xs mx-auto'
					loop
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
				>
					{brandLogos.map((logo, idx) => (
						<SwiperSlide key={idx}>
							<div className='flex items-center justify-center'>
								<img
									src={logo}
									alt={`Brand ${idx + 1}`}
									className='max-h-12 object-contain mx-auto'
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			{/* Desktop Grid */}
			<div className='hidden md:grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center max-w-6xl mx-auto'>
				{brandLogos.map((logo, idx) => (
					<div key={idx} className='flex items-center justify-center'>
						<img
							src={logo}
							alt={`Brand ${idx + 1}`}
							className='max-h-12 object-contain max-w-[100px]'
						/>
					</div>
				))}
			</div>
		</div>
	);
}
