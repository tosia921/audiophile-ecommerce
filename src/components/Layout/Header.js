import React, { useState } from 'react';
import MobileMenu from '../MobileMenu';

import { ReactComponent as HamburgerIcon } from '../../assets/icons/icon-hamburger.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/icon-cart.svg';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="text-white bg-black h-[90px] flex justify-between items-center px-[24px] relative">
			<HamburgerIcon onClick={() => setIsOpen(!isOpen)} />
			<Logo />
			<CartIcon />
			<MobileMenu isOpen={isOpen} />
		</header>
	);
}
