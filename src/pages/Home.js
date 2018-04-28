import React, { Component } from 'react'
import { Button, Menu } from 'semantic-ui-react'
import Parallax from 'react-springy-parallax'
import Bridge from '../assets/board/erNH_40.jpg'
import ROOM1 from '../assets/images/ROOM1.jpg'
import Leather from '../assets/board/Leather.jpg'
import Herbs from '../assets/board/herbs.jpg'
import Logo from '../assets/clarion-logo.png'
import Bonfire from '../assets/board/bonfire.PNG'
// main components
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Events from '../widgets/Events'
// rooms & suites
import Rooms from '../components/Rooms'
// observables
import { observer } from 'mobx-react'
import Layout from '../observables/Layout'

const layout = new Layout()

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
    backgroundImage: `url(${ROOM1})`,
    backgroundPosition: 'center center'
  },
  bg3: {
    backgroundImage: `url(${Herbs})`,
    backgroundPosition: 'center center'
  },
  menu: {
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
}

const Home = observer (
  class Homepage extends Component {

    componentDidMount(){
      window.addEventListener('resize', ()=> {
        // console.log(layout.width)
        layout.resizedWidth(window.innerWidth)
      })
    }
  
    componentWillUnmount(){
      window.removeEventListener('resize', ()=> {
        layout.resizedWidth(window.innerWidth)
      })
    }
  
    getRightPhoto(width){
      if (width < 450){
        return Leather
      } else{
        return ROOM1
      }
    }
  
    handleDown(p){
      this.refs.parallax.scrollTo(p)
    }
    render(){
      return (
        <div style={styles.container}>
          <Parallax pages={3} ref='parallax' scrolling={false}>
            
            {/* Page 1 */}
            <Parallax.Layer offset={0} speed={0.5} style={styles.bg}>
              <Header image={Logo} title='Clarion Inn & Suites' sub='NEW HOPE - LAMBERTVILLE' details='T 215.862.5221'/>
              
              <Events/>
  
              <Parallax.Layer offset={0.90 } speed={1} style={{ backgroundColor: 'rgba(0,0,0, 0.99)', height: 100}}>
                <Navbar rooms={()=>this.handleDown(1)} rest={()=>this.handleDown(2)} events={()=>this.handleDown(3)}/>
              </Parallax.Layer>
              
            </Parallax.Layer>
            
            {/* Page 2 */}
            <Parallax.Layer offset={1} speed={0.5} style={{backgroundImage: `url(${this.getRightPhoto(layout.width)})`, backgroundPosition: 'center center'}}>
              
              <Header image={Logo} title='Rooms & Suites' sub='KING &middot; DOUBLES &middot; SUITES' details='T 215.862.5221'/>    
              
              <Rooms/>
              <Menu widths={1} style={styles.menu}>
                <Button secondary onClick={()=>this.handleDown(2)} >Bonfire Restaurant & Bar</Button>
              </Menu>
            </Parallax.Layer>

            {/* Page 3 */}
            <Parallax.Layer offset={2} speed={0.5} style={styles.bg3}>
              
              <Header image={Bonfire} title='' sub='' details=''/>    
              <Button primary onClick={()=>this.handleDown(0)} >Go Back home</Button>
              
            </Parallax.Layer>
  
            
  
          </Parallax>
        </div>
      )
    }
  }
)
export default Home