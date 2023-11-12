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
        homeUrl = 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        backgroundTheme = 'darkT'
        homeTheme = 'darkTH'
      } else {
        homeUrl = 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
        backgroundTheme = 'lightT'
        homeTheme = 'lightTH'
      }
      return (
        <>
          <Navbar />
          <div className={backgroundTheme}>
            <img src={homeUrl} className="homeImg" alt="home" />
            <h1 className={homeTheme}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
