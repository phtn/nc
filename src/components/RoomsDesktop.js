import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Item, Button, Icon, Menu, Container, Message, Image } from 'semantic-ui-react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// import Doubles from '../assets/images/erNDD2.png'
// import King from '../assets/images/eNK1.png'
// import Suites from '../assets/board/erSA_400.jpg'


// import Lefty from '../assets/left-arrow.svg'
import Righty from '../assets/arrow-right.svg'
import Back from '../assets/new-left-arrow.svg'


const styles = {
  container: {
    padding: '130px 0px 0px 0px',
    
  },
  innerContainer: {
    height: 470,
    backgroundColor: 'transparent',
    padding: '0px 50px 0px 50px',
  },
  header: {
    fontSize: 26,
    color: '#050f2c',
    fontFamily: 'Roboto, sans-serif',
    // fontWeight: 100,
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
  },
  backButton: {
    height: 40,
    position: 'absolute',
    margin: 10,
    cursor: 'pointer'
  },
  clarionButton: {
    backgroundColor: 'rgb(153,27,50)',
    color: '#fff'
  }
}

const Right = props => (
  <div>
    <img src={Righty} onClick={props.onClick} height={40} className='slick-next blink_me' alt='' style={{marginLeft: 20, maxHeight: 100}} />
  </div>
)

const Left = props => (
  <div style={{ paddingRight: 50}}>
    {/* <img src={Lefty} onClick={props.onClick} height={40} className='slick-prev' alt='' style={{marginRight: 20, maxHeight: 100}}/> */}
  </div>
)


const RoomDesc = props => (
  <div>
    <Menu.Item><Message size='big'>{props.description}</Message></Menu.Item>
    

    <Menu.Item>
      <Button  style={styles.clarionButton} fluid as='a' href='https://www.choicehotels.com/pennsylvania/new-hope/clarion-hotels/pa668'><Icon name='bed' />BOOK NOW</Button>
    </Menu.Item>
  </div>
)

const RoomAmenities = props => (
  <div>
    <Menu.Item>
      <Button basic color='red' fluid as='a' href=''><Icon name='universal access' />ROOM AMENITIES</Button>
    </Menu.Item>
    <Menu.Item>Microwave & Refrigerator</Menu.Item>
    <Menu.Item>Free WiFi</Menu.Item>
    <Menu.Item>HD Channel TV</Menu.Item>
    <Menu.Item>Coffee Maker with Premium Coffee & Tea</Menu.Item>
    <Menu.Item>All Brand New Rooms</Menu.Item>
    <Menu.Item>Bedside Table Power Outlets</Menu.Item>

    <Menu.Item>
      <Button  style={styles.clarionButton} fluid as='a' href='https://www.choicehotels.com/pennsylvania/new-hope/clarion-hotels/pa668'><Icon name='bed' />BOOK NOW</Button>
    </Menu.Item>
  </div>
)

const StayInfo = props => (
  <div>
    <Menu.Item>
      <Button basic color='red' fluid as='a' href=''><Icon name='universal access' />STAY INFO</Button>
    </Menu.Item>
    <Menu.Item><Item.Meta><Icon name='user'/> &nbsp; Sleeps 2</Item.Meta></Menu.Item>
    <Menu.Item><Item.Meta><Icon name='clock'/> &nbsp; Check-In: 3PM </Item.Meta></Menu.Item>
    <Menu.Item><Item.Meta><Icon name='clock'/> &nbsp; Check-Out: 11AM</Item.Meta></Menu.Item>
    <Menu.Item><Item.Meta><Icon name='food'/> &nbsp; Free Continental Breakfast </Item.Meta></Menu.Item>


    <Menu.Item>
      <Button 
        style={styles.clarionButton} 
        // className='blink_fast'
        fluid as='a' 
        href='https://www.choicehotels.com/pennsylvania/new-hope/clarion-hotels/pa668'>
        <Icon name='bed' />BOOK NOW
      </Button>

    </Menu.Item>
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
  dots: false,
  nextArrow: <Right/>,
  prevArrow: <Left/>,
}


const RoomDesktop = observer (
  class RoomPage extends Component {
    render(){
      return(
        <div style={styles.container} id='roomImage'>
          <Image 
            src={Back} 
            style={styles.backButton} 
            onClick={this.props.back}
            className='animated fadeInLeft back_button'  
          />
          
          <div style={styles.innerContainer}>
          
              <div >
                
                <Item.Group>
                  <Item>
                    <Item.Image 
                      size='huge' 
                      src={this.props.image} 
                      style={{marginLeft:10, width: window.innerWidth*.600 }} 
                      className='animated fadeIn lazy'
                    />

                    <Item.Content>
                      
                      <Item.Extra className='animated fadeInUp'>
                        <Menu vertical fluid style={{marginRight: 10}}>
                          <Menu.Item>
                            <span style={styles.header}>{this.props.header}</span>
                            <br/>
                            <Item.Meta><Icon name='star' color='yellow'/>&nbsp; &nbsp;{this.props.tag}</Item.Meta>
                          </Menu.Item>

                          <Slider {...settings} >
                            <RoomDesc description={this.props.description}/>
                            <RoomAmenities/>
                            <StayInfo/>
                          </Slider>
                        </Menu>
                      </Item.Extra>
                      
                    </Item.Content>
                  </Item>
                </Item.Group>
              </div>

              
          </div>
          
          <div style={{position: 'absolute', top: this.props.top, width: window.innerWidth }}>
            <Menu fluid inverted widths={5} style={{borderRadius: 0}}>
              <Menu.Item name='eat' active={false} link  onClick={this.props.rest} >
                <span style={styles.tabs}>EAT & DRINK</span>
              </Menu.Item>

              <Menu.Item name='eat' active={false} link  onClick={this.props.amenities} >
                <span style={styles.tabs}>HOTEL AMENITIES</span>
              </Menu.Item>

              <Menu.Item name='eat' active={false} link  onClick={this.props.group} >
                <span style={styles.tabs}>GROUP RESERVATIONS</span>
              </Menu.Item>

              <Menu.Item name='eat' active={false} link  onClick={this.props.events} >
                <span style={styles.tabs}>EVENTS</span>
              </Menu.Item>

              <Menu.Item name='eat' active={false} link  onClick={this.props.discover} >
                <span style={styles.tabs}>DISCOVER</span>
              </Menu.Item>

            </Menu>

            <div style={styles.address}>
              <Container textAlign='center'>6426 Lower York Rd New Hope, PA 18938 &middot; Clarion Inn & Suites &middot; Terms of Use | Privacy Policy</Container>
            </div>
          </div>

          
        </div>
      )
    }
  }
)
export default RoomDesktop