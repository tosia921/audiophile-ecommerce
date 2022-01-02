import React from 'react';
//redux
import { useSelector } from 'react-redux';
// Framer motion
import { motion } from 'framer-motion';
import { mobileMenuAnimation } from '../animations/framer-animations';
// Components
import MobileMenuItem from './MobileMenuItem';
// Images
import headphones from '../assets/shared/desktop/image-category-thumbnail-headphones.png';
import earphones from '../assets/shared/desktop/image-category-thumbnail-earphones.png';
import speakers from '../assets/shared/desktop/image-category-thumbnail-speakers.png';

export default function MobileMenu() {
	//react-redux hook
	const isOpen = useSelector((state) => state.menu.isOpen);

	return (
		<motion.div
			className="h-[85vh] w-screen bg-white shadow-md absolute top-[90px] left-0 rounded-b-lg z-40 flex flex-col justify-between items-center px-4 pb-[7%] pt-[17%] md:pt-[12%] lg:pt-[8%] md:px-24 lg:px-52"
			variants={mobileMenuAnimation}
			initial="hidden"
			animate={isOpen ? 'show' : 'hidden'}
		>
			<MobileMenuItem image={headphones} alt={'headphones'} text={'HEADPHONES'} link={'/headphones'} />
			<MobileMenuItem image={speakers} alt={'speakers'} text={'SPEAKERS'} link={'/speakers'} />
			<MobileMenuItem image={earphones} alt={'earphones'} text={'EARPHONES'} link={'/earphones'} />
		</motion.div>
	);
}

// (isOpen ? 'show' : 'hidden')
// }
