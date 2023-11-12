// Write your code here
import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      let backgroundTheme
      let headTheme
      let paraTheme
      if (isDarkTheme) {
        backgroundTheme = 'notFoundDarkT'
        headTheme = 'notFoundDarkTH'
        paraTheme = 'notFoundDarkTP'
      } else {
        backgroundTheme = 'notFoundLightT'
        headTheme = 'notFoundLightTH'
        paraTheme = 'notFoundLightTP'
      }
      return (
        <>
          <Navbar />
          <div className={backgroundTheme}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="notFound"
            />
            <h1 className={headTheme}>Lost Your Way?</h1>
            <p className={paraTheme}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
