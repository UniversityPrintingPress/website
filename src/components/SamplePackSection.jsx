export default function SamplePacksSection() {
	return (
		<div className='bg-pink-100 py-16 px-6 md:px-12'>
			<div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10'>
				<div className='text-center md:text-left max-w-md'>
					<h2 className='text-3xl font-light text-black mb-2'>
						Want a closer look?
					</h2>
					<p className='text-lg text-gray-700 mb-6'>
						Touch and feel papers and finishes
					</p>
					<button className='border border-black px-6 py-2 text-sm font-medium hover:bg-black hover:text-white transition'>
						VIEW SAMPLE PACKS
					</button>
				</div>
				<div className='w-full md:w-1/2'>
					<img
						src='/images/wantacloserlook.png'
						alt='Sample Pack'
						className='w-full object-contain'
					/>
				</div>
			</div>
		</div>
	);
}
