import React, { useState } from 'react';
import Firestore from '../handlers/firestore';

const EmailForm = () => {
	const { submitContactForm } = Firestore;
	const [submitResponse, setSubmitResponse] = useState('');
	const [inputs, setInputs] = useState({
		name: '',
		email: '',
		telegram: '',
		subject: '',
		message: '',
		inquiryType: '',
		timestamp: null,
	});

	const handleChange = (e) => {
		switch (e.target.id) {
			case 'company':
				setInputs({ ...inputs, inquiryType: 'company' });
				break;
			case 'creator':
				setInputs({ ...inputs, inquiryType: 'creator' });
				break;
			case 'name':
				setInputs({ ...inputs, name: e.target.value });
				break;
			case 'email':
				setInputs({ ...inputs, email: e.target.value });
				break;
			case 'telegram':
				setInputs({ ...inputs, telegram: e.target.value });
				break;
			case 'subject':
				setInputs({ ...inputs, subject: e.target.value });
				break;
			case 'message':
				setInputs({ ...inputs, message: e.target.value });
				break;
			default:
				setInputs(inputs);
				break;
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		submitContactForm({ ...inputs, timestamp: new Date() }).then((response) => {
			if (response.isError) {
				setSubmitResponse(response.error.message);
			} else {
				setSubmitResponse('Message Sent!');
				setInputs({
					name: '',
					email: '',
					telegram: '',
					subject: '',
					message: '',
					inquiryType: '',
					timestamp: null,
				});
			}
		});
	};

	return (
		<div className="flex flex-col items-center justify-center w-full">
			{submitResponse == 'Message Sent!' ? (
				<h3 className="text-3xl py-6">{submitResponse}</h3>
			) : (
				<h3 className="text-3xl py-6 text-rose-500">{submitResponse}</h3>
			)}
			{submitResponse != 'Message Sent!' && (
				<form
					onSubmit={handleSubmit}
					className="flex flex-col text-black w-4/5 2xl:w-1/2 text-sm md:text-xl xl:text-3xl"
				>
					<div className="flex flex-row w-full my-4 items-center">
						<h3 className="text-white w-1/3 font-semibold">I am a... </h3>
						<div className="flex flex-row justify-between gap-12">
							<div className="form-group text-white flex flex-row items-center gap-5">
								<input
									type="radio"
									id="company"
									name="company"
									value="company"
									required={!inputs.inquiryType}
									className={`${
										inputs.inquiryType == 'company'
											? 'bg-gradient-to-br from-purple-800 via-purple-600 to-blue-800'
											: 'bg-white'
									} appearance-none w-4 h-4 rounded-full cursor-pointer mb-2`}
									onClick={(e) => handleChange(e)}
								/>
								<label htmlFor="company" className="cursor-pointer">
									Company
								</label>
							</div>
							<div className="text-white flex flex-row items-center justify-center gap-3">
								<input
									type="radio"
									id="creator"
									name="creator"
									value="creator"
									required={!inputs.inquiryType}
									className={`${
										inputs.inquiryType == 'creator'
											? 'bg-gradient-to-br from-purple-800 via-purple-600 to-blue-800'
											: 'bg-white'
									} appearance-none w-4 h-4 rounded-full cursor-pointer mb-2`}
									onClick={(e) => handleChange(e)}
								/>
								<label htmlFor="creator" className="cursor-pointer">
									Creator
								</label>
							</div>
						</div>
					</div>
					<div className="flex flex-row w-full my-4 items-center">
						<label className="text-white w-1/3 font-semibold">
							My name is...
						</label>
						<input
							id="name"
							type="text"
							value={inputs.name}
							onChange={(e) => handleChange(e)}
							className="w-2/3 text-white bg-transparent border-b-4 border-white rounded-md focus:border-purple-500 focus:outline-none"
							required
						/>
					</div>
					<div className="flex flex-row w-full my-4 items-center">
						<label className="text-white w-1/3 font-semibold">
							My email is...
						</label>
						<input
							id="email"
							type="email"
							value={inputs.email}
							onChange={(e) => handleChange(e)}
							className="w-2/3 text-white bg-transparent border-b-4 border-white rounded-md focus:border-purple-500 focus:outline-none"
							required
						/>
					</div>
					<div className="flex flex-row w-full my-4 items-center">
						<label className="text-white w-1/3 font-semibold">
							My telegram is...
						</label>
						<input
							id="telegram"
							type="text"
							value={inputs.telegram}
							onChange={(e) => handleChange(e)}
							className="w-2/3 text-white bg-transparent border-b-4 border-white rounded-md focus:border-purple-500 focus:outline-none"
						/>
					</div>
					<div className="flex flex-row w-full mt-16 mb-4 items-center">
						<label className="text-white w-1/3 font-semibold">Subject</label>
						<input
							id="subject"
							type="text"
							value={inputs.subject}
							onChange={(e) => handleChange(e)}
							className="w-2/3 text-white bg-transparent border-b-4 border-white rounded-md focus:border-purple-500 focus:outline-none"
						/>
					</div>
					<div className="flex flex-row w-full my-4 justify-between items-center">
						<label className="text-white font-semibold"> Message</label>
						<textarea
							required
							id="message"
							type="text"
							value={inputs.message}
							className="w-2/3 text-white bg-transparent border-b-4 border-white rounded-md focus:border-purple-500 focus:outline-none scrollbar scrollbar-thumb-purple-white scrollbar-track-stone-900 scrollbar-thin"
							onChange={(e) => handleChange(e)}
						/>
					</div>
					<button
						type="submit"
						className="mt-8 ml-auto w-1/2 text-black bg-gradient-to-br from-purple-800 via-purple-600 to-blue-800 px-5 pt-5 pb-3 rounded-full text-xl mt-3 hover:scale-105 hover:text-white transition duration-300 ease-in-out"
					>
						SEND
					</button>
				</form>
			)}
		</div>
	);
};

export default EmailForm;
