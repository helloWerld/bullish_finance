import React, { useState } from 'react';
import { InlineWidget } from 'react-calendly';
import { BsCameraVideo } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';
import { FaTelegramPlane } from 'react-icons/fa';
import { images } from '../assets';
import EmailForm from './EmailForm';
import { motion } from 'framer-motion';

const Contact = () => {
	const [contact, setContact] = useState('tg');
	return (
		<div
			className="flex flex-col bg-gradient-to-t from-purple-950 via-black to-black justify-center items-center text-white py-24"
			id="contact"
		>
			<motion.h2
				initial={{ opacity: 0, y: -100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="text-4xl lg:text-6xl xl:text-8xl text-white text-shadow-custom"
			>
				Work with Us!
			</motion.h2>
			<p className="animate-bounce text-6xl mt-10 mb-4">👇</p>
			<p className="text-lg mb-4">3 Ways To Get In Touch</p>
			<div className="flex flex-row w-fit text-4xl gap-10 items-center justify-center z-20">
				<div
					onClick={() => setContact('zoom')}
					className={`${
						contact == 'zoom' &&
						'bg-gradient-to-br from-purple-800 via-purple-600 to-blue-800 text-black border-blue-900'
					} flex border-2 rounded-full hover:bg-white hover:text-black p-3 cursor-pointer transition duration-500 ease-in-out`}
				>
					<BsCameraVideo />
				</div>
				<div
					onClick={() => setContact('tg')}
					className={`${
						contact == 'tg' &&
						'bg-gradient-to-br from-purple-800 via-purple-600 to-blue-800 text-black border-blue-900 '
					} flex border-2 rounded-full hover:bg-white hover:text-black p-3 cursor-pointer transition duration-500 ease-in-out`}
				>
					<FaTelegramPlane />
				</div>
				<div
					onClick={() => setContact('email')}
					className={`${
						contact == 'email' &&
						'bg-gradient-to-br from-purple-800 via-purple-600 to-blue-800 text-black border-blue-900 '
					} flex border-2 rounded-full hover:bg-white hover:text-black p-3 cursor-pointer transition duration-500 ease-in-out`}
				>
					<GoMail />
				</div>
			</div>
			<div className="flex flex-col w-full min-h-[700px] items-center justify-center relative my-10">
				{contact == 'tg' && (
					<div className="absolute top-0 flex flex-row w-full md:w-2/3 xl:w-1/2 2xl:w-1/3 h-full z-10 rounded-full overflow-clip  border-2 border-white/10">
						<img
							src={images.pattern}
							className="invert opacity-25 w-1/2 object-cover"
						/>
						<img
							src={images.pattern}
							className="z-10 invert opacity-25 w-1/2 object-cover"
						/>
					</div>
				)}
				{contact == 'zoom' ? (
					<div className="w-full">
						<InlineWidget
							url="https://calendly.com/bullish-media/intro"
							className="h-full"
							styles={{
								height: '700px',
							}}
						/>
					</div>
				) : contact == 'tg' ? (
					<div className="flex flex-col items-center bg-stone-950 w-96 h-fit rounded-3xl p-8 z-20">
						<img
							src={images.logo}
							className="rounded-full w-24 h-24 aspect-square overflow-clip object-contain bg-black"
						/>
						<h3 className="mt-3 text-2xl font-semibold">
							Russell@Bullish.Finance
						</h3>
						<p className="text-gray-600">@Russell_is_Bullish</p>
						<p className="flex flex-wrap text-center mt-1">
							Owner at Bullish Media Group 🚀 Exclusive PR manager of Crypto
							Love
						</p>
						<a
							href="tg://resolve?domain=Russell_is_Bullish"
							className="bg-blue-500 pt-3 pb-2 px-4 rounded-full mt-4 mb-2 hover:scale-105 transition duration-300 ease-in-out"
						>
							SEND MESSAGE
						</a>
					</div>
				) : (
					<EmailForm />
				)}
			</div>
		</div>
	);
};

export default Contact;
