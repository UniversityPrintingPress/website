export default function ProductGrid() {
	const products = [
		{ image: '/images/lippalette.png', alt: 'Pink tags', title: 'LIP PALETTE' },
		{ image: '/images/Chocovault.png', alt: 'Gift box', title: 'ChocoVault' },
		{
			image: '/images/darkchoclate.png',
			alt: 'Dark Chocolate',
			title: 'Cocoa Obscura',
		},
		{ image: '/images/bag.png', alt: 'Luxury Bag', title: 'Cavoya' },
	];

	return (
		<div className='py-12 px-4 text-center bg-white'>
			<h2 className='text-2xl md:text-3xl font-semibold mb-10'>
				One-Of-A-Kind Affordable Luxury Printing
			</h2>

			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto'>
				{products.map((product, idx) => (
					<div
						key={idx}
						className='relative group overflow-hidden rounded-lg shadow-md bg-white'
					>
						<div className='w-full aspect-[4/5]'>
							<img
								src={product.image}
								alt={product.alt}
								className='w-full h-full object-cover object-center'
							/>
						</div>

						<div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4'>
							<h3 className='text-base font-semibold mb-2'>{product.title}</h3>
							<button className='bg-yellow-400 text-black text-xs px-3 py-1 rounded hover:bg-yellow-500'>
								ENQUIRE NOW
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
