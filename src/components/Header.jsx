import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const location = useLocation();

	const navItems = [
		['/', 'ALL PRODUCTS'],
		['/stickers', 'STICKERS'],
		['/business-cards', 'BUSINESS CARDS'],
		['/invitations', 'INVITATIONS'],
		['/instagram', 'INSTAGRAM'],
		['/quote', 'QUOTE'],
		['/sample-request', 'SAMPLE REQUEST'],
		['/contact', 'CONTACT'],
	];

	return (
		<header className='bg-white shadow-md sticky top-0 z-50' role='banner'>
			{/* Top Promo Banner */}
			<div className='bg-orange-500 text-white text-sm text-center py-2'>
				One-Of-A-Kind Fast Eco Luxury Printing + Elevate Your Brand With Endless
				Possibilities + Free Fast Delivery*
			</div>

			{/* Logo and Utility Bar */}
			<div className='flex items-center justify-between px-6 py-3 border-b text-sm font-medium'>
				{/* Left: Burger Icon (visible on <lg) */}
				<div className='lg:hidden'>
					<button
						onClick={() => setMenuOpen(!menuOpen)}
						className='text-orange-600'
						aria-label={menuOpen ? 'Close menu' : 'Open menu'}
					>
						{menuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Center: Logo */}
				<Link
					to='/'
					className='text-2xl font-bold text-orange-600 no-underline text-center lg:text-left flex-1'
				>
					UNIVERSITY PRINTING
				</Link>

				{/* Right: Utility Links (visible on lg) */}
				<div className='hidden lg:flex items-center space-x-6'>
					<Link
						to='/stock-finish'
						className='hover:text-orange-500 no-underline'
					>
						STOCK & FINISH
					</Link>
					<Link to='/help' className='hover:text-orange-500 no-underline'>
						HELP
					</Link>
					<div className='flex items-center space-x-1'>
						<img
							src='https://flagcdn.com/ae.svg'
							alt='UAE Flag'
							className='w-6 h-4 object-fill'
						/>
						<span>UAE</span>
					</div>
					<button className='hover:text-orange-500' aria-label='Search'>
						<Search size={18} />
					</button>
				</div>
			</div>

			{/* Mobile + Tablet Nav */}
			<div
				className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
					menuOpen ? 'max-h-screen' : 'max-h-0'
				}`}
			>
				<ul className='flex flex-col px-6 py-4 space-y-4 text-sm font-medium'>
					{navItems.map(([to, label]) => (
						<li key={to}>
							<Link
								to={to}
								className={`block no-underline hover:text-orange-500 ${
									location.pathname === to
										? 'text-orange-600 font-semibold'
										: ''
								}`}
								onClick={() => setMenuOpen(false)}
							>
								{label}
							</Link>
						</li>
					))}
					{/* Add utility links into mobile menu too */}
					<li>
						<Link
							to='/stock-finish'
							className='block no-underline hover:text-orange-500'
						>
							STOCK & FINISH
						</Link>
					</li>
					<li>
						<Link
							to='/help'
							className='block no-underline hover:text-orange-500'
						>
							HELP
						</Link>
					</li>
				</ul>
			</div>

			{/* Desktop Nav */}
			<nav
				role='navigation'
				aria-label='Main Navigation'
				className='hidden lg:flex items-center justify-center px-6 py-4'
			>
				<ul className='flex flex-wrap justify-center space-x-6 text-sm font-medium'>
					{navItems.map(([to, label]) => (
						<li key={to}>
							<Link
								to={to}
								className={`no-underline hover:text-orange-500 ${
									location.pathname === to
										? 'text-orange-600 font-semibold'
										: ''
								}`}
							>
								{label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
