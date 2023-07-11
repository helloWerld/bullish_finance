import React from 'react';
import { images } from '../assets';
import { motion } from 'framer-motion';

const brands = [
	{
		name: 'Cointelegraph',
		logo: images.cointelegraph,
	},
	{
		name: 'Tron',
		logo: images.tron,
	},
	{
		name: 'Binance',
		logo: images.binance,
	},
	{
		name: 'Yield App',
		logo: images.yieldapp,
	},
	{
		name: 'Floki Inu',
		logo: images.floki,
	},
	{
		name: 'PrimeXBT',
		logo: images.primexbt,
	},
	{
		name: 'AscendEx',
		logo: images.ascendex,
	},
	{
		name: 'GMT Token',
		logo: images.gmt,
	},
	{
		name: 'CoinStats',
		logo: images.coinstats,
	},
];

const Brands = () => {
	const list = {
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2, //apply stagger on the parent tag
			},
		},
		hidden: { opacity: 0 },
	};
	const item = {
		visible: { opacity: 1, y: 0 },
		hidden: { opacity: 0, y: -100 },
	};
	return (
		<div className="flex flex-col justify-center items-center bg-white w-full py-24">
			<motion.h2
				initial={{ opacity: 0, y: -100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="w-11/12 text-center text-4xl font-semibold text-black"
			>
				Trusted by the #1 Brands in Crypto!
			</motion.h2>
			{images && (
				<motion.div
					initial="hidden"
					whileInView="visible"
					variants={list}
					className="grid grid-cols-1 lg:grid-rows-3 lg:grid-cols-3 my-12 gap-20 bg-white rounded-2xl my-24"
				>
					{brands.map((brand) => (
						<motion.img
							variants={item}
							src={brand.logo}
							key={brand.name}
							alt={brand.name}
							className="w-96 px-4"
						/>
					))}
				</motion.div>
			)}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 1, duration: 0.5 }}
				className="text-white bg-black px-5 pt-5 pb-3 rounded-full text-xl mt-3 transition duration-300 ease-in-out"
			>
				And Many More...
			</motion.div>
		</div>
	);
};

export default Brands;
