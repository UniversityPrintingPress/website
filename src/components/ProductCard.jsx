import React from 'react';

const ProductCard = ({ img, title, description, linkText }) => {
	return (
		<div className='text-center'>
			<img src={img} alt={title} className='mx-auto w-60 h-60 object-contain' />
			<h2 className='text-xl font-semibold mt-4'>{title}</h2>
			<p className='text-sm mt-2 text-gray-700'>{description}</p>
			<a href='#' className='text-blue-600 mt-2 inline-block'>
				{linkText}
			</a>
		</div>
	);
};

export default ProductCard;
