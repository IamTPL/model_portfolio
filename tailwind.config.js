/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
        screens: {
            xxl: '1400px',
            xl: { max: '1400px' },
            lg: { max: '1200px' },
            md: { max: '991px' },
            sm: { max: '767px' },
            xs: { max: '575px' },
        },
    },
    plugins: [],
};
