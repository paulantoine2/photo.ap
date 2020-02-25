const FontFaceObserver = require('fontfaceobserver')

const Fonts = () => {
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900'
  link.rel = 'stylesheet'

  document.head.appendChild(link)

  const roboto = new FontFaceObserver('Raleway')

  roboto.load().then(() => {
    document.documentElement.classList.add('raleway')
  })
}

export default Fonts