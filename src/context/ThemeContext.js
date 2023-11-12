import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: true,
  toggleTheme: () => {},
})

export default ThemeContext
