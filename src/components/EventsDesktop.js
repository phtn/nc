import React from 'react'
import { Menu, Container, Image} from 'semantic-ui-react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import RRAZZ from '../assets/board/rrazz.jpg'
import Poker from '../assets/board/Poker.jpg'
import PoolPass from '../assets/board/PoolPass.jpg'
import Boozy from '../assets/board/Boozy.jpg'
import Karaoke from '../assets/board/karaoke3.jpg'
import Happy from '../assets/board/happy.png'
import Chevron from '../assets/chevron.svg'
import Lefty from '../assets/left.svg'

const styles = {
  container: {
    padding: '130px 0px 0px 0px',
  },
  innerContainer: {
    height: 470,
    backgroundColor: 'transparent',
    padding: '10px 100px 0px 100px',
  },
  header: {
    fontSize: 26,
    marginTop: 15,
    color: '#050f2c'
  },
  newIcon: {
    height: 20,
    marginRight: 15
  },
  tabs: {
    fontFamily: 'Playfair Display',
    fontSize: 16,
    color: `rgb(250,226,173)`,
    letterSpacing: 1
  },
  address: {
    color: `#eee`,
    marginTop: -5,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    fontSize: 16
  }
}

const Right = props => (
  <div>
    <img src={Chevron} onClick={props.onClick} height={40} className='slick-next' alt=''/>
  </div>
)

const Left = props => (
  <div style={{ paddingRight: 50}}>
    <img src={Lefty} onClick={props.onClick} height={40} className='slick-prev' alt=''/>
  </div>
)



const settings = {
  infinite: true,
  speed: 1000,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  autoplay: false,
  dots: true,
  nextArrow: <Right/>,
  prevArrow: <Left/>,
}



export default props => (
  <div style={styles.container}>
    <div style={styles.innerContainer}>
      <Slider {...settings} >

        <div style={{margin: '0 auto'}}>
          <Image.Group>
            
            <Image size='medium' src={Boozy} spaced style={{maxWidth: 600}}/>
            <Image size='medium' src={PoolPass} spaced style={{maxWidth: 600}}/>
            <Image size='medium' src={Happy} spaced style={{maxWidth: 600}}/>
            <Image size='medium' src={Poker} spaced style={{maxWidth: 600}}/>
            <Image size='medium' src={Karaoke} spaced style={{maxWidth: 600}}/>
            
            <Image size='medium' src={RRAZZ} spaced style={{maxWidth: 600}} href='http://www.therrazzroom.com/events'/>

          </Image.Group>
          
        </div>


       

      </Slider>
    </div>
    
    <div style={{position: 'absolute', top: props.top, width: window.innerWidth }}>
      <Menu fluid inverted widths={5} style={{borderRadius: 0}}>
        
        <Menu.Item name='rooms' active={false} link  onClick={props.rooms} >
          <span style={styles.tabs}>ROOMS</span>
        </Menu.Item>
        <Menu.Item name='eat' active={false} link  onClick={props.rest} >
          <span style={styles.tabs}>EAT & DRINK</span>
        </Menu.Item>

        <Menu.Item name='eat' active={false} link  onClick={props.amenities} >
          <span style={styles.tabs}>HOTEL AMENITIES</span>
        </Menu.Item>

        <Menu.Item name='eat' active={false} link  onClick={props.group} >
          <span style={styles.tabs}>GROUP RESERVATIONS</span>
        </Menu.Item>

        <Menu.Item name='eat' active={false} link  onClick={props.discover} >
          <span style={styles.tabs}>DISCOVER</span>
        </Menu.Item>

        

      </Menu>

      <div style={styles.address}>
        <Container textAlign='center'>6426 Lower York Rd New Hope, PA 18938 &middot; Clarion Inn & Suites &middot; Terms of Use | Privacy Policy</Container>
      </div>
      
    </div>

    
  </div>
)