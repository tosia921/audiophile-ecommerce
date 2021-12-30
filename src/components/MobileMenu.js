import React from 'react';

export default function MobileMenu({ isOpen }) {
	return (
		<div className={'h-[400px] w-screen bg-darkOrange absolute top-[90px] left-0 ' + (isOpen ? 'show' : 'hidden')}>
			<p>mobile menu</p>
		</div>
	);
}
