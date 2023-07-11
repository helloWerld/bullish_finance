import React, { useState } from 'react';
import { CLMediaKit, MediaKit } from '../assets';
import {
	AiFillCaretLeft,
	AiFillCaretRight,
	AiOutlineDownload,
} from 'react-icons/ai';

const CryptoLove = () => {
	const [page, setPage] = useState(0);

	const handleDownload = () => {
		window.open(CLMediaKit, '_blank');
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen w-full bg-black px-12 md:px-24 lg:px-60 xl:px-80 pt-24 lg:pt-48 z-10">
			<img
				src={MediaKit[page]}
				className="xl:w-2/3 2xl:w-1/3 rounded-3xl shadow-xl shadow-white/10"
			/>
			<div className=" flex flex-row mt-8 text-white text-2xl gap-12 items-center">
				<div
					className="border border-white rounded-full p-3 hover:bg-white hover:text-black cursor-pointer"
					onClick={() => setPage(page == 0 ? 13 : page - 1)}
				>
					<AiFillCaretLeft />
				</div>
				<div
					className="border border-white rounded-full p-3 hover:bg-white hover:text-black cursor-pointer"
					onClick={handleDownload}
				>
					<AiOutlineDownload />
				</div>

				<div
					className="border border-white rounded-full p-3 hover:bg-white hover:text-black cursor-pointer"
					onClick={() => setPage(page == 13 ? 0 : page + 1)}
				>
					<AiFillCaretRight />
				</div>
			</div>
		</div>
	);
};

export default CryptoLove;
