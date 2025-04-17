/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{html,ts,tsx,js,jsx}"],
	theme: {
    	extend: {
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))'
    		},
    		borderColor: {
    			border: 'hsl(var(--border))'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			},
    			'spin': {
    				from: { transform: 'rotate(0deg)' },
    				to: { transform: 'rotate(360deg)' }
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			'spin': 'spin 30s linear infinite'
    		}
    	}
    },
  plugins: [require("tailwindcss-animate")],
  // Purge unused styles in production
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    options: {
      safelist: [
        // Add any classes that might be dynamically added here
        'bg-purple-500', 'bg-indigo-500', 'bg-blue-500',
        'text-purple-500', 'text-indigo-500', 'text-blue-500'
      ]
    }
  },
  // Reduce file size in production
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  // Reduce variants to decrease CSS size
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['active', 'hover'],
      textColor: ['active', 'hover'],
      borderColor: ['focus', 'hover'],
      outline: ['focus'],
      ringColor: ['focus'],
      ringWidth: ['focus']
    }
  }
}
