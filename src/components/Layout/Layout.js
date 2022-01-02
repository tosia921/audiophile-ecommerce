import React from 'react';
import Header from './Header';
import Footer from './Footer';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from '../../redux/slices/menuSlice';
// Framer motion
import { motion, AnimatePresence } from 'framer-motion';
import { darkenBg } from '../../animations/framer-animations';

export default function Layout({ children }) {
	//react-redux hook
	const isOpen = useSelector((state) => state.menu.isOpen);
	const dispatch = useDispatch();

	return (
		<>
			<div className="flex flex-col min-h-screen overflow-y-hidden relative">
				<Header />
				<main className="flex-grow page-padding-phone xl:page-padding-desktop font-manrope min-h-screen">
					{children}
				</main>
				<Footer />
			</div>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						className="w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-[0.15] z-30 "
						variants={darkenBg}
						initial="hidden"
						exit="hidden"
						animate="show"
						onClick={() => dispatch(toggleMenu())}
					></motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
