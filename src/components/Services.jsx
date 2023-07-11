import React from 'react';
import { images } from '../assets';
import { motion } from 'framer-motion';

const Services = () => {
	return (
		<div className="flex flex-col h-full bg-black text-white py-24 items-cente">
			<div className="flex flex-row w-full xl:w-4/5 justify-center my-16 mx-auto">
				<motion.img
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					src={images.influencermarketing}
					className="w-2/3 lg:w-1/2 -mr-12 lg:mr-0 aspect-video md:aspect-auto object-cover"
				/>
				<motion.div
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					className="flex flex-col justify-center items-center w-full lg:w-1/2 -ml-12 lg:ml-0 pt-24 md:pt-6"
				>
					<h3 className="w-full text-2xl text-center text-base md:text-xl lg:text-4xl font-semibold">
						Influencer Marketing
					</h3>
					<p className="w-full lg:w-4/5 xl:w-3/5 p-3 rounded-xl bg-black text-center text-sm md:text-lg lg:text-xl xl:text-2xl">
						Leverage the trust and authority of the top crypto influencers to
						bring your brand to the masses.
					</p>
				</motion.div>
			</div>
			<div className="flex flex-row w-full xl:w-4/5 justify-center my-16 overflow-x-clip mx-auto">
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					className="flex flex-col justify-center items-center w-full lg:w-1/2 -mr-12 lg:ml-0  pt-24 md:pt-6 z-20"
				>
					<h3 className="w-full text-2xl text-center text-base md:text-xl lg:text-4xl font-semibold">
						Creative Ad Placement
					</h3>
					<p className="w-full lg:w-4/5 xl:w-3/5 p-3 rounded-xl bg-black text-center text-sm md:text-lg lg:text-xl xl:text-2xl">
						Find new investor audiences with outside-the-box marketing
						opportunities.
					</p>
				</motion.div>
				<motion.img
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					src={images.creativemarketing}
					className="w-2/3 lg:w-1/2 -mr-20 lg:mr-0 aspect-video md:aspect-auto object-cover"
				/>
			</div>

			<div className="flex flex-row w-full xl:w-4/5 justify-center my-16 mx-auto">
				<motion.img
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					src={images.webdesign}
					className="w-2/3 lg:w-1/2 -mr-12 lg:mr-0  aspect-video md:aspect-auto object-cover"
				/>
				<motion.div
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					className="flex flex-col justify-center items-center w-full lg:w-1/2 -ml-12 lg:ml-0 pt-24 md:pt-6"
				>
					<h3 className="w-full text-2xl text-center text-base md:text-xl lg:text-4xl font-semibold">
						Branding & Web Design
					</h3>
					<p className="w-full lg:w-4/5 xl:w-3/5 p-3 rounded-xl bg-black text-center text-sm md:text-lg lg:text-xl xl:text-2xl">
						Show off your innovative project with a stunning website and
						branding to match.
					</p>
				</motion.div>
			</div>
		</div>
	);
};

export default Services;
