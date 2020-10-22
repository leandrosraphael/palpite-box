import React from 'react'
import './pages/css/styles.css'

const MyApp = ({Component, pageProps}) => {
  return (
    <div>
      <h1>MyApp</h1>
      <Component {...pageProps}/>
    </div>
  )
  

}

export default MyApp