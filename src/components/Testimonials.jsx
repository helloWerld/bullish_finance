import React from 'react';
import { images } from '../assets';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Testimonials = () => {
	return (
		<div className="flex flex-col justify-center items-center bg-white w-full py-24">
			<motion.h2
				initial={{ opacity: 0, y: -100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="text-4xl font-semibold text-black text-center"
			>
				What people are saying...
			</motion.h2>
			<div className="flex flex-row w-full lg:w-2/3 items-center relative items-center justify-center my-12 md:my-32 overflow-x-clip">
				<motion.img
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					src={images.randall}
					className="w-2/3 md:w-1/2 xl:w-1/3 rounded-3xl paused"
				/>
				<motion.div
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					className="bg-white -ml-10 p-6 shadow-md w-2/3 md:w-1/2 2xl:w-1/3 rounded-xl border"
				>
					<p className="text-xs md:text-md lg:text-xl ">
						“I’ve worked with Russell from Bullish Media for over 3 years, and
						he makes my job easy. He’s a natural born salesman. He’s creative,
						very organized and extremely reliable. <br /> <br />
						I’ve worked with other “marketers” (if you can call them that) and
						they are hopeless amateurs compared to what you will find with
						Bullish Media. <br /> <br /> The professionalism, the attention to
						detail, and the high quality of service all make Bullish Media the
						marketing group for me!”
					</p>
					<p className="font-bold text-lg mt-4">
						— Randall from Crypto Love{' '}
						<Link to="/crypto-love" className="cursor-default">
							🦄
						</Link>
					</p>
				</motion.div>
			</div>
		</div>
	);
};

export default Testimonials;
