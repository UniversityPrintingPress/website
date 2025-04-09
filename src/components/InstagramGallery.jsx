export default function InstagramGallery() {
	const galleryItems = [
		{
			thumb: '/gallery/insta1.png',
			link: 'https://www.instagram.com/reel/DF0iGX2BbJp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
		},
		{
			thumb: '/gallery/insta2.png',
			link: 'https://www.instagram.com/reel/DGLVdr3BOeX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
		},
		{
			thumb: '/gallery/insta3.png',
			link: 'https://www.instagram.com/reel/C35a-AYBH25/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
		},
		{
			thumb: '/gallery/insta4.png',
			link: 'https://www.instagram.com/reel/CwXcz1JNBS9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
		},
		{
			thumb: '/gallery/insta5.png',
			link: 'https://www.instagram.com/reel/Cxu3Ne2BhrI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
		},
	];

	return (
		<section className='bg-[#f3f3f3] py-16 px-4'>
			<h2 className='text-2xl font-semibold text-center mb-12'>
				INSTAGRAM GALLERY
			</h2>
			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto'>
				{galleryItems.map((item, idx) => (
					<a
						key={idx}
						href={item.link}
						target='_blank'
						rel='noopener noreferrer'
						className='relative group overflow-hidden rounded shadow-sm'
					>
						<img
							src={item.thumb}
							alt={item.alt}
							className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
						/>
						<div className='absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
							<div className='w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 16 16'
									fill='currentColor'
									className='w-5 h-5 text-black ml-1'
								>
									<path d='M6.271 11.146V4.854L11.518 8l-5.247 3.146z' />
								</svg>
							</div>
						</div>
					</a>
				))}
			</div>
		</section>
	);
}
