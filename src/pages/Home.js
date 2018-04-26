import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import Parallax from 'react-springy-parallax'
import Pattern from '../assets/pattern.png'
import Bridge from '../assets/images/erNH_40.jpg'

import Header from '../components/Header'

const styles = {
  container: {
    // maxHeight: 500
  },
  button: {
    margin: 10
  },
  bg: {
    backgroundColor: '#666',
    backgroundImage: `url(${Bridge})`
  }
}

class Home extends Component {
  handleDown(p){
    this.refs.parallax.scrollTo(p)
  }
  render(){
    return (
      <div style={styles.container}>
        <Parallax pages='3' ref='parallax'>

          <Parallax.Layer offset={0} speed={0.5} style={styles.bg}>
            <Header/>    
            <Parallax.Layer offset={0.90} speed={1} style={{ backgroundColor: 'tomato'}}>
              <Button primary onClick={()=>this.handleDown(1)} style={styles.button}>Page 2</Button>
            </Parallax.Layer>

            
            
            
          </Parallax.Layer>

          <Parallax.Layer offset={1} speed={0.5} style={{ backgroundColor: '#be0027', backgroundImage: `url(${Pattern})` }}>
            <Button primary onClick={()=>this.handleDown(2)}>Page 2</Button>
          </Parallax.Layer>

          <Parallax.Layer offset={2} speed={0.5} style={{ backgroundColor: '#222', backgroundImage: `url(${Pattern})` }}>
            <Button primary onClick={()=>this.handleDown(0)}>Page 2</Button>
          </Parallax.Layer>

        </Parallax>
      </div>
    )
  }
}
export default Home