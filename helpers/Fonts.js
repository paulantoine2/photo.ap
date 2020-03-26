const FontFaceObserver = require('fontfaceobserver')

const Fonts = () => {
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900'
  link.rel = 'stylesheet'

  document.head.appendChild(link)

  const Poppins = new FontFaceObserver('Poppins')

  Poppins.load().then(() => {
    document.documentElement.classList.add('Poppins')
  })
}

export default Fonts