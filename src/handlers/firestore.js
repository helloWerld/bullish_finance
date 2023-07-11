import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase.config';

const Firestore = {
	submitContactForm: async (inputs) => {
		try {
			const docRef = await addDoc(collection(db, 'submissions'), inputs);
			return { isError: false };
		} catch (error) {
			return { isError: true, error: error };
		}
	},
};

export default Firestore;
