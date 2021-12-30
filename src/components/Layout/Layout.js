import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function layout({ children }) {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-grow page-padding-phone xl:page-padding-desktop font-manrope">{children}</main>
			<Footer />
		</div>
	);
}
