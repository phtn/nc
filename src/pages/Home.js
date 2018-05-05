import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import Parallax from 'react-springy-parallax'
import Animated from 'animated/lib/targets/react-dom'
import Bridge from '../assets/board/erNH_40.jpg'
import ROOM1 from '../assets/images/ROOM1.jpg'
import Herbs from '../assets/board/outdoor.jpg'
import Logo from '../assets/clarion-logo.png'
import Linen from '../assets/linen.png'
import Summer from '../assets/board/pool4.jpg'
import Bouquet from '../assets/board/bo1.jpg'
import Discover from '../assets/images/disco2.jpg'
import Mixer from '../assets/board/mixerboard.jpg'
// main components
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import NavbarDesktop from '../components/NavbarDesktop'
import BonfireDesktop from '../components/BonfireDesktop'
import AmenitiesDesktop from '../components/AmenitiesDesktop'
import DiscoverDesktop from '../components/DiscoverDesktop'
import EventsDesktop from '../components/EventsDesktop'
import GroupDesktop from '../components/GroupDesktop'
// import Events from '../widgets/Events'
// rooms & suites
import Rooms from '../components/Rooms'
import RoomsDesktop from '../components/RoomsDesktop'
// observables
import { observer } from 'mobx-react'
import Layout from '../observables/Layout'

const layout = new Layout()

const styles = {
  container: {
    // maxHeight: 500
  },
  button: {
    fontFamily: 'Playfair Display'
  },
  bg: {
    // backgroundColor: '#666',
    backgroundImage: `url(${Bridge})`,
    backgroundPosition: 'center center'
    // width: window.innerWidth
  },
  bg2: {
    backgroundImage: `url(${Linen})`,
    backgroundRepeat: 'repeat',
    // backgroundPosition: 'center center'
    backgroundColor: '#050f2c'
  },
  bg3: {
    backgroundImage: `url(${Herbs})`,
    // backgroundPosition: 'center center',
    backgroundSize: `${layout.width}px ${layout.height}px`
  },
  bg4: {
    backgroundImage: `linear-gradient(to right top, #007184, #009B95, #00C485, #87E75B, #FFFF18)`
    // backgroundImage: `linear-gradient(to right top, #051937, #643062, #c14962, #f58940, #e6e031)`
    // backgroundPosition: 'center center',
    
  },
  bg5: {
    backgroundImage: `url(${Bouquet})`,
    backgroundSize: `${layout.width}px ${layout.height}px`
  },
  bg6: {
    backgroundImage: `url(${Discover})`,
    backgroundSize: `${layout.width}px ${layout.height}px`
  },
  bg7: {
    backgroundImage: `url(${Mixer})`,
    backgroundSize: `${layout.width}px ${layout.height}px`
  },
  menu: {
    backgroundColor: 'rgba(0,0,0,0.5)'
  }, 
  directions: {
    // border: '1px solid red', 
    padding: 20,
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
  }
}

const Home = observer (
  class Homepage extends Component {

    componentDidMount(){

      this.refs.parallax.scrollTo(0)

      window.addEventListener('resize', ()=> {
        layout.resizedWidth(window.innerWidth)
      })
      window.addEventListener('resize', ()=> {
        layout.resizedHeight(window.innerHeight)
        // console.log(window.innerHeight)
      })
    }
  
    componentWillUnmount(){
      window.removeEventListener('resize', ()=> {
        layout.resizedWidth(window.innerWidth)
      })
      window.removeEventListener('resize', ()=> {
        layout.resizedHeight(window.innerHeight)
      })
    }

    // homepage
    homeWidthHeaderAdjuster(width){
      if (width <= 320){
        return 23
      } else if (width > 376){
        return 30
      } else {
        return 25
      }
    }
    homeWidthNavbarAdjuster(width){ // mobile
      if (width <= 320){
        return 11
      } else if (width < 375){
        return 12
      } else if (width === 375){
        return 13
      } else {
        return 14
      }
    }
    homeHeightMapAdjuster(height){
      if ( height <= 568){
        return 450
      } else if (height <= 667){
        return 500
      } else if (height <= 740){
        return 550
      } else {
        return 600
      }
    }
    homeWidthNavbarComponent(width){
      if (width < 600){
        return <Navbar 
          rooms={()=>this.handleDown(1)} 
          rest={()=>this.handleDown(2)} 
          events={()=>this.handleDown(3)} 
          menuLabelSize={this.homeWidthNavbarAdjuster(layout.width)}/>


      } else {
        return <NavbarDesktop 
          rooms={()=>this.handleDown(1)} 
          rest={()=>this.handleDown(2)} 
          amenities={()=>this.handleDown(3)} 
          group={()=>this.handleDown(4)} 
          events={()=>this.handleDown(5)} 
          discover={()=>this.handleDown(6)}
          />
      }
    }
    homeWidthDirectionsDispay(width){
      if (width > 600){
        return 'none'
      }
    }

    // rooms & suites
    heightAdjuster(height){
      if (height > 800){
        return 350
      } else if(height > 700){
        return 300
      } else {
        return 200
      }
    }
    renderRoomComponent(width){
      if (width < 600){
        return <Rooms topMargin={this.heightAdjuster(layout.height)}/>
      } else {
        return <RoomsDesktop 
          rest={()=>this.handleDown(2)} 
          amenities={()=>this.handleDown(3)} 
          group={()=>this.handleDown(4)} 
          events={()=>this.handleDown(5)} 
          discover={()=>this.handleDown(6)}
          />
      }
    }
    
    // getRightPhoto(width){
    //   if (width < 450){
    //     return Leather
    //   } else{
    //     return ROOM1
    //   }
    // }
  
    handleDown(p){
      this.refs.parallax.scrollTo(p)
    }
    render(){
      return (
        <div style={styles.container}>
          <Parallax pages={7} ref='parallax' scrolling={false} effect={(animation, toValue)=> Animated.timing(animation, { toValue, duration: 0 })}>
            
            {/* Page 1 HOME */}
            <Parallax.Layer offset={0} speed={0.5} style={styles.bg}>
              <Header 
                home={()=> this.handleDown(0)} 
                image={Logo} title='Clarion Inn & Suites' 
                sub='NEW HOPE - LAMBERTVILLE' 
                details='T 215.862.5221' 
                titleSize={this.homeWidthHeaderAdjuster(layout.width)}/>
              
              
              <div style={Object.assign({top: this.homeHeightMapAdjuster(layout.height)}, styles.directions)} className='animated slideInUp'>
                <Button primary style={Object.assign({display: this.homeWidthDirectionsDispay(layout.width), zIndex: 1})} as='a' href='https://www.google.com/maps/place/6426+Lower+York+Rd,+New+Hope,+PA+18938'><Icon name='map'/> Get Directions</Button>
              </div>

              <Parallax.Layer offset={0.90 } speed={1} style={{ backgroundColor: 'rgba(0,0,0, 0.85)', height: 100}}>
                {this.homeWidthNavbarComponent(layout.width)}
              </Parallax.Layer>
              
            </Parallax.Layer>
            
            {/* Page 2 ROOMS & SUITES*/}
            <Parallax.Layer offset={1} speed={0.5} style={styles.bg2}>
              
              <Header 
                home={()=> this.handleDown(0)} 
                image={Logo} 
                title='Rooms & Suites' 
                sub='KING &middot; DOUBLES &middot; SUITES' 
                details='T 215.862.5221' 
                titleSize={this.homeWidthHeaderAdjuster(layout.width)}/>    
              
              

              {this.renderRoomComponent(layout.width)}

              
            </Parallax.Layer>

            {/* Page 3 EAT & DRINK*/}
            <Parallax.Layer offset={2} speed={0.5} style={styles.bg3}>
              
              <Header 
                home={()=> this.handleDown(0)} 
                image={Logo} 
                title='Eat & Drink' 
                sub='BAR &middot; GRILL &middot; ENTERTAINMENT' 
                details='T 215.862.5221' 
                titleSize={this.homeWidthHeaderAdjuster(layout.width)}/>    

              <BonfireDesktop 
                rooms={()=>this.handleDown(1)} 
                amenities={()=>this.handleDown(3)} 
                group={()=>this.handleDown(4)}
                events={()=>this.handleDown(5)}
                discover={()=>this.handleDown(6)}
                />
              
            </Parallax.Layer>

            {/* Page 4 HOTEL AMENITIES*/}
            <Parallax.Layer offset={3} speed={0.5} style={styles.bg4}>
              
              <Header // HEADER
                home={()=> this.handleDown(0)} 
                image={Logo} 
                title='Hotel Amenities' 
                sub='OUTDOOR POOL &middot; FITNESS CENTER &middot; BUSINESS CENTER' 
                details='T 215.862.5221' 
                titleSize={this.homeWidthHeaderAdjuster(layout.width)}/>    

              <AmenitiesDesktop 
                rooms={()=>this.handleDown(1)} 
                rest={()=>this.handleDown(2)}
                group={()=>this.handleDown(4)}
                events={()=>this.handleDown(5)}
                discover={()=>this.handleDown(6)}
                />
              
            </Parallax.Layer>

            
            {/* Page 5 GROUP RESERVATIONS*/}
            <Parallax.Layer offset={4} speed={0.5} style={styles.bg5}>
              
              <Header 
                home={()=> this.handleDown(0)} 
                image={Logo} title='GROUP RESERVATIONS' 
                sub='WEDDINGS &middot; CONFERENCES &middot; SPORTS TEAMS' 
                details='T 215.862.5221'
                titleSize={this.homeWidthHeaderAdjuster(layout.width)}/>    

              <GroupDesktop
                rooms={()=>this.handleDown(1)} 
                rest={()=>this.handleDown(2)}
                amenities={()=>this.handleDown(3)}
                events={()=>this.handleDown(5)}
                discover={()=>this.handleDown(6)}
              />
              
            </Parallax.Layer>

            
            {/* Page 6 EVENTS*/}
            <Parallax.Layer offset={5} speed={0.5} style={styles.bg7}>
              
              <Header 
                home={()=> this.handleDown(0)} 
                image={Logo} title='EVENTS & LIVE PERFORMANCES' 
                sub='THE RRAZZ ROOM &middot; BOOZY BINGO &middot; KARAOKE NIGHTS' 
                details='T 215.862.5221' 
                titleSize={this.homeWidthHeaderAdjuster(layout.width)}/>    

              <EventsDesktop 
                rooms={()=>this.handleDown(1)} 
                rest={()=>this.handleDown(2)}
                group={()=>this.handleDown(4)}
                amenities={()=>this.handleDown(3)}
                discover={()=>this.handleDown(6)}
              />
            </Parallax.Layer>

            {/* Page 6 DISCOVER*/}
            <Parallax.Layer offset={6} speed={0.5} style={styles.bg}>
              
              <Header 
                home={()=> this.handleDown(0)} 
                image={Logo} 
                title='DISCOVER NEW HOPE & LAMBERTVILLE' 
                sub='MAIN ST &middot; PEDDLERS VILLAGE &middot; LAMBERTVILLE STATION' 
                details='T 215.862.5221' 
                titleSize={this.homeWidthHeaderAdjuster(layout.width)}/>    


              <DiscoverDesktop
                rooms={()=>this.handleDown(1)} 
                rest={()=>this.handleDown(2)}
                group={()=>this.handleDown(4)}
                amenities={()=>this.handleDown(3)}
                events={()=>this.handleDown(5)}
              />
              
            </Parallax.Layer>
  
            
  
          </Parallax>
        </div>
      )
    }
  }
)
export default Home