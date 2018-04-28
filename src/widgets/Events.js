import React from 'react'


// import Bridge from '../assets/images/erNH_40.jpg'
// import Pool from '../assets/board/pool3_2.png'


const styles = {
  container: {
    textAlign: 'center',
    height: 400,
    width: 400,
    border: '1px solid #222',
    borderRadius: '3px',
    backgroundColor: 'rgba(0,0,0,0.7)',
    position: 'absolute',
    top: 200,
    left: window.innerWidth-420,
    zIndex: 2,
  }
}


export default props => (
  <div style={styles.container}>
    test
  </div>
)