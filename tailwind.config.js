module.exports = {
  mode: "JIT",
  content: ["./src/**/*.{html,js}","index.html"],
  theme: { 
    screens: {
      screens: {
        'sm': {'min': '260px', 'max': '360px'},
        'md': {'min': '360px', 'max': '480px'},
        'lg': {'min': '480px', 'max': '768px'},
        'xl': {'min': '768px', 'max': '1000px'},
        '2xl': {'min': '1000px'},
    },
    colors:{
      'bg_nav': '#1B1B1B',
      'redish': '#DA4533',
      'text': '#FFFFFF',
      'gradient1': 'rgba(27, 27, 27, 1)',
      'gray': 'rgb(156 163 175)',
    },
    fonts:{
      'fontfamily1': ['Montserrat','sans-serif'],
      'fontfamily2': ['STIX Two Text','sans-serif'],
      'fw1': '400px',
      'fw2': '500px',
    },
    sizes:{
      'bg1w': '544px',
      'bg1h': '513px',
      'btn': '300px',
    },
    extend: {},
  },
  plugins: [], 
  }
}
