import { Clock, Truck, BadgeCheck } from 'lucide-react'; // Optional: Replace with your own icons or images

export default function FeaturesSection() {
	return (
		<section className=' py-10'>
			<div className='max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
				<div className='flex flex-col items-center'>
					<Clock size={40} className='text-gray-600 mb-2' />
					<p className='text-sm md:text-base'>
						<span className='font-semibold'>FAST</span> Turnaround Time
					</p>
				</div>
				<div className='flex flex-col items-center'>
					<Truck size={40} className='text-gray-600 mb-2' />
					<p className='text-sm md:text-base'>
						<span className='font-semibold'>FAST</span> Express Delivery
					</p>
				</div>
				<div className='flex flex-col items-center'>
					<BadgeCheck size={40} className='text-gray-600 mb-2' />
					<p className='text-sm md:text-base'>
						<span className='font-semibold'>FAST</span> High-End Service
					</p>
				</div>
			</div>
		</section>
	);
}
