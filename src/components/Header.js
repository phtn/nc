import React from 'react'
import Linen from '../assets/pattern.png'
import Logo from '../assets/clarion-logo.png'
import { Icon } from 'semantic-ui-react'

const styles = {
  container: {
    height: 80,
    // backgroundColor: 'rgba(144,0,0,.5)',
    // backgroundImage: `url(${Linen})`,
    paddingTop: 10,
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    marginTop: 20
    

  },
  header: {
    marginLeft: 20,
    fontSize: 30,
    color: '#fff',
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 100,
    
  },
  title: {
    marginLeft: 88,
    textShadow: `3px 3px 9px rgba(150, 150, 150, 1)`
  },
  subtitle: {
    marginLeft: 90,
    fontSize: 15,
    position: 'absolute',
    top: 45,
    zIndex: 1,
    fontFamily: 'Playfair Display',
    fontWeight: 400,
    color: 'rgb(250,226,173)',
    letterSpacing: '1px'

  },
  phone: {
    marginLeft: 90,
    fontSize: 15,
    position: 'absolute',
    top: 70,
    zIndex: 1,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    // color: 'rgb(153,27,50)',
    color: '#fff',
  },
  logo: {
    position: 'absolute'
  }
}
export default props => (
  <div style={styles.container}>
    <header style={styles.header}>
      <img src={Logo} alt='' height={80} style={styles.logo}/>
      <p style={styles.title}>Clarion Inn & Suites</p>
      <p style={styles.subtitle}>New Hope - Lambertville</p>  
      <p style={styles.phone}>T 215.862.5221</p>  
    </header>
    
  </div>
)