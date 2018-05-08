import React from 'react'


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
    
  },
  title: {
    color: '#fff',
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 100,
    marginLeft: 88,
    textShadow: `3px 3px 9px rgba(150, 150, 150, 1)`
  },
  subtitle: {
    marginLeft: 90,
    fontSize: 13,
    position: 'absolute',
    top: 45,
    zIndex: 1,
    fontFamily: 'Playfair Display',
    fontWeight: 400,
    color: 'rgb(250,226,173)',
    textShadow: `2px 2px 2px rgba(0, 0, 0, 1)`,
    letterSpacing: '1px'

  },
  phone: {
    marginLeft: 90,
    fontSize: 17,
    position: 'absolute',
    top: 65,
    zIndex: 1,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    // color: 'rgb(153,27,50)',
    color: '#fff',
    textDecoration: 'none'
  },
  logo: {
    position: 'absolute',
    cursor: 'pointer'
  }
}
export default props => (
  <div style={styles.container}>
    <header style={styles.header}>
      <img src={props.image} alt='' height={80} style={styles.logo} onClick={props.home}/>
      <p style={Object.assign({fontSize: props.titleSize}, styles.title)}>{props.title}</p>
      <p style={styles.subtitle}>{props.sub}</p>  
      <p ><a href='tel: 2158625221' style={styles.phone}>{props.details}</a></p>  
    </header>
    
  </div>
)