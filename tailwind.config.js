module.exports = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    screens:{
      sm:'640px',
      md:'768px',
      lg:'1024px',
      xl:'1280px',
      xxl:'1590px'
    },
    fontFamily:{
      gotham: ['Gotham pro', 'sans-serif']
    },
    extend: {
      fontSize:{
        '8xl':'7rem'
      },
      spacing:{
        '144':'36rem'
      },
      colors:{
        gray:'#A8A29E',
        orange:{
          200: '#FE7865',
          300: '#F52E17',
          400: '#EF4444'
        }
      },
    },
    
  },
  plugins: [],
}