import React from 'react';
// React-router
import { Link } from 'react-router-dom';
//Redux
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../redux/slices/menuSlice';

const MobileMenuItem = ({ text, image, link, alt }) => {
	// React-redux action dispatcher
	const dispatch = useDispatch();

	return (
		<Link
			to={link}
			className="w-11/12 h-[25%] bg-darkGrey rounded-lg relative flex justify-end items-center flex-col cursor-pointer"
			onClick={() => dispatch(toggleMenu())}
		>
			<img src={image} alt={alt} className="w-auto h-[90%] absolute top-[-35%] left-1/2 translate-x-[-50%]"></img>
			<h3 className="pb-2 text-[20px] font-bold font-manrope tracking-wider">{text}</h3>
			<div className="pb-2 flex justify-between items-center">
				<p className="font-manrope text-[18px] font-bold tracking-widest mr-2 opacity-50 hover:opacity-100">
					SHOP
				</p>
				<svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
					<path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd" />
				</svg>
			</div>
		</Link>
	);
};

export default MobileMenuItem;
