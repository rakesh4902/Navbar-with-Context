// Write your code here
import {Link} from 'react-router-dom'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onChangeTheme = () => {
        toggleTheme()
      }
      let logoImgUrl1
      let logoImgUrl2
      let navHead
      let backGroundTheme
      if (isDarkTheme) {
        logoImgUrl1 =
          'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        logoImgUrl2 =
          'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        navHead = 'darkThemeH'
        backGroundTheme = 'darkTheme'
      } else {
        logoImgUrl1 =
          'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
        logoImgUrl2 =
          'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
        navHead = 'lightThemeH'
        backGroundTheme = 'lightTheme'
      }
      return (
        <div className={backGroundTheme}>
          <img src={logoImgUrl1} className="logoImg" alt="website logo" />
          <ul className="navHeadCont">
            <Link to="/" className="link">
              <li className={navHead}>Home</li>
            </Link>
            <Link to="/about" className="link">
              <li className={navHead}>About</li>
            </Link>
          </ul>
          <button
            type="button"
            onClick={onChangeTheme}
            className="logoTheme"
            data-testid="theme"
          >
            <img src={logoImgUrl2} className="logoImg" alt="theme" />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
