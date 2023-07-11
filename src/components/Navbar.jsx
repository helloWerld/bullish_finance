import React, { useState } from 'react';
import { images } from '../assets';
import { PopupButton } from 'react-calendly';
import { GoMail } from 'react-icons/go';
import { FaTelegramPlane } from 'react-icons/fa';
import { BsCameraVideo } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
	const [collapsed, setCollapsed] = useState(true);
	return (
		<motion.div
			initial={{ opacity: 0, y: -50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="flex flex-row absolute top-0 text-white px-6 md:px-12 2xl:px-36 pt-10 justify-between w-full items-center z-20"
		>
			<Link to="/">
				<img src={images.logo} className="h-16 lg:h-24 2xl:h-32" />
			</Link>
			<div className="hidden md:flex flex-row text-4xl gap-10 xl:gap-16 items-center">
				<a href="mailto:russell@bullish.finance">
					<GoMail className="hover:scale-110 transition duration-300 ease-in-out" />
				</a>
				<a href="tg://resolve?domain=Russell_is_Bullish">
					<FaTelegramPlane className="hover:scale-110 transition duration-300 ease-in-out" />
				</a>
				<PopupButton
					url="https://calendly.com/bullish-media/intro"
					text={
						<BsCameraVideo className="hover:scale-110 transition duration-300 ease-in-out" />
					}
					rootElement={document.getElementById('root')}
				/>
			</div>
			{collapsed && (
				<GiHamburgerMenu
					className="text-3xl cursor-pointer flex md:hidden"
					onClick={() => setCollapsed(false)}
				/>
			)}
			{!collapsed && (
				<AiOutlineClose
					className="text-3xl cursor-pointer md:hidden"
					onClick={() => setCollapsed(true)}
				/>
			)}
			{!collapsed && (
				<>
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className={`${
							collapsed && 'opacity-0'
						} md:hidden fixed bottom-0 left-0 right-0 h-20 flex flex-row justify-center px-3 gap-10 xl:gap-16 items-center bg-gradient-to-br from-purple-800 via-purple-600 to-blue-800 transition-opacity duration-700 ease-in-out z-30`}
					>
						<p className="text-md">3 Ways To Get In Touch</p>
						<a href="mailto:russell@bullish.finance">
							<GoMail className="hover:text-black text-2xl" />
						</a>
						<a href="tg://resolve?domain=Russell_is_Bullish">
							<FaTelegramPlane className="hover:text-black text-2xl" />
						</a>
						<PopupButton
							url="https://calendly.com/bullish-media/intro"
							text={<BsCameraVideo className="hover:text-black text-2xl" />}
							rootElement={document.getElementById('root')}
						/>
					</motion.div>
				</>
			)}
		</motion.div>
	);
};

export default Navbar;
