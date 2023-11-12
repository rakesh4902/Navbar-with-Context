// Write your code here
import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      let homeUrl
      let backgroundTheme
      let homeTheme
      if (isDarkTheme) {
        homeUrl = 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        backgroundTheme = 'darkT'
        homeTheme = 'darkTH'
      } else {
        homeUrl = 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
        backgroundTheme = 'lightT'
        homeTheme = 'lightTH'
      }
      return (
        <>
          <Navbar />
          <div className={backgroundTheme}>
            <img src={homeUrl} className="homeImg" alt="about" />
            <h1 className={homeTheme}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
