import React, { Component } from 'react'
import { Button, Icon, Grid, Image } from 'semantic-ui-react'
import Parallax from 'react-springy-parallax'
import Animated from 'animated/lib/targets/react-dom'
import '../animate.css'
import Bridge from '../assets/webp/bridge_2.webp'
import Herbs from '../assets/webp/outdoor.webp'
import Logo from '../assets/clarion-logo.png'
// import Linen from '../assets/shattered.png'
import Bouquet from '../assets/webp/bouquet.webp'
// import Discover from '../assets/images/disco2.jpg'
import Mixer from '../assets/webp/mixer.webp'
import Sea from '../assets/webp/sea.webp'
// import NatureText from '../assets/board/nature_text.jpg'
// main components
import Header from '../components/Header'
// import Navbar from '../components/Navbar'
import NavbarDesktop from '../components/NavbarDesktop'
// import BonfireDesktop from '../components/BonfireDesktop'
// import Bonfire from '../components/Bonfire'
import AmenitiesDesktop from '../components/AmenitiesDesktop'
import DiscoverDesktop from '../components/DiscoverDesktop'
import EventsDesktop from '../components/EventsDesktop'
import GroupDesktop from '../components/GroupDesktop'
import RestaurantDesktop from '../components/RestaurantDesktop'
// import Events from '../widgets/Events'

// icons
import BedIcon from '../assets/bed.svg'
import EatIcon from '../assets/eat.svg'
import AmenitiesIcon from '../assets/amenities.svg'
import GroupIcon from '../assets/group.svg'
import EventIcon from '../assets/event.svg'
import DiscoverIcon from '../assets/discover.svg'
import CallIcon from '../assets/call.svg'

// mobile pages
// import Rooms from '../components/Rooms'
import AmenitiesMobile from '../components/AmenitiesMobile'
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
  bg_1: {
    backgroundImage: `url(${Bridge})`,
    backgroundSize: `${layout.width}px ${layout.height}px`
  },
  bg2: {
    // backgroundImage: `url(${NatureText})`,
    // backgroundSize: `${layout.width}px ${layout.height}px`
    // backgroundRepeat: 'repeat',
    // backgroundColor: '#fefefe'
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
  // bg6: {
  //   backgroundImage: `url(${Discover})`,
  //   backgroundSize: `${layout.width}px ${layout.height}px`
  // },
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
  },
  mobileMenuStyle: {
    backgroundColor: 'rgba(5,15,44,0.8)',
    borderRadius: '15px 0px 0px 15px',
    padding: 5,
    color: 'rgb(250,226,173)',
    fontFamily: 'Playfair Display',
    letterSpacing: 1,
    cursor: 'pointer',
    userSelect: 'none'
  },
  mobileMenuIcon: {
    height: 30, 
    backgroundColor: 'rgb(250,226,173)', 
    padding: 5
  }
}

const Home = observer (
  class Homepage extends Component {
    constructor(props){
      super(props)
      this.state = {
        temperature: '',
        weatherDesc: ''
      }
    }
    

    
    componentDidMount(){

      this.getItems(localStorage.getItem('offset'))
      this.storeItems(localStorage.getItem('offset'))

      window.addEventListener('resize', ()=> {
        layout.resizedWidth(window.innerWidth)
      })
      window.addEventListener('resize', ()=> {
        layout.resizedHeight(window.innerHeight)
        // console.log(window.innerHeight)
      })

      this.getWeather()

    }

// 
    getWeather(){
      const APPID = '19087ff6101a2f698425053f2fa21143'
      const CITY = '5203197'
      const URL = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?id=${CITY}&APPID=${APPID}`

      fetch(URL)
        .then(response => response.json())
        .then(data => {
          let kTemp = data.main.temp
          let temperature = Math.round(((kTemp - 273.15) * 1.8) + 32)
          let weatherDesc = data.weather[0].description.toUpperCase()
          this.setState({temperature, weatherDesc})
          // console.log(data.main.temp, data.weather[0].description)
          // console.log(this.state.temperature, this.state.weatherDesc)
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
    selectHomeBG(width){
      if (width > 2000){
        return styles.bg_1
      } else {
        return styles.bg_1
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
    mobileMenu(width){
      if (width < 600){
        return <div 
          style={{
            position: 'relative',
            top: 150,
            
          }}
        >
          {/* Grid Here... */}

          <Grid centered >

            <Grid.Row columns={3}>
              <Grid.Column></Grid.Column>
              <Grid.Column></Grid.Column>
              <Grid.Column onClick={()=>this.handleDown(1)} textAlign='left' className='animated fadeInLeft rooms_menu' style={styles.mobileMenuStyle}>
                <Image src={BedIcon} style={styles.mobileMenuIcon} avatar/>
                <span style={{marginLeft: 5, color: 'rgb(250,226,173)'}}>Rooms</span>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={3}>
              <Grid.Column></Grid.Column>
              <Grid.Column></Grid.Column>
              <Grid.Column onClick={()=>this.handleDown(2)} textAlign='left' className='animated fadeInLeft eat_menu' style={styles.mobileMenuStyle}>
                <Image src={EatIcon} style={styles.mobileMenuIcon} avatar/>
                <span style={{marginLeft: 5, color: 'rgb(250,226,173)'}}>Eat & Drink</span>
              </Grid.Column>
            </Grid.Row>
            
            <Grid.Row columns={3}>
              <Grid.Column></Grid.Column>
              <Grid.Column></Grid.Column>
              <Grid.Column onClick={()=>this.handleDown(3)} textAlign='left' className='animated fadeInLeft amenities_menu' style={styles.mobileMenuStyle}>
                <Image src={AmenitiesIcon} style={styles.mobileMenuIcon} avatar/>
                <span style={{marginLeft: 5, color: 'rgb(250,226,173)'}}>Amenities</span>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={3}>
              <Grid.Column></Grid.Column>
              <Grid.Column></Grid.Column>
              <Grid.Column onClick={()=>this.handleDown(4)} textAlign='left' className='animated fadeInLeft group_menu' style={styles.mobileMenuStyle}>
                <Image src={GroupIcon} style={styles.mobileMenuIcon} avatar/>
                <span style={{marginLeft: 5, color: 'rgb(250,226,173)'}}>Groups</span>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={3}>
              <Grid.Column></Grid.Column>
              <Grid.Column></Grid.Column>
              <Grid.Column onClick={()=>this.handleDown(5)} textAlign='left' className='animated fadeInLeft event_menu' style={styles.mobileMenuStyle}>
                <Image src={EventIcon} style={styles.mobileMenuIcon} avatar/>
                <span style={{marginLeft: 5, color: 'rgb(250,226,173)'}}>Events</span>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={3}>
              <Grid.Column></Grid.Column>
              <Grid.Column></Grid.Column>
              <Grid.Column onClick={()=>this.handleDown(6)} textAlign='left' className='animated fadeInLeft discover_menu' style={styles.mobileMenuStyle}>
                <Image src={DiscoverIcon} style={styles.mobileMenuIcon} avatar/>
                <span style={{marginLeft: 5, color: 'rgb(250,226,173)'}}>Discover</span>
              </Grid.Column>
            </Grid.Row>
            
            <Grid.Row columns={3}>
              <Grid.Column></Grid.Column>
              <Grid.Column></Grid.Column>
              <Grid.Column as='a' href='tel:215-862-5221' textAlign='left' className='animated fadeInLeft reservations_menu' style={styles.mobileMenuStyle}>
                <Image src={CallIcon} style={styles.mobileMenuIcon} avatar/>
                <span style={{marginLeft: 5, color: 'rgb(250,226,173)'}}>Reservations</span>
              </Grid.Column>
            </Grid.Row>



          </Grid>
          
          <div style={{padding: 10, position: 'absolute', top: layout.height - 200, backgroundColor: 'rgba(0,0,0,0.7)', width: '100%', height: 100}}>
            <Button fluid style={{backgroundColor: 'rgb(153,27,50)', color: 'rgb(250,226,173)'}} as='a' href='https://www.choicehotels.com/pennsylvania/new-hope/clarion-hotels/pa668'>BOOK NOW</Button>
          </div>


        </div>
      } else {
        return null
      }
      
    }
    homeWidthNavbarComponent(width){
      if (width < 600){
        return null
      } else {
        return <NavbarDesktop
          temp={this.state.temperature}
          wdesc={this.state.weatherDesc}
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
    
    homeWidthDirectionsDisplay(width){
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
        return null
        // <Rooms 
        //   topMargin={this.heightAdjuster(layout.height)}
        //   rest={()=>{
        //     this.handleDown(2)
        //     this.storeItems(2)
        //   }} 
        //   amenities={()=>{
        //     this.handleDown(3)
        //     this.storeItems(3)
        //   }} 
        //   events={()=>{
        //     this.handleDown(5)
        //     this.storeItems(5)
        //   }} 
        //   discover={()=>{
        //     this.handleDown(6)
        //     this.storeItems(6)
        //   }}
        //   />
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
        return null 
        // <Bonfire 
        //   rooms={()=>this.handleDown(1)} 
        //   amenities={()=>this.handleDown(3)} 
        //   events={()=>this.handleDown(5)} 
        //   discover={()=>this.handleDown(6)}
        //   />
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
    renderAmenities(width){
      if(width < 600) {
        return <AmenitiesMobile 
          rooms={()=>this.handleDown(1)} 
          rest={()=>this.handleDown(2)}
          group={()=>this.handleDown(4)}
          events={()=>this.handleDown(5)}
          discover={()=>this.handleDown(6)}
          top={layout.height - layout.height*.1}
        />
      } else {
        return <AmenitiesDesktop 
          rooms={()=>this.handleDown(1)} 
          rest={()=>this.handleDown(2)}
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
      this.refs.parallax.scrollTo(offset)
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
            <Parallax.Layer offset={0} speed={0.5} style={this.selectHomeBG(layout.width)}>

              

              <Header 
                home={()=> {
                  this.handleDown(0)
                  this.setOffset(0)
                }} 
                image={Logo} title='Clarion Inn & Suites' 
                sub='NEW HOPE - LAMBERTVILLE' 
                details='T 215.862.5221' 
                titleSize={this.homeWidthHeaderAdjuster(layout.width)}/>
              
              
              {this.mobileMenu(layout.width)}
              
              <div style={Object.assign({top: this.homeHeightMapAdjuster(layout.height)}, styles.directions)} className='animated slideInUp'>
                <Button primary style={Object.assign({display: this.homeWidthDirectionsDisplay(layout.width), zIndex: 1})} as='a' href='https://www.google.com/maps/place/6426+Lower+York+Rd,+New+Hope,+PA+18938'><Icon name='map'/> Get Directions</Button>
              </div>

              <Parallax.Layer offset={0.90 } speed={1} style={{ backgroundColor: 'rgba(0,0,0, 0.85)', height: 100}}>
                {this.homeWidthNavbarComponent(layout.width)}
              </Parallax.Layer>
              
            </Parallax.Layer>
            
            {/* Page 2 ROOMS & SUITES*/}
            <Parallax.Layer offset={1} speed={0.5} style={styles.bg_1}>
              
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
                sub='OUTDOOR POOL &middot; FITNESS CENTER'
                details='T 215.862.5221' 
                titleSize={this.homeWidthHeaderAdjuster(layout.width)}
                
              />    

              {this.renderAmenities(layout.width)}
              
            </Parallax.Layer>

            
            {/* Page 5 GROUP RESERVATIONS*/}
            <Parallax.Layer offset={4} speed={0.5} style={styles.bg5}>
              
              <Header 
                home={()=> {
                  this.handleDown(0)
                  this.setOffset(0)
                }} 
                image={Logo} title='Group Reservations' 
                sub='WEDDINGS &middot; CONFERENCES &middot; TEAMS' 
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
                image={Logo} title='Events & Shows' 
                sub='THE RRAZZ ROOM &middot; KARAOKE NIGHTS' 
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
            <Parallax.Layer offset={6} speed={0.5} style={styles.bg_1}>
              
              <Header 
                home={()=> {
                  this.handleDown(0)
                  this.setOffset(0)
                }} 
                image={Logo} 
                title='Discover New Hope' 
                sub='MAIN ST &middot; PEDDLERS VILLAGE'
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