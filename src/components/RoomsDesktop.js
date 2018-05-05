import React from 'react'
import { Item, Button, Icon, Menu, Container } from 'semantic-ui-react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Doubles from '../assets/images/erNDD2.png'
import King from '../assets/images/eNK1.png'
// import Suites from '../assets/board/erSA_400.jpg'

import Chevron from '../assets/chevron.svg'
import Lefty from '../assets/left.svg'

const styles = {
  container: {
    padding: '130px 0px 0px 0px',
    
  },
  innerContainer: {
    height: 470,
    backgroundColor: '#eee',
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
    color: `rgb(250,226,173)`,
  },
  address: {
    color: `#eee`,
    marginTop: 10,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    fontSize: 12
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
              <Item.Image size='huge' src={King} />

              <Item.Content>
                <Item.Header style={styles.header}>Single King Bed</Item.Header>
                

                <Item.Meta><Icon name='user'/> &nbsp; Sleeps 2</Item.Meta>
                <Item.Meta><Icon name='clock'/> &nbsp; Check-In: 3PM &nbsp;&middot;&nbsp; Check-Out: 11AM</Item.Meta>
                <Item.Extra>
                  <Menu vertical fluid>
                    <Menu.Item>
                      <Button disabled fluid as='a' href=''><Icon name='universal access' />AMENITIES</Button>
                    </Menu.Item>
                    <Menu.Item>Microwave & Refrigerator</Menu.Item>
                    <Menu.Item>Free WiFi</Menu.Item>
                    <Menu.Item>HD Channel TV</Menu.Item>
                    <Menu.Item>Coffee Maker</Menu.Item>
                    <Menu.Item>All Brand New Rooms</Menu.Item>
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
              <Item.Image size='huge' src={Doubles} />

              <Item.Content>
                <Item.Header style={styles.header}>2 Double Beds</Item.Header>
                

                <Item.Meta><Icon name='user'/> &nbsp; Sleeps 4</Item.Meta>
                <Item.Meta><Icon name='clock'/> &nbsp; Check-In: 3PM &nbsp;&middot;&nbsp; Check-Out: 11AM</Item.Meta>
                <Item.Extra>
                  <Menu vertical fluid>
                    <Menu.Item>
                      <Button disabled fluid as='a' href=''><Icon name='universal access' />AMENITIES</Button>
                    </Menu.Item>
                    <Menu.Item>Microwave & Refrigerator</Menu.Item>
                    <Menu.Item>Free WiFi</Menu.Item>
                    <Menu.Item>HD Channel TV</Menu.Item>
                    <Menu.Item>Coffee Maker</Menu.Item>
                    <Menu.Item>All Brand New Rooms</Menu.Item>
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
              <Item.Image size='huge' src={King} />

              <Item.Content>
                <Item.Header style={styles.header}>Single King Suite</Item.Header>
                

                <Item.Meta><Icon name='user'/> &nbsp; Sleeps 4</Item.Meta>
                <Item.Meta><Icon name='clock'/> &nbsp; Check-In: 3PM &nbsp;&middot;&nbsp; Check-Out: 11AM</Item.Meta>
                <Item.Extra>
                  <Menu vertical fluid>
                    <Menu.Item>
                      <Button disabled fluid as='a' href=''><Icon name='universal access' />AMENITIES</Button>
                    </Menu.Item>
                    <Menu.Item>Microwave & Refrigerator</Menu.Item>
                    <Menu.Item>Free WiFi</Menu.Item>
                    <Menu.Item>HD Channel TV</Menu.Item>
                    <Menu.Item>Coffee Maker</Menu.Item>
                    <Menu.Item>All Brand New Rooms</Menu.Item>
                    <Menu.Item>Spacious Sitting Area</Menu.Item>
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
              <Item.Image size='huge' src={Doubles} />

              <Item.Content>
                <Item.Header style={styles.header}>2 Double Beds Suite</Item.Header>
                

                <Item.Meta><Icon name='user'/> &nbsp; Sleeps 4</Item.Meta>
                <Item.Meta><Icon name='clock'/> &nbsp; Check-In: 3PM &nbsp;&middot;&nbsp; Check-Out: 11AM</Item.Meta>
                <Item.Extra>
                  <Menu vertical fluid>
                    <Menu.Item>
                      <Button disabled fluid as='a' href=''><Icon name='universal access' />AMENITIES</Button>
                    </Menu.Item>
                    <Menu.Item>Microwave & Refrigerator</Menu.Item>
                    <Menu.Item>Free WiFi</Menu.Item>
                    <Menu.Item>HD Channel TV</Menu.Item>
                    <Menu.Item>Coffee Maker</Menu.Item>
                    <Menu.Item>All Brand New Rooms</Menu.Item>
                    <Menu.Item>Spacious Sitting Area</Menu.Item>
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
              <Item.Image size='huge' src={King} />

              <Item.Content>
                <Item.Header style={styles.header}>Jacuzzi King Suite</Item.Header>
                

                <Item.Meta><Icon name='user'/> &nbsp; Sleeps 2</Item.Meta>
                <Item.Meta><Icon name='clock'/> &nbsp; Check-In: 3PM &nbsp;&middot;&nbsp; Check-Out: 11AM</Item.Meta>
                <Item.Extra>
                  <Menu vertical fluid>
                    <Menu.Item>
                      <Button disabled fluid as='a' href=''><Icon name='universal access' />AMENITIES</Button>
                    </Menu.Item>
                    <Menu.Item>Microwave & Refrigerator</Menu.Item>
                    <Menu.Item>Free WiFi</Menu.Item>
                    <Menu.Item>HD Channel TV</Menu.Item>
                    <Menu.Item>Coffee Maker</Menu.Item>
                    <Menu.Item>All Brand New Rooms</Menu.Item>
                    <Menu.Item>Spacious Sitting Area</Menu.Item>
                    <Menu.Item>
                      <Button primary fluid as='a' href='https://www.choicehotels.com/pennsylvania/new-hope/clarion-hotels/pa668'><Icon name='bed' />BOOK NOW</Button>
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

        <Menu.Item name='eat' active={false} link  onClick={props.discover} >
          <span style={styles.tabs}>DISCOVER</span>
        </Menu.Item>

      </Menu>
    </div>

    <div style={styles.address}>
      <Container textAlign='center'>6426 Lower York Rd New Hope, PA 18938 &middot; Clarion Inn & Suites &middot; Terms of Use | Privacy Policy</Container>
    </div>
  </div>
)