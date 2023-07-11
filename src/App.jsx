import './App.css';
import { HomePage, CryptoLove } from './pages';
import { Navbar } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	const AppRoutes = () => {
		return (
			<Routes>
				<Route
					path="*"
					element={
						<>
							<Navbar />
							<HomePage />
						</>
					}
				/>
				<Route
					path="/"
					element={
						<>
							<Navbar />
							<HomePage />
						</>
					}
				/>
				<Route
					path="/crypto-love"
					element={
						<>
							<Navbar />
							<CryptoLove />
						</>
					}
				/>
			</Routes>
		);
	};
	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	);
}

export default App;
