import React from 'react'
import { Image, Button, Icon, Menu, Container, Label, Message } from 'semantic-ui-react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Bonfire from '../assets/board/bonfire.PNG'
import Chimi from '../assets/board/chimi.jpg'
import Beans from '../assets/board/beans.jpg'
import Shrimp from '../assets/board/shrimp.jpg'
import Burger from '../assets/board/burger.jpg'
import Humus1 from '../assets/board/humus1.jpg'
import Humus2 from '../assets/board/humus2.jpg'

import Breakfast from '../assets/images/erBRK1.png'
import Breakfast2 from '../assets/images/brk11.jpg'
import Breakfast3 from '../assets/images/brk12.jpg'
import Breakfast4 from '../assets/images/brk13.jpg'



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

  tabs: {
    fontFamily: 'Playfair Display',
    color: `rgb(250,226,173)`,
  },
  address: {
    color: `#fff`,
    marginTop: 10,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    fontSize: 12,
    textShadow: '2px 2px 2px #333'
  },
  menu: {
    position: 'absolute',
    top: 140,
    left: 750,
    width: 450,
  },
  bonfireLogo: {
    position: 'absolute',
    top: 10,
    left: '65%',
    height: 100
  }
}



const settings = {
  infinite: true,
  speed: 7000,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  autoplay: true,
  dots: true,

}



export default props => (
  <div style={styles.container}>
    <div style={styles.innerContainer}>
      
        <Slider {...settings}>

          <div style={{margin: '0 auto'}}>
            <Image.Group style={{width: window.innerWidth*.666}}>
              <Image size='huge' src={Breakfast} spaced />
            </Image.Group>
            <Message positive style={{maxWidth: 600}} icon>
              <Icon name='food' />
              <Message.Content>
                <Message.Header>Hot Buffet Breakfast</Message.Header>
                $12 per adult &nbsp;&middot;&nbsp; 8$ for kids
              </Message.Content>
            </Message>
          </div>
          <div style={{margin: '0 auto'}}>
            <Image.Group style={{width: window.innerWidth*.666}}>
              <Image size='huge' src={Breakfast2} spaced />
            </Image.Group>
            <Message positive style={{maxWidth: 600}} icon>
              <Icon name='food' />
              <Message.Content>
                <Message.Header>Hot Buffet Breakfast</Message.Header>
                $12 per adult &nbsp;&middot;&nbsp; 8$ for kids
              </Message.Content>
            </Message>
          </div>
          <div style={{margin: '0 auto'}}>
            <Image.Group>
              <Image size='huge' src={Breakfast3} spaced style={{maxWidth: 600}}/>
            </Image.Group>
            <Message positive style={{maxWidth: 600}} icon>
              <Icon name='food' />
              <Message.Content>
                <Message.Header>Make your own Waffles and toppings</Message.Header>
                $12 per adult &nbsp;&middot;&nbsp; 8$ for kids
              </Message.Content>
            </Message>
          </div>
          <div style={{margin: '0 auto'}}>
            <Image.Group>
              <Image size='huge' src={Breakfast4} spaced style={{maxWidth: 600}}/>
            </Image.Group>
            <Message positive style={{maxWidth: 600}} icon>
              <Icon name='food' />
              <Message.Content>
                <Message.Header>Make your own Waffles and toppings</Message.Header>
                $12 per adult &nbsp;&middot;&nbsp; 8$ for kids
              </Message.Content>
            </Message>
          </div>

          <div style={{margin: '0 auto'}}>
            <Image.Group>
              <Image size='medium' src={Shrimp} spaced/>
              <Image size='medium' src={Beans} />
            </Image.Group>
          </div>

          <div>
            <Image.Group>
              <Image size='medium' src={Burger} />
              <Image size='medium' src={Chimi} />
            </Image.Group>
          </div>

          <div>
            <Image.Group>
              <Image size='medium' src={Humus2} />
              <Image size='medium' src={Humus1} />
            </Image.Group>
          </div>

        </Slider>

        <div style={styles.menu}>
          <Menu vertical fluid>
            <Menu.Item>
              <Button disabled fluid as='a' href=''><Icon name='food' />BONFIRE'S POPULAR CHOICES</Button>
            </Menu.Item>
            <Menu.Item>
              <Label floated='right' color='teal'>14</Label>
              Chimichangga
            </Menu.Item>
            <Menu.Item>
              <Label floated='right' color='teal'>14</Label>
              Fajitas
            </Menu.Item>
            <Menu.Item>
              <Label floated='right' color='teal'>14</Label>
              Bestek Ranchero
            </Menu.Item>
            <Menu.Item>
              <Label floated='right' color='teal'>14</Label>
              Tostadas (3)
            </Menu.Item>
            <Menu.Item>
              <Label floated='right' color='teal'>3</Label>
              Tacos
            </Menu.Item>
            <Menu.Item>
              <Label floated='right' color='teal'>14</Label>
              Quesadillas
            </Menu.Item>
            <Menu.Item>
              <Label floated='right' color='teal'>15</Label>
              Sopezz
            </Menu.Item>
            <Menu.Item>
              <Button primary fluid ><Icon name='birthday' />RESERVATIONS</Button>
            </Menu.Item>
          </Menu>
        </div>
          
             

        

       

    </div>
    
    <div style={{position: 'absolute', top: props.top, width: window.innerWidth }}>
      <Menu fluid inverted widths={5}>
        <Menu.Item name='eat' active={false} link  onClick={props.rooms} >
          <span style={styles.tabs}>ROOMS</span>
        </Menu.Item>

        <Menu.Item name='amenities' active={false} link  onClick={props.amenities} >
          <span style={styles.tabs}>HOTEL AMENITIES</span>
        </Menu.Item>

        <Menu.Item name='eat' active={false} link  onClick={props.group} >
          <span style={styles.tabs}>GROUP RESERVATIONS</span>
        </Menu.Item>

        <Menu.Item name='eat' active={false} link  onClick={props.events} >
          <span style={styles.tabs}>EVENTS</span>
        </Menu.Item>

        <Menu.Item name='eat' active={false} link  onClick={props.discover} >
          <span style={styles.tabs}>DISCOVER</span>
        </Menu.Item>

      </Menu>

      <div style={styles.address}>
        <Container textAlign='center'>6426 Lower York Rd New Hope, PA 18938 &middot; Clarion Inn & Suites &middot; Terms of Use | Privacy Policy</Container>
      </div>
    </div>

    

    <div><img src={Bonfire} style={styles.bonfireLogo} alt=''/></div>
  </div>
)