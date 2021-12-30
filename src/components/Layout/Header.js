import React from 'react';
import MobileMenu from '../MobileMenu';
//Redux
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../redux/slices/menuSlice';
// Svg's
import { ReactComponent as HamburgerIcon } from '../../assets/icons/icon-hamburger.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/icon-cart.svg';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

export default function Header() {
	// React-redux action dispatcher
	const dispatch = useDispatch();

	return (
		<header className="text-white bg-black h-[90px] flex justify-between items-center px-[24px] relative">
			<HamburgerIcon onClick={() => dispatch(toggleMenu())} />
			<Logo />
			<CartIcon />
			<MobileMenu />
		</header>
	);
}
