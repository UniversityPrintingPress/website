import React from 'react';

const WhatsHotCard = ({
	image,
	badge,
	badgeText,
	title,
	description,
	linkText,
	linkColor = 'text-blue-500',
}) => {
	return (
		<div className='bg-white shadow-sm'>
			<div className='relative p-6 flex items-center justify-center bg-gray-50'>
				<img src={image} alt={title} className='h-24 object-contain' />
				{badge && (
					<div className='absolute top-2 right-2 bg-black text-white text-xs font-bold px-2 py-1 rounded-full'>
						{badgeText}
					</div>
				)}
			</div>
			<div className='px-4 py-4'>
				<h3 className='text-sm font-bold uppercase mb-2'>{title}</h3>
				<p className='text-xs text-gray-600 leading-relaxed'>{description}</p>
				<a href='#' className={`block mt-3 text-sm font-medium ${linkColor}`}>
					{linkText}
				</a>
			</div>
		</div>
	);
};

export default WhatsHotCard;
