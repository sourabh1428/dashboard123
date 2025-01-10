/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{html,ts,tsx,js,jsx}"],
	theme: {
		extend: {
		  colors: {
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			// Add more custom properties here
		  },
		  borderColor: {
			border: 'hsl(var(--border))',
		  },
		  // Add other properties like card, primary, secondary, etc.
		},
	  },
  plugins: [require("tailwindcss-animate")],
}
