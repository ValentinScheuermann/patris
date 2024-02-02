module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
        "primary": "#2A6C3D",     
        "secondary": "#2AA556", 
        "accent": "#38bdf8",     
        "neutral": "#F6EDD9",  
        "base-100": "#F3FCF4",    
        "info": "#4ab5ff",  
        "success": "#00e38c", 
        "warning": "#fef08a", 
        "error": "#ff7781",
        },
      },
    ],
  },
};
