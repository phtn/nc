import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Item, Menu, Container, Button, Icon } from 'semantic-ui-react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Pool from '../assets/webp/pool.webp'
import Courtyard from '../assets/webp/court.webp'
import Lounge from '../assets/webp/lounge.webp'
import Lobby from '../assets/webp/lobby.webp'
import Bar from '../assets/webp/bar.webp'
import BC from '../assets/webp/bc.webp'
import Conference from '../assets/webp/conference.webp'
import Fitness from '../assets/webp/fitness.webp'


import Chevron from '../assets/chevron.svg'
import Lefty from '../assets/left.svg'


const styles = {
  container: {
    padding: '80px 0px 0px 0px',
    
  },
  innerContainer: {
    height: 470,
    backgroundColor: 'rgba(238,238,238,0.0)',
    padding: '10px 20px 0px 20px',
    margin: 5
  },
  header: {
    color: '#050f2c',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    fontSize: 30,
    textAlign: 'center'
  },

  tabs: {
    fontFamily: 'Playfair Display',
    color: `rgb(250,226,173)`,
  },
  address: {
    color: `#333`,
    marginTop: 10,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    fontSize: 12,
    textShadow: '2px 2px 2px #eee'
  },
  menu: {
    position: 'absolute',
    top: 140,
    left: 750,
    width: 450,
  },
  clarionButton: {
    backgroundColor: 'rgb(153,27,50)',
    color: '#eee',
    fontSize: 16,
    letterSpacing: 1
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






const AmenitiesDesktop = observer (
  class AmenitiesPage extends Component {
    render(){
      return(
        <div style={styles.container}>
          <div style={styles.innerContainer}>
            
              
          <Slider {...settings} >

            <div>
            <Item.Group>
              <Item>
                  
                <Item.Image size='huge' src={Pool} />

                <Item.Content>
                  
                  <Item.Header style={styles.header}>Gorgeous Outdoor Pool</Item.Header>

                  <Item.Meta><Icon name='user'/> &nbsp; Day Pass:&nbsp; $10 &nbsp;&middot;&nbsp; </Item.Meta>
                  <Item.Meta><Icon name='clock'/> &nbsp; Open: 10AM &nbsp;&middot;&nbsp; Close: 10PM</Item.Meta>
                  <Item.Extra>
                    <Menu vertical fluid style={{marginRight: 10}}>
                     
                      <Menu.Item style={{fontSize: 16}}>Cabana Full Bar</Menu.Item>
                      <Menu.Item style={{fontSize: 16}}>Live Music</Menu.Item>
                      <Menu.Item style={{fontSize: 16}}>Free Towels</Menu.Item>
                      <Menu.Item style={{fontSize: 16}}>
                      <Button animated='fade' style={styles.clarionButton} fluid>
                        <Button.Content  visible>ANNUAL POOL MEMBERSHIP</Button.Content>
                        <Button.Content hidden>
                          CALL 215 - 862 - 5221
                        </Button.Content>
                      </Button>
                      </Menu.Item>
                      
                    </Menu>
                  </Item.Extra>
                  
                </Item.Content>
              </Item>
            </Item.Group>
            </div>

            <div style={{padding: 0}}>
            <Item.Group>
              <Item>
                <Item.Image  src={Courtyard} fluid/>

                <Item.Content>
                  <Item.Header style={styles.header}>The Courtyard</Item.Header>
                  

                  
                  <Item.Extra>
                    <Menu vertical fluid>
                      
                      <Menu.Item style={{fontSize: 16}}>Private Parties</Menu.Item>
                      <Menu.Item style={{fontSize: 16}}>Lounge Area</Menu.Item>
                      <Menu.Item style={{fontSize: 16}}>Great space for Gatherings</Menu.Item>
                      <Menu.Item style={{fontSize: 16}}>
                      <Button animated='fade' style={styles.clarionButton} fluid>
                        <Button.Content  visible>CHECK AVAILABILITY</Button.Content>
                        <Button.Content hidden>
                          CALL 215 - 862 - 5221
                        </Button.Content>
                      </Button>
                      </Menu.Item>
                      
                    </Menu>
                  </Item.Extra>
                  
                </Item.Content>
              </Item>
            </Item.Group>
            </div>

            <div>
            <Item.Group>
              <Item>
                <Item.Image size='huge' src={Lounge} style={{width: '100%'}}/>

                <Item.Content>
                  <Item.Header style={styles.header}>The Lounge</Item.Header>
                  

                  
                  <Item.Extra>
                    <Menu vertical fluid>
                      
                      <Menu.Item style={{fontSize: 16}}>Bar & Restaurant Open</Menu.Item>
                      <Menu.Item style={{fontSize: 16}}>Elegant Design perfect for Meet & Greet</Menu.Item>
                      <Menu.Item style={{fontSize: 16}}>Perfect for Family Gatherings</Menu.Item>
                      <Menu.Item style={{fontSize: 16}}>Private Parties</Menu.Item>
                      <Button animated='fade' style={styles.clarionButton} fluid>
                        <Button.Content  visible>CHECK AVAILABILITY</Button.Content>
                        <Button.Content hidden>
                          CALL 215 - 862 - 5221
                        </Button.Content>
                      </Button>
                      
                    </Menu>
                  </Item.Extra>
                  
                </Item.Content>
              </Item>
            </Item.Group>
            </div>

            <div>
            <Item.Group>
              <Item>
                <Item.Image size='huge' src={Bar} />

                <Item.Content>
                  <Item.Header style={styles.header}>Bonfire Bar & Grill</Item.Header>
                  

                  
                  <Item.Extra>
                    <Menu vertical fluid>
                     
                      <Menu.Item style={{fontSize: 16}}>Famous for our Mexican Food Selections</Menu.Item>
                      <Menu.Item style={{fontSize: 16}}>Modern Designed Bar</Menu.Item>
                      <Menu.Item style={{fontSize: 16}}>Premium Craft Beer</Menu.Item>
                      <Menu.Item style={{fontSize: 16}}>Saturday Karaoke Nights</Menu.Item>
                      <Button animated='fade' style={styles.clarionButton} fluid>
                        <Button.Content  visible>RESERVATIONS</Button.Content>
                        <Button.Content hidden>
                          CALL 215 - 862 - 5221
                        </Button.Content>
                      </Button>
                      
                    </Menu>
                  </Item.Extra>
                  
                </Item.Content>
              </Item>
            </Item.Group>
            </div>

            <div>
            <Item.Group>
              <Item>
                <Item.Image size='huge' src={Lobby} />

                <Item.Content>
                  <Item.Header style={styles.header}>Elegantly Designed Lobby</Item.Header>
                  
                  <Item.Extra>
                    <Menu vertical fluid>
                      
                      <Menu.Item style={{fontSize: 16}}>24/7 FREE Coffee</Menu.Item>
                      <Menu.Item style={{fontSize: 16}}>24/7 Guest Services</Menu.Item>
                      <Menu.Item style={{fontSize: 16}}>Comfortable Lounge Area</Menu.Item>
                      <Menu.Item style={{fontSize: 16}}>Check-In: 3PM | Check-Out: 11AM</Menu.Item>
                      <Button animated='fade' style={styles.clarionButton} fluid>
                        <Button.Content  visible>RESERVATIONS</Button.Content>
                        <Button.Content hidden>
                          CALL 215 - 862 - 5221
                        </Button.Content>
                      </Button>
                      
                    </Menu>
                  </Item.Extra>
                  
                </Item.Content>
              </Item>
            </Item.Group>
            </div>

            <div>
            <Item.Group>
              <Item>
                <Item.Image size='huge' src={BC} />

                <Item.Content>
                  <Item.Header style={styles.header}>Business Center</Item.Header>
                  

                  
                  <Item.Extra>
                    <Menu vertical fluid>
                      
                      <Menu.Item style={{fontSize: 16}}>High Speed Internet</Menu.Item>
                      <Menu.Item style={{fontSize: 16}}>Print Boarding Pass</Menu.Item>
                      <Menu.Item style={{fontSize: 16}}>Print from your Room</Menu.Item>
                      <Menu.Item style={{fontSize: 16}}>Executive Seats</Menu.Item>
                      <Menu.Item style={{fontSize: 16}}>Open 24/7</Menu.Item>
                      <Button animated='fade' style={styles.clarionButton} fluid>
                        <Button.Content  visible>INQUIRE</Button.Content>
                        <Button.Content hidden>
                          CALL 215 - 862 - 5221
                        </Button.Content>
                      </Button>
                      
                    </Menu>
                  </Item.Extra>
                  
                </Item.Content>
              </Item>
            </Item.Group>
            </div>

            <div>
            <Item.Group>
              <Item>
                <Item.Image size='huge' src={Fitness} />

                <Item.Content>
                  <Item.Header style={styles.header}>Fitness Center</Item.Header>
                  

                  <Item.Meta><Icon name='clock'/> &nbsp; Open: 5AM &nbsp;&middot;&nbsp; Close: 10PM</Item.Meta>
                  <Item.Extra>
                    <Menu vertical fluid>
                      
                      <Menu.Item style={{fontSize: 16}}>Treadmills (2)</Menu.Item>
                      <Menu.Item style={{fontSize: 16}}>Steppers</Menu.Item>
                      <Menu.Item style={{fontSize: 16}}>Dumbells</Menu.Item>
                      <Button animated='fade' style={styles.clarionButton} fluid>
                        <Button.Content  visible>INQUIRE</Button.Content>
                        <Button.Content hidden>
                          CALL 215 - 862 - 5221
                        </Button.Content>
                      </Button>
                      
                    </Menu>
                  </Item.Extra>
                  
                </Item.Content>
              </Item>
            </Item.Group>
            </div>

            <div>
            <Item.Group>
              <Item>
                <Item.Image size='huge' src={Conference} />

                <Item.Content>
                  <Item.Header style={styles.header}>Conference Center</Item.Header>
                  

                  <Item.Extra>
                    <Menu vertical fluid>
                      
                      <Menu.Item style={{fontSize: 16}}>20 People Meeting Room</Menu.Item>
                      <Menu.Item style={{fontSize: 16}}>High Speed Internet</Menu.Item>
                      <Menu.Item style={{fontSize: 16}}>Projector & White Screen</Menu.Item>
                      <Button animated='fade' style={styles.clarionButton} fluid>
                        <Button.Content  visible>CHECK AVAILABILITY</Button.Content>
                        <Button.Content hidden>
                          CALL 215 - 862 - 5221
                        </Button.Content>
                      </Button>
                      
                    </Menu>
                  </Item.Extra>
                  
                </Item.Content>
              </Item>
            </Item.Group>
            </div>

          </Slider>
                  

              

            

          </div>
          
          <div style={{position: 'absolute', top: this.props.top, width: window.innerWidth, zIndex: 2 }}>
            <Menu fluid inverted widths={5} style={{borderRadius: 0}}>
              <Menu.Item name='rooms' active={false} link  onClick={this.props.rooms} >
                <span style={styles.tabs}>ROOMS</span>
              </Menu.Item>

              <Menu.Item name='eat' active={false} link  onClick={this.props.rest} >
                <span style={styles.tabs}>EAT & DRINK</span>
              </Menu.Item>

              <Menu.Item name='group' active={false} link  onClick={this.props.group} >
                <span style={styles.tabs}>GROUP</span>
              </Menu.Item>

              <Menu.Item name='events' active={false} link  onClick={this.props.events} >
                <span style={styles.tabs}>EVENTS</span>
              </Menu.Item>

              <Menu.Item name='discover' active={false} link  onClick={this.props.discover} >
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
export default AmenitiesDesktop