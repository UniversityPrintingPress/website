import React from 'react';
import Slider from 'react-slick';
import ProductCard from '../components/ProductCard';
import IntroSection from './IntroSection';
import TrustPilotReviews from '../components/TrustPilotReviews';
import ProductGrid from '../components/ProductGrid';
import SamplePacksSection from '../components/SamplePackSection';
import TrustedBrands from '../components/TrustedBrands';
import InstagramGallery from '../components/InstagramGallery';
import WhyChooseUs from '../components/WhyChooseUs';
import FeaturesSection from '../components/featureSection';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
	const carouselImages = [
		'/images/logo.jpg',
		'/images/logo.jpg',
		'/images/logo.jpg',
	];

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
	};

	return (
		<div className='font-sans bg-white'>
			{/* Carousel on top */}
			<div className='mb-10'>
				<Slider {...settings}>
					{carouselImages.map((img, idx) => (
						<div key={idx}>
							<img
								src={img}
								alt={`Slide ${idx + 1}`}
								className='w-full h-64 object-cover rounded-lg'
							/>
						</div>
					))}
				</Slider>
			</div>

			{/* Product Cards */}
			<main className='grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-12 bg-gray-50'>
				<ProductCard
					img='/images/sticker.jpeg'
					title='Sarah Al Saheq Olympe'
					description='High-quality custom labels designed to elevate your brand identity and product presentation.'
					linkText='View all'
				/>

				<ProductCard
					img='/images/garami.png'
					title='Garami Signature Collection'
					description='Premium labels from our Garami line, crafted for elegant and exclusive branding.'
					linkText='View all'
				/>

				<ProductCard
					img='/images/scented candle.png'
					title='Candle Label Series'
					description='Professionally designed labels tailored for scented candle packaging and branding.'
					linkText='View all'
				/>
			</main>

			{/* Other Sections */}
			<FeaturesSection />
			<IntroSection />
			<TrustPilotReviews />
			<ProductGrid />
			<SamplePacksSection />
			<TrustedBrands />
			<InstagramGallery />
			<WhyChooseUs />
		</div>
	);
};

export default Home;
