import React from 'react';
// custom components
import MobileMenu from '../MobileMenu';
//Redux
import { useDispatch } from 'react-redux';
import { toggleMenu, closeMenu } from '../../redux/slices/menuSlice';
// React-router
import { Link, NavLink } from 'react-router-dom';

// Svg's
import { ReactComponent as HamburgerIcon } from '../../assets/icons/icon-hamburger.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/icon-cart.svg';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

export default function Header() {
	// React-redux action dispatcher
	const dispatch = useDispatch();

	return (
		<>
			<header className="relative z-50 text-white bg-black h-[90px] flex justify-between md:justify-start items-center px-[24px] xl:page-padding-desktop xl:justify-between">
				<HamburgerIcon className="xl:hidden" onClick={() => dispatch(toggleMenu())} />
				<Link to={'/'} className="md:grow md:ml-14 xl:ml-0 xl:grow-0" onClick={() => dispatch(closeMenu())}>
					<Logo />
				</Link>
				<nav className="hidden xl:block">
					<ul className="font-manrope font-bold flex text-navLink">
						<li className="mr-5">
							<NavLink to="/" className={({ isActive }) => (isActive ? 'text-darkOrange' : undefined)}>
								HOME
							</NavLink>
						</li>
						<li className="mr-5">
							<NavLink
								to="/headphones"
								className={({ isActive }) => (isActive ? 'text-darkOrange' : undefined)}
							>
								HEADPHONES
							</NavLink>
						</li>
						<li className="mr-5">
							<NavLink
								to="/speakers"
								className={({ isActive }) => (isActive ? 'text-darkOrange' : undefined)}
							>
								SPEAKERS
							</NavLink>
						</li>
						<li className="">
							<NavLink
								to="/earphones"
								className={({ isActive }) => (isActive ? 'text-darkOrange' : undefined)}
							>
								EARPHONES
							</NavLink>
						</li>
					</ul>
				</nav>
				<CartIcon />
				{/* <div className="absolute bottom-0 left-0 h-[1px] w-[100%] bg-[#979797] md:w-[90%] md:left-1/2 md:translate-x-[-50%] "></div> */}
			</header>
			<MobileMenu />
		</>
	);
}
