import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import Parallax from 'react-springy-parallax'
import Animated from 'animated/lib/targets/react-dom'

import Bridge from '../assets/board/erNH_40.jpg'
import Herbs from '../assets/board/outdoor.jpg'
import Logo from '../assets/clarion-logo.png'
import Linen from '../assets/linen.png'
import Bouquet from '../assets/board/bo1.jpg'
import Discover from '../assets/images/disco2.jpg'
import Mixer from '../assets/board/mixerboard.jpg'
import Sea from '../assets/board/sea.jpg'
// main components
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import NavbarDesktop from '../components/NavbarDesktop'
// import BonfireDesktop from '../components/BonfireDesktop'
import Bonfire from '../components/Bonfire'
import AmenitiesDesktop from '../components/AmenitiesDesktop'
import DiscoverDesktop from '../components/DiscoverDesktop'
import EventsDesktop from '../components/EventsDesktop'
import GroupDesktop from '../components/GroupDesktop'
import RestaurantDesktop from '../components/RestaurantDesktop'
// import Events from '../widgets/Events'
// rooms & suites
import Rooms from '../components/Rooms'
// import RoomsDesktop from '../components/RoomsDesktop'
// import RoomSelectDesktop from '../components/RoomSelectDesktop'
// observables
import { observer } from 'mobx-react'
import Layout from '../observables/Layout'
import States from '../observables/States'

const layout = new Layout()
const states = new States()

const styles = {
  container: {
    // maxHeight: 500
  },
  button: {
    fontFamily: 'Playfair Display'
  },
  bg: {
    backgroundImage: `url(${Bridge})`,
    backgroundPosition: 'center center'
  },
  bg2: {
    backgroundImage: `url(${Linen})`,
    backgroundRepeat: 'repeat',
    backgroundColor: '#050f2c'
  },
  bg3: {
    backgroundImage: `url(${Herbs})`,
    backgroundSize: `${layout.width}px ${layout.height}px`
  },
  bg4: {
    backgroundImage: `url(${Sea})`,
    backgroundSize: `${layout.width}px ${layout.height}px`
    
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

      this.getItems(states.parallaxOffset)
      this.storeItems(states.parallaxOffset)

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
          menuLabelSize={this.homeWidthNavbarAdjuster(layout.width)}
          toggle={()=>states.toggleSidebar(states.sidebarVisibility)}
          />


      } else {
        return <NavbarDesktop 
          rooms={()=>{
            this.handleDown(1)
            localStorage.setItem('offset',1)
          }} 
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
        return <Rooms 
          topMargin={this.heightAdjuster(layout.height)}
          rest={()=>{
            this.handleDown(2)
            this.storeItems(2)
          }} 
          amenities={()=>{
            this.handleDown(3)
            this.storeItems(3)
          }} 
          events={()=>{
            this.handleDown(5)
            this.storeItems(5)
          }} 
          discover={()=>{
            this.handleDown(6)
            this.storeItems(6)
          }}
          />
      } else {
          return states.getRoomComponent(
            ()=>{
            this.handleDown(2)
            this.storeItems(2)
          },()=> {
            this.handleDown(3)
            this.storeItems(3)
          },()=> {
            this.handleDown(4)
            this.storeItems(4)
          },()=> {
            this.handleDown(5)
            this.storeItems(5)
          },()=> {
            this.handleDown(6)
            this.storeItems(6)
          },     
          layout.height - layout.height*.1,
          ()=>states.setComponent(0),
          ()=>states.setComponent(1),
          ()=>states.setComponent(2),
          ()=>states.setComponent(3),
          ()=>states.setComponent(4),
          ()=>states.setComponent(5),
          ()=>states.setComponent(6),
          ()=>states.setComponent(7),
        )
      }
    }

    renderBonfireComponent(width){
      if (width < 600){
        return <Bonfire 
          rooms={()=>this.handleDown(1)} 
          amenities={()=>this.handleDown(3)} 
          events={()=>this.handleDown(5)} 
          discover={()=>this.handleDown(6)}
          />
      } else {
        return <RestaurantDesktop 
          header='Bonfire Bar & Grill'
          rooms={()=>this.handleDown(1)} 
          amenities={()=> {
              this.handleDown(3)
              localStorage.setItem('offset', 3)
              console.log('amen')
            }
          } 
          group={()=>this.handleDown(4)} 
          events={()=>this.handleDown(5)} 
          discover={()=>this.handleDown(6)}
          top={layout.height - layout.height*.1}
          />
      }
    }

    storeItems(offset){
      if (localStorage.getItem('offset') === null){
        localStorage.setItem('offset', 0)
      } else {
        // this.refs.parallax.scrollTo(localStorage.getItem('offset'))
        this.handleDown(offset)

      }
    }
    getItems(offset){
      this.refs.parallax.scrollTo(localStorage.getItem('offset'))
    }

  
    setOffset(p){
      localStorage.setItem('offset', p)
    }
    handleDown(p){
      this.refs.parallax.scrollTo(p)
      this.setOffset(p)
    }
    render(){
      return (
        <div style={styles.container}>
          <Parallax pages={7} ref='parallax' scrolling={false} effect={(animation, toValue) => Animated.timing(animation, { toValue, duration: 0 })}>
            
            {/* Page 1 HOME */}
            <Parallax.Layer offset={0} speed={0.5} style={styles.bg}>
              <Header 
                home={()=> {
                  this.handleDown(0)
                  this.setOffset(0)
                }} 
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
                home={()=> {
                  this.handleDown(0)
                  this.setOffset(0)
                }} 
                image={Logo} 
                title='Rooms & Suites' 
                sub='KING &middot; DOUBLES &middot; SUITES &middot; JACUZZI'  
                details='T 215.862.5221' 
                titleSize={this.homeWidthHeaderAdjuster(layout.width)}/>    
              
              

              {this.renderRoomComponent(layout.width)}

              
            </Parallax.Layer>

            {/* Page 3 EAT & DRINK*/}
            <Parallax.Layer offset={2} speed={0.5} style={styles.bg3}>
              
              <Header 
                home={()=> {
                  this.handleDown(0)
                  this.setOffset(0)
                }} 
                image={Logo} 
                title='Eat & Drink' 
                sub='BAR &middot; GRILL &middot; ENTERTAINMENT' 
                details='T 215.862.5221' 
                titleSize={this.homeWidthHeaderAdjuster(layout.width)}
                
              />    

                {this.renderBonfireComponent(layout.width)}

              
              
            </Parallax.Layer>

            {/* Page 4 HOTEL AMENITIES*/}
            <Parallax.Layer offset={3} speed={0.5} style={styles.bg4}>
              
              <Header // HEADER
                home={()=> {
                  this.handleDown(0)
                  this.setOffset(0)
                }} 
                image={Logo} 
                title='Hotel Amenities' 
                sub='OUTDOOR POOL &middot; FITNESS CENTER &middot; BUSINESS CENTER' 
                details='T 215.862.5221' 
                titleSize={this.homeWidthHeaderAdjuster(layout.width)}
                
              />    

              <AmenitiesDesktop 
                rooms={()=>this.handleDown(1)} 
                rest={()=>this.handleDown(2)}
                group={()=>this.handleDown(4)}
                events={()=>this.handleDown(5)}
                discover={()=>this.handleDown(6)}
                top={layout.height - layout.height*.1}
                />
              
            </Parallax.Layer>

            
            {/* Page 5 GROUP RESERVATIONS*/}
            <Parallax.Layer offset={4} speed={0.5} style={styles.bg5}>
              
              <Header 
                home={()=> {
                  this.handleDown(0)
                  this.setOffset(0)
                }} 
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
                top={layout.height - layout.height*.1}
              />
              
            </Parallax.Layer>

            
            {/* Page 6 EVENTS*/}
            <Parallax.Layer offset={5} speed={0.5} style={styles.bg7}>
              
              <Header 
                home={()=> {
                  this.handleDown(0)
                  this.setOffset(0)
                }} 
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
                top={layout.height - layout.height*.1}
              />
            </Parallax.Layer>

            {/* Page 6 DISCOVER*/}
            <Parallax.Layer offset={6} speed={0.5} style={styles.bg}>
              
              <Header 
                home={()=> {
                  this.handleDown(0)
                  this.setOffset(0)
                }} 
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
                top={layout.height - layout.height*.1}
              />
              
            </Parallax.Layer>
  
            
  
          </Parallax>
        </div>
      )
    }
  }
)
export default Home