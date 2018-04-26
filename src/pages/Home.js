import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import Parallax from 'react-springy-parallax'
import Pattern from '../assets/pattern.png'
import Bridge from '../assets/board/erNH_40.jpg'

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Events from '../widgets/Events'

const styles = {
  container: {
    // maxHeight: 500
  },
  button: {
    margin: 20
  },
  bg: {
    // backgroundColor: '#666',
    backgroundImage: `url(${Bridge})`,
    backgroundPosition: 'center center'
    // width: window.innerWidth
  },
  bg2: {
    backgroundColor: 'teal',
  },
  bonfireButton: {
    marginTop: 400
  }
}

class Home extends Component {
  handleDown(p){
    this.refs.parallax.scrollTo(p)
  }
  render(){
    return (
      <div style={styles.container}>
        <Parallax pages={3} ref='parallax' scrolling={true}>

          <Parallax.Layer offset={0} speed={0.5} style={styles.bg}>
            <Header/>
            
            <Events/>

            <Parallax.Layer offset={0.90 } speed={1} style={{ backgroundColor: 'rgba(0,0,0, 0.7)', height: 100}}>
              <Navbar rooms={()=>this.handleDown(1)} rest={()=>this.handleDown(2)}/>
              {/* <Button primary onClick={} style={styles.bonfireButton}>Explore the Hotel</Button> */}
            </Parallax.Layer>
            
          </Parallax.Layer>

          <Parallax.Layer offset={1} speed={0.5} style={styles.bg2}>
            <Header/>    
            <Button primary onClick={()=>this.handleDown(2)} style={styles.bonfireButton}>Explore the Hotel</Button>
            
          </Parallax.Layer>

          <Parallax.Layer offset={2} speed={0.5} style={{ backgroundColor: '#222', backgroundImage: `url(${Pattern})` }}>
            <Button primary onClick={()=>this.handleDown(0)}>Back to Home</Button>
          </Parallax.Layer>

        </Parallax>
      </div>
    )
  }
}
export default Home