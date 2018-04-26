import React from 'react'
import Pattern from '../assets/pattern.png'
const styles = {
  container: {
    height: 100,
    // backgroundImage: `url(${Pattern})`,
    backgroundColor: '#050f2c',
    position: 'absolute',
    top: window.innerHeight-95,
    width: '100%'
  }
}
export default props => (
  <div style={styles.container}>test</div>
)