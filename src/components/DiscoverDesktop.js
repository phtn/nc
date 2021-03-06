import React from 'react'
import { Menu, Container, Message, Image} from 'semantic-ui-react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Discover1 from '../assets/webp/discovery.webp'
import Discover3 from '../assets/board/nh1.JPG'
import Discover4 from '../assets/board/nh2.jpg'
import Discover5 from '../assets/board/nh3.jpg'
import Discover6 from '../assets/webp/pv.webp'

import Chevron from '../assets/chevron.svg'
import Lefty from '../assets/left.svg'

const styles = {
  container: {
    padding: '130px 0px 0px 0px',
  },
  innerContainer: {
    height: 470,
    backgroundColor: 'transparent',
    padding: '10px 50px 0px 50px',
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
            <Image size='medium' src={Discover1} spaced style={{maxWidth: 600, maxHeight: 200}}/>
            <Image size='medium' src={Discover3} spaced style={{maxWidth: 600, maxHeight: 200}}/>
            <Image size='medium' src={Discover4} spaced style={{maxWidth: 600, maxHeight: 200}}/>
            <Image size='medium' src={Discover5} spaced style={{maxWidth: 600, maxHeight: 200}}/>
            <Image size='medium' src={Discover6} spaced style={{maxWidth: 600, maxHeight: 200}}/>
          </Image.Group>
          <Message inverted>
            <Message.Content>
              <Message.Header>New Hope Bridge & Main Street: &nbsp; Distance: 3.3 miles &middot; Drive: 5 minutes from the Hotel</Message.Header>
            </Message.Content>
          </Message>
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

        <Menu.Item name='eat' active={false} link  onClick={props.events} >
          <span style={styles.tabs}>EVENTS</span>
        </Menu.Item>

        

      </Menu>

      <div style={styles.address}>
        <Container textAlign='center'>6426 Lower York Rd New Hope, PA 18938 &middot; Clarion Inn & Suites &middot; Terms of Use | Privacy Policy</Container>
      </div>
    </div>

    
  </div>
)