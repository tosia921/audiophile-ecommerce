import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// route components
import App from './App';
import './index.css';
// import Home from './pages/Home';
import Earphones from './pages/Earphones';
import Headphones from './pages/Headphones';
import Speakers from './pages/Speakers';
import ProductDetails from './pages/ProductDetails';

const rootElement = document.getElementById('root');

render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/earphones" element={<Earphones />} />
			<Route path="/earphones/:productID" element={<ProductDetails />} />
			<Route path="/headphones" element={<Headphones />} />
			<Route path="/headphones/:productID" element={<ProductDetails />} />
			<Route path="/speakers" element={<Speakers />} />
			<Route path="/speakers/:productID" element={<ProductDetails />} />
		</Routes>
	</BrowserRouter>,
	rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
