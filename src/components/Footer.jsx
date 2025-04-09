import { useState } from 'react';

const FooterSection = ({ title, items }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='border-b md:border-0 pb-4 md:pb-0'>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className='w-full text-left md:cursor-default md:pointer-events-none md:mb-3 text-gray-800'
			>
				<p className='md:mb-2'>
					<span className='md:hidden inline-block w-6'>
						{isOpen ? '-' : '+'}
					</span>
					<span className='ml-1'>{title}</span>
				</p>
			</button>

			<ul
				className={`space-y-2 mt-2 md:mt-0 ${
					isOpen ? 'block' : 'hidden'
				} md:block text-gray-600`}
			>
				{items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default function Footer() {
	return (
		<footer className='bg-gray-100 text-sm pt-10'>
			<div className='max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 text-gray-700'>
				<FooterSection
					title='POPULAR PRODUCTS'
					items={[
						'Foil (finished) Stickers',
						'Foil Business Cards',
						'Wedding Invitations',
						'Hang Tags',
						'Presentation Folders',
						'Envelopes',
					]}
				/>
				<FooterSection
					title='INFORMATION'
					items={[
						'About Fast Printing',
						'Terms & Conditions',
						'Website Terms of Use',
						'Privacy Policy',
						'Contact Us',
						'FAQ',
					]}
				/>
				<FooterSection
					title='HELPFUL LINKS'
					items={[
						'Paper Stock Guide',
						'Sticker Stocks Guide',
						'Foil Guide',
						'Extra Finish Guide',
						'Color Guide',
					]}
				/>
				<FooterSection
					title='WHAT’S HOT'
					items={[
						'Luxe Business Cards',
						'Black Business Cards',
						'Wax Seal Stickers',
						'Scodix (Raised) Stickers',
						'Ribbons',
						'Woven Labels',
					]}
				/>
			</div>

			<div className='border-t border-gray-300 py-6 text-center text-gray-500 text-xs px-4'>
				<div className='flex justify-center items-center space-x-4 mb-2'>
					<a
						href='https://www.instagram.com/university.printingpress/'
						target='_blank'
						rel='noopener noreferrer'
						className='text-gray-700 hover:text-pink-500'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='currentColor'
							viewBox='0 0 24 24'
						>
							<path d='M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.75-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z' />
						</svg>
					</a>
					<a
						href='https://www.facebook.com/university.printingpress/'
						target='_blank'
						rel='noopener noreferrer'
						className='text-gray-700 hover:text-blue-600'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='currentColor'
							viewBox='0 0 24 24'
						>
							<path d='M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.87c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34V22C18.34 21.13 22 17 22 12z' />
						</svg>
					</a>
				</div>
				<p>
					© University Printing Press and Packing LLC, Sharjah, UAE. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
}
