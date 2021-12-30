module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			darkOrange: '#D87D4A',
			darkBlack: '#101010',
			darkGrey: '#F1F1F1',
			lightGrey: '#FAFAFA',
			lightOrange: '#fbaf85',
			yellow: '#ffc82c',
			white: '#FFFFFF',
			black: '#000000',
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
			manrope: ['Manrope', 'serif'],
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1160px',
			'2xl': '1440px',
		},
		extend: {
			spacing: {
				'8xl': '96rem',
				'9xl': '128rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
			fontSize: {
				body: [
					'15px',
					{
						lineHeight: '25px',
					},
				],
				'sub-title': [
					'13px',
					{
						lineHeight: '25px',
						letterSpacing: '1px',
					},
				],
				overline: [
					'14px',
					{
						lineHeight: '19px',
						letterSpacing: '10px',
					},
				],
				h6: [
					'18px',
					{
						lineHeight: '24px',
						letterSpacing: '1.3px',
					},
				],
				h5: [
					'24px',
					{
						lineHeight: '33px',
						letterSpacing: '1.7px',
					},
				],
				h4: [
					'28px',
					{
						lineHeight: '38px',
						letterSpacing: '2px',
					},
				],
				h3: [
					'32px',
					{
						lineHeight: '36px',
						letterSpacing: '1.15px',
					},
				],
				h2: [
					'40px',
					{
						lineHeight: '44px',
						letterSpacing: '1.5px',
					},
				],
				h1: [
					'56px',
					{
						lineHeight: '58px',
						letterSpacing: '2px',
					},
				],
			},
		},
	},
	plugins: [],
};
