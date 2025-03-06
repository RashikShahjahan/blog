/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nous-white': "#FFFFFF",  // Previously 'nous-yellow'
        'nous-black': "#000000",   // Previously 'nous-blue'
        'nous-dark-gray': "#1A1A1A", // Previously 'nous-light-blue'
        'nous-white-alt': "#FFFFFF",   // Previously 'nous-light'
        'nous-beige': "#E5E1CF",  // New beige color from image
      },
    },
  },
  safelist: [
    'border-nous-white',
    'text-nous-white',
    'bg-nous-white',
    'hover:bg-nous-white',
    'hover:text-nous-white',
    'border-nous-black',
    'text-nous-black',
    'bg-nous-black',
    'hover:bg-nous-black',
    'hover:bg-nous-beige',
    'text-nous-beige',
    'border-nous-beige',
    'bg-nous-beige',
    'nous-text',
    'nous-bg-light',
    'nous-bg-dark',
    'nous-card',
    'nous-card-dark'
  ],
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#000000",
          "primary-content": "#FFFFFF",
          "secondary": "#FFFFFF",
          "secondary-content": "#000000",
          "base-100": "#FFFFFF",     // White background
          "base-content": "#000000",  // Black text
          "base-200": "#F0F0F0",     // Light gray
          "base-300": "#E0E0E0",     // Slightly darker gray
          "base-content": "#000000",
        },
        nous: {
          "primary": "#FFFFFF",      // White 
          "primary-content": "#000000",  // Black text on white background
          "secondary": "#000000",    // Black
          "secondary-content": "#FFFFFF", // White text on black background
          "accent": "#1A1A1A",       // Slightly lighter black
          "accent-content": "#FFFFFF", // White text on accent background
          "neutral": "#1A1A1A",      // Near black
          "neutral-content": "#FFFFFF", // White text on neutral background
          "base-100": "#FFFFFF",     // White
          "base-200": "#F0F0F0",     // Light gray
          "base-300": "#E0E0E0",     // Slightly darker gray
          "base-content": "#000000", // Black text on all base backgrounds
          "info": "#3ABFF8",         // Info blue
          "info-content": "#000000", // Black text on info background
          "success": "#10B981",      // Success green
          "success-content": "#000000", // Black text on success background
          "warning": "#F59E0B",      // Warning yellow
          "warning-content": "#000000", // Black text on warning
          "error": "#EF4444",        // Error red
          "error-content": "#000000", // Black text on error background
        },
      },
    ],
  },
}

