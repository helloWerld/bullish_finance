import React from 'react';
import Navbar from './Navbar';
import { images } from '../assets';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
	return (
		<div className="relative overflow-clip">
			<motion.img
				initial={{ opacity: 0, y: 100, x: 100 }}
				whileInView={{ opacity: 1, y: 0, x: 0 }}
				transition={{ duration: 1 }}
				src={images.astro}
				className="absolute bottom-0 right-0 opacity-100 z-10 w-11/12 md:w-4/5 lg:w-2/3 xl:w-1/3 opacity-80"
			/>
			<Navbar />
			<div className="flex flex-col h-screen w-full bg-gradient-to-tl from-purple-950 via-black to-black items-start md:items-center justify-center text-white gap-8 z-20 ps-6">
				<motion.h1
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.25 }}
					className="w-4/5 md:w-11/12 text-5xl md:text-4xl xl:text-5xl 2xl:text-6xl font-semibold md:font-normal mt-6 text-start md:text-center"
				>
					<span className="hidden md:inline">🚀</span> We Land Crypto Brands on
					The Moon <span className="hidden md:inline">🌙</span>
				</motion.h1>
				<motion.h2
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.25, duration: 0.25 }}
					className="w-1/2 md:w-full text-lg md:text-xl xl:text-2xl text-start md:text-center"
				>
					Promote your brand with the top influencers in cryptocurrency.
				</motion.h2>
				<motion.p
					className="z-30 cursor-pointer text-white md:text-black bg-gradient-to-br from-purple-800 via-purple-600 to-blue-800 px-5 pt-5 pb-3 rounded-full text-md xl:text-xl md:mt-3 hover:scale-105 hover:shadow-lg hover:text-white hover:shadow-white/10"
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 0.25 }}
				>
					<Link to="contact" smooth={true} duration={500}>
						GET STARTED
					</Link>
				</motion.p>
			</div>
		</div>
	);
};

export default Hero;
