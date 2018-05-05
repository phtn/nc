import React from 'react'
import { Item, Menu, Container, Image, Card, Button, Icon } from 'semantic-ui-react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Pool from '../assets/images/pool3.png'
import Courtyard from '../assets/board/court1.jpg'
import Lounge from '../assets/board/lounge1.jpg'
import Lobby from '../assets/board/lobby1.jpg'
import Bar from '../assets/board/bar1.jpg'
import BC from '../assets/board/bc1.jpg'


import Chevron from '../assets/chevron.svg'
import Lefty from '../assets/left.svg'


const styles = {
  container: {
    padding: '130px 0px 0px 0px',
    
  },
  innerContainer: {
    height: 470,
    backgroundColor: 'rgba(238,238,238,0.0)',
    padding: '10px 100px 0px 100px',
  },
  header: {
    fontSize: 26,
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

      <div>
      <Item.Group>
        <Item>
          <Item.Image size='big' src={Pool} />

          <Item.Content>
            <Item.Header style={styles.header}>Summer is here!</Item.Header>
            

            <Item.Meta><Icon name='user'/> &nbsp; Day Pass:&nbsp; $10</Item.Meta>
            <Item.Meta><Icon name='clock'/> &nbsp; Open: 10AM &nbsp;&middot;&nbsp; Close: 10PM</Item.Meta>
            <Item.Extra>
              <Menu vertical fluid>
                <Menu.Item>
                  <Button disabled fluid as='a' href=''><Icon name='universal access' />OUTDOOR SWIMMING POOL</Button>
                </Menu.Item>
                <Menu.Item>Cabana Full Bar</Menu.Item>
                <Menu.Item>Free WiFi</Menu.Item>
                <Menu.Item>Live Music</Menu.Item>
                <Menu.Item>Free Towels</Menu.Item>
                <Menu.Item>
                  <Button primary fluid as='a' href='https://www.choicehotels.com/pennsylvania/new-hope/clarion-hotels/pa668'><Icon name='id card' />POOL MEMBERSHIP</Button>
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
          <Item.Image size='big' src={Courtyard} />

          <Item.Content>
            <Item.Header style={styles.header}>Spacious Courtyard</Item.Header>
            

            
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
                  <Button primary fluid as='a' href='https://www.choicehotels.com/pennsylvania/new-hope/clarion-hotels/pa668'><Icon name='INFO' />AVAILABILITY</Button>
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
          <Item.Image size='big' src={Lounge} />

          <Item.Content>
            <Item.Header style={styles.header}>Hangout at our Lounge Area</Item.Header>
            

            
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
                <Menu.Item>
                  <Button primary fluid as='a' href='https://www.choicehotels.com/pennsylvania/new-hope/clarion-hotels/pa668'><Icon name='INFO' />AVAILABILITY</Button>
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
          <Item.Image size='big' src={Bar} />

          <Item.Content>
            <Item.Header style={styles.header}>Bonfire Bar & Grill</Item.Header>
            

            
            <Item.Extra>
              <Menu vertical fluid>
                <Menu.Item>
                  <Button disabled fluid as='a' href=''><Icon name='cocktail' />THE BONFIRE BAR & GRILL</Button>
                </Menu.Item>
                <Menu.Item>Perfect place to hangout with friends</Menu.Item>
                <Menu.Item>Famous for our Mexican Food Selections</Menu.Item>
                <Menu.Item>Modern feel</Menu.Item>
                <Menu.Item>Karaoke Nights with DJ Dwayne</Menu.Item>
                <Menu.Item>Can be arranged for Private Parties</Menu.Item>
                <Menu.Item>
                  <Button primary fluid as='a' href='https://www.choicehotels.com/pennsylvania/new-hope/clarion-hotels/pa668'><Icon name='INFO' />AVAILABILITY</Button>
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
          <Item.Image size='big' src={Lobby} />

          <Item.Content>
            <Item.Header style={styles.header}>Elegantly Designed Lobby</Item.Header>
            

            
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
                <Menu.Item>
                  <Button primary fluid as='a' href='https://www.choicehotels.com/pennsylvania/new-hope/clarion-hotels/pa668'><Icon name='bed' />BOOK NOW</Button>
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
          <Item.Image size='big' src={BC} />

          <Item.Content>
            <Item.Header style={styles.header}>BUSINESS CENTER</Item.Header>
            

            
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
                <Menu.Item>
                  <Button primary fluid as='a' href='https://www.choicehotels.com/pennsylvania/new-hope/clarion-hotels/pa668'><Icon name='bed' />BOOK NOW</Button>
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
          <Item.Image size='big' src={Pool} />

          <Item.Content>
            <Item.Header style={styles.header}>Stay fit!</Item.Header>
            

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
                <Menu.Item>
                  <Button primary fluid as='a' href='https://www.choicehotels.com/pennsylvania/new-hope/clarion-hotels/pa668'><Icon name='id card' />GYM MEMBERSHIP</Button>
                </Menu.Item>
                
              </Menu>
            </Item.Extra>
            
          </Item.Content>
        </Item>
      </Item.Group>
      </div>

    </Slider>
             

        

       

    </div>
    
    <div style={{marginTop: 30}}>
      <Menu fluid inverted widths={5}>
        <Menu.Item name='rooms' active={false} link  onClick={props.rooms} >
          <span style={styles.tabs}>ROOMS</span>
        </Menu.Item>

        <Menu.Item name='eat' active={false} link  onClick={props.rest} >
          <span style={styles.tabs}>EAT & DRINK</span>
        </Menu.Item>

        <Menu.Item name='group' active={false} link  onClick={props.group} >
          <span style={styles.tabs}>GROUP RESERVATIONS</span>
        </Menu.Item>

        <Menu.Item name='events' active={false} link  onClick={props.events} >
          <span style={styles.tabs}>EVENTS</span>
        </Menu.Item>

        <Menu.Item name='discover' active={false} link  onClick={props.discover} >
          <span style={styles.tabs}>DISCOVER</span>
        </Menu.Item>

      </Menu>
    </div>

    <div style={styles.address}>
      <Container textAlign='center'>6426 Lower York Rd New Hope, PA 18938 &middot; Clarion Inn & Suites &middot; Terms of Use | Privacy Policy</Container>
    </div>
  </div>
)