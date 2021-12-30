import React from 'react';
//redux
import { useSelector } from 'react-redux';

export default function MobileMenu() {
	//react-redux hook
	const isOpen = useSelector((state) => state.menu.isOpen);

	return (
		<div
			className={
				'h-[400px] w-screen bg-darkOrange absolute top-[90px] left-0 rounded-b-lg ' +
				(isOpen ? 'show' : 'hidden')
			}
		>
			<p>mobile menu</p>
		</div>
	);
}
