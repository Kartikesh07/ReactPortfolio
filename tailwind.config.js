/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        // Just Cause 3 - Medici Palette
        'jc3': {
          'sea': '#00AEEF',           // Medici Sea Blue - Primary
          'sky': '#0099D6',           // Lighter sky variant
          'azure': '#00D4FF',         // Bright cyan accent
          'chaos': '#FF4500',         // Chaos Red/Orange
          'explosion': '#FF8C00',     // Explosion Orange
          'fire': '#FF6B35',          // Fire blend
          'beacon': '#FFD700',        // Rebel Drop Beacon Yellow
          'slate': '#1A1F2E',         // Deep Slate Blue
          'night': '#0D1117',         // Dark night background
          'steel': '#2D3748',         // Steel grey
          'smoke': '#374151',         // Smoke grey
          'white': '#FFFFFF',         // Stark white
          'light': '#E5E7EB',         // Light grey text
          'muted': '#9CA3AF',         // Muted text
          'tactical': 'rgba(0, 174, 239, 0.1)', // Tactical overlay
        }
      },
      fontFamily: {
        'military': ['Barlow Condensed', 'sans-serif'],
        'tech': ['Rajdhani', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'body': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'tactical-grid': `
          linear-gradient(rgba(0, 174, 239, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 174, 239, 0.03) 1px, transparent 1px)
        `,
        'topo-pattern': `
          radial-gradient(ellipse at 20% 30%, rgba(0, 174, 239, 0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 70%, rgba(255, 69, 0, 0.05) 0%, transparent 50%),
          linear-gradient(180deg, #0D1117 0%, #1A1F2E 50%, #0D1117 100%)
        `,
        'drop-zone': 'linear-gradient(135deg, rgba(0, 174, 239, 0.15) 0%, transparent 50%)',
        'chaos-gradient': 'linear-gradient(135deg, #FF4500 0%, #FF8C00 100%)',
        'sea-gradient': 'linear-gradient(135deg, #00AEEF 0%, #00D4FF 100%)',
      },
      boxShadow: {
        'glow-sea': '0 0 30px rgba(0, 174, 239, 0.4), 0 0 60px rgba(0, 174, 239, 0.2)',
        'glow-chaos': '0 0 30px rgba(255, 69, 0, 0.4), 0 0 60px rgba(255, 69, 0, 0.2)',
        'glow-beacon': '0 0 20px rgba(255, 215, 0, 0.5)',
        'hud': '0 4px 30px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        'card': '0 10px 40px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'pulse-sea': 'pulseSea 2s ease-in-out infinite',
        'pulse-chaos': 'pulseChaos 2s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'beacon-pulse': 'beaconPulse 1.5s ease-in-out infinite',
        'slide-in': 'slideIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      keyframes: {
        pulseSea: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 174, 239, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 174, 239, 0.6), 0 0 60px rgba(0, 174, 239, 0.3)' },
        },
        pulseChaos: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 69, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 69, 0, 0.6), 0 0 60px rgba(255, 69, 0, 0.3)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
        beaconPulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      clipPath: {
        'chamfer': 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
        'chamfer-sm': 'polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px)',
      }
    },
  },
  plugins: [],
}