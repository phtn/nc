import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Item, Menu, Container, Button, Icon } from 'semantic-ui-react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Pool from '../assets/images/pool3.png'
import Courtyard from '../assets/board/court1.jpg'
import Lounge from '../assets/board/lounge1.jpg'
import Lobby from '../assets/board/lobby1.jpg'
import Bar from '../assets/board/bar1.jpg'
import BC from '../assets/board/bc1.jpg'
import Conference from '../assets/board/conference.jpg'
import Fitness from '../assets/board/fitness.jpg'


import Chevron from '../assets/chevron.svg'
import Lefty from '../assets/left.svg'


const styles = {
  container: {
    padding: '130px 0px 0px 0px',
    
  },
  innerContainer: {
    height: 470,
    backgroundColor: 'rgba(238,238,238,0.0)',
    padding: '10px 50px 0px 50px',
  },
  header: {
    marginTop: 10,
    color: '#050f2c',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    fontSize: 36
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

            <div style={{padding: 10, border: '1px solid red'}}>
            <Item.Group>
              <Item>
                <Item.Image size='big' src={Pool} style={{width: window.innerWidth*.666, marginLeft: 10}}/>

                <Item.Content>
                  <Item.Header style={styles.header}>Bar & Pool</Item.Header>
                  

                  <Item.Meta><Icon name='user'/> &nbsp; Day Pass:&nbsp; $10 &nbsp;&middot;&nbsp; </Item.Meta>
                  <Item.Meta><Icon name='clock'/> &nbsp; Open: 10AM &nbsp;&middot;&nbsp; Close: 10PM</Item.Meta>
                  <Item.Extra>
                    <Menu vertical fluid style={{marginRight: 10}}>
                      <Menu.Item>
                        <Button disabled fluid as='a' href=''><Icon name='universal access' />OUTDOOR SWIMMING POOL</Button>
                      </Menu.Item>
                      <Menu.Item>Cabana Full Bar</Menu.Item>
                      <Menu.Item>Free WiFi</Menu.Item>
                      <Menu.Item>Live Music</Menu.Item>
                      <Menu.Item>Free Towels</Menu.Item>
                      <Menu.Item>
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

            <div>
            <Item.Group>
              <Item>
                <Item.Image size='big' src={Courtyard} style={{width: window.innerWidth*.666, marginLeft: 10}}/>

                <Item.Content>
                  <Item.Header style={styles.header}>The Courtyard</Item.Header>
                  

                  
                  <Item.Extra>
                    <Menu vertical fluid>
                      <Menu.Item>
                        <Button disabled fluid as='a' href=''><Icon name='universal access' />THE COURTYARD</Button>
                      </Menu.Item>
                      <Menu.Item>Perfect area to relax with friends</Menu.Item>
                      <Menu.Item>Private Parties</Menu.Item>
                      <Menu.Item>Just beside the Pool</Menu.Item>
                      <Menu.Item>Great space for Gatherings</Menu.Item>
                      <Menu.Item>
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
                <Item.Image size='big' src={Lounge} style={{width: window.innerWidth*.666, marginLeft: 10}}/>

                <Item.Content>
                  <Item.Header style={styles.header}>The Lounge</Item.Header>
                  

                  
                  <Item.Extra>
                    <Menu vertical fluid>
                      <Menu.Item>
                        <Button disabled fluid as='a' href=''><Icon name='universal access' />THE LOUNGE</Button>
                      </Menu.Item>
                      <Menu.Item>Perfect place to hangout with friends</Menu.Item>
                      <Menu.Item>Bar & Restaurant Open</Menu.Item>
                      <Menu.Item>Very Spacious</Menu.Item>
                      <Menu.Item>Elegant Design perfect for Meet & Greet</Menu.Item>
                      <Menu.Item>Perfect for Family Gatherings</Menu.Item>
                      <Menu.Item>Private Parties</Menu.Item>
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
                <Item.Image size='big' src={Bar} style={{width: window.innerWidth*.666, marginLeft: 10}}/>

                <Item.Content>
                  <Item.Header style={styles.header}>Bonfire Bar & Grill</Item.Header>
                  

                  
                  <Item.Extra>
                    <Menu vertical fluid>
                      <Menu.Item>
                        <Button disabled fluid as='a' href=''><Icon name='cocktail' />THE BONFIRE BAR & GRILL</Button>
                      </Menu.Item>
                      <Menu.Item>Perfect place to hangout with friends</Menu.Item>
                      <Menu.Item>Famous for our Mexican Food Selections</Menu.Item>
                      <Menu.Item>Modern Designed Bar</Menu.Item>
                      <Menu.Item>Premium Craft Beer</Menu.Item>
                      <Menu.Item>Imported Beer</Menu.Item>
                      <Menu.Item>Topshelf Liqour</Menu.Item>
                      <Menu.Item>Karaoke Nights with DJ Dwayne</Menu.Item>
                      <Menu.Item>Can be arranged for Private Parties</Menu.Item>
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
                <Item.Image size='big' src={Lobby} style={{width: window.innerWidth*.666, marginLeft: 10}}/>

                <Item.Content>
                  <Item.Header style={styles.header}>The Lobby</Item.Header>
                  

                  
                  <Item.Extra>
                    <Menu vertical fluid>
                      <Menu.Item>
                        <Button disabled fluid as='a' href=''><Icon name='universal access' />HOTEL LOBBY</Button>
                      </Menu.Item>
                      <Menu.Item>A Space to Welcome you with style</Menu.Item>
                      <Menu.Item>24/7 FREE Coffee</Menu.Item>
                      <Menu.Item>24/7 Guest Services</Menu.Item>
                      <Menu.Item>Comfortable Lounge Area</Menu.Item>
                      <Menu.Item>Check-In: 3PM | Check-Out: 11AM</Menu.Item>
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
                <Item.Image size='big' src={BC} style={{width: window.innerWidth*.666, marginLeft: 10}}/>

                <Item.Content>
                  <Item.Header style={styles.header}>Business Center</Item.Header>
                  

                  
                  <Item.Extra>
                    <Menu vertical fluid>
                      <Menu.Item>
                        <Button disabled fluid as='a' href=''><Icon name='desktop' />PROFESSIONAL BUSINESS CENTER</Button>
                      </Menu.Item>
                      <Menu.Item>High Speed Internet</Menu.Item>
                      <Menu.Item>Print Boarding Passes</Menu.Item>
                      <Menu.Item>Print from your Room</Menu.Item>
                      <Menu.Item>Executive Seats</Menu.Item>
                      <Menu.Item>Open 24/7</Menu.Item>
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
                <Item.Image size='big' src={Fitness} style={{width: window.innerWidth*.666, marginLeft: 10}}/>

                <Item.Content>
                  <Item.Header style={styles.header}>Fitness Center</Item.Header>
                  

                  <Item.Meta><Icon name='user'/> &nbsp; Day Pass:&nbsp; $10 &nbsp;&middot;&nbsp; Free for Hotel Guests</Item.Meta>
                  <Item.Meta><Icon name='clock'/> &nbsp; Open: 5AM &nbsp;&middot;&nbsp; Close: 10PM</Item.Meta>
                  <Item.Extra>
                    <Menu vertical fluid>
                      <Menu.Item>
                        <Button disabled fluid as='a' href=''><Icon name='universal access' />FITNESS CENTER</Button>
                      </Menu.Item>
                      <Menu.Item>Treadmills (2)</Menu.Item>
                      <Menu.Item>Steppers</Menu.Item>
                      <Menu.Item>Peddleton</Menu.Item>
                      <Menu.Item>Dumbells</Menu.Item>
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
                <Item.Image size='big' src={Conference} style={{width: window.innerWidth*.666, marginLeft: 10}}/>

                <Item.Content>
                  <Item.Header style={styles.header}>Conference Center</Item.Header>
                  

                  <Item.Extra>
                    <Menu vertical fluid>
                      <Menu.Item>
                        <Button disabled fluid as='a' href=''><Icon name='universal access' />CONFERENCE CENTER</Button>
                      </Menu.Item>
                      <Menu.Item>Great for Meetings</Menu.Item>
                      <Menu.Item>Up to 20 People</Menu.Item>
                      <Menu.Item>High Speed Internet</Menu.Item>
                      <Menu.Item>Projector & White Screen</Menu.Item>
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
                <span style={styles.tabs}>GROUP RESERVATIONS</span>
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