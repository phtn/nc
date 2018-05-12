import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Icon, Menu, Container, Image, Card } from 'semantic-ui-react'
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'


import King from '../assets/images/eNK1.png'
import Doubles from '../assets/images/erNDD2.png'
import KingSuite from '../assets/images/ROOM1.jpg'
import JacuzziSuite from '../assets/images/erGSK2_40.jpg'
import Rewards from '../assets/board/rewards.jpg'
import Gift from '../assets/board/gift.svg'
import Meet from '../assets/board/hands.jpg'


// import Righty from '../assets/arrow-right.svg'
// import Lefty from '../assets/left-arrow.svg'

const styles = {
  container: {
    padding: '130px 0px 0px 0px',
  },
  innerContainer: {
    height: 470,
    backgroundColor: 'transparent',
    // backgroundColor: '#eee',
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
    color: `rgb(250,226,173)`,
  },
  address: {
    color: `#eee`,
    marginTop: 10,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    fontSize: 12
  },
  menu: {
    backgroundColor: 'transparent'
  },
  image: {
    maxHeight: 150,
    minHeight: 150
  }
}

// const Right = props => (
//   <div>
//     <img src={Righty} onClick={props.onClick} height={40} className='slick-next blink_me' alt='' style={{marginLeft: 20, maxHeight: 100}} />
//   </div>
// )

// const Left = props => (
//   <div style={{ paddingRight: 50}}>
//     <img src={Lefty} onClick={props.onClick} height={40} className='slick-prev' alt='' style={{marginRight: 20, maxHeight: 100}}/>
//   </div>
// )


// const RoomDesc = props => (
//   <div>
//     <Menu.Item><Message size='big'>Description</Message></Menu.Item>
    

//     <Menu.Item>
//       <Button  color='red' fluid as='a' href='https://www.choicehotels.com/pennsylvania/new-hope/clarion-hotels/pa668'><Icon name='bed' />BOOK NOW</Button>
//     </Menu.Item>
//   </div>
// )

// const RoomAmenities = props => (
//   <div>
//     <Menu.Item>
//       <Button basic color='red' fluid as='a' href=''><Icon name='universal access' />ROOM AMENITIES</Button>
//     </Menu.Item>
//     <Menu.Item>Microwave & Refrigerator</Menu.Item>
//     <Menu.Item>Free WiFi</Menu.Item>
//     <Menu.Item>HD Channel TV</Menu.Item>
//     <Menu.Item>Coffee Maker with Premium Coffee & Tea</Menu.Item>
//     <Menu.Item>All Brand New Rooms</Menu.Item>

//     <Menu.Item>
//       <Button  color='red' fluid as='a' href='https://www.choicehotels.com/pennsylvania/new-hope/clarion-hotels/pa668'><Icon name='bed' />BOOK NOW</Button>
//     </Menu.Item>
//   </div>
// )

// const StayInfo = props => (
//   <div>
//     <Menu.Item>
//       <Button basic color='red' fluid as='a' href=''><Icon name='universal access' />STAY INFO</Button>
//     </Menu.Item>
//     <Menu.Item><Item.Meta><Icon name='user'/> &nbsp; Sleeps 2</Item.Meta></Menu.Item>
//     <Menu.Item><Item.Meta><Icon name='clock'/> &nbsp; Check-In: 3PM </Item.Meta></Menu.Item>
//     <Menu.Item><Item.Meta><Icon name='clock'/> &nbsp; Check-Out: 11AM</Item.Meta></Menu.Item>
//     <Menu.Item><Item.Meta><Icon name='food'/> &nbsp; Free Continental Breakfast </Item.Meta></Menu.Item>


//     <Menu.Item>
//       <Button color='red' fluid as='a' href='https://www.choicehotels.com/pennsylvania/new-hope/clarion-hotels/pa668'><Icon name='bed' />BOOK NOW</Button>
//     </Menu.Item>
//   </div>
// )




const RoomDesktop = observer (
  class RoomPage extends Component {
    render(){
      return(
        <div style={styles.container} id='roomImage'>
          <div style={styles.innerContainer}>
            <Menu widths={5} style={styles.menu} borderless>
              
              <Menu.Item link onClick={this.props.king}>
              <Card className='animated fadeIn room_one'>
                <Image style={styles.image} src={King} />
                <Card.Content>
                  <Card.Header>
                    Luxury King Bed
                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>
                      <Icon name='bed' color='red'/>&nbsp; &nbsp;POPULAR CHOICE
                    </span>
                  </Card.Meta>
                  <Card.Description>
                    All Brand New! Read more...
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='user' />
                    Sleeps 2
                </Card.Content>
              </Card>
              </Menu.Item>

              <Menu.Item link onClick={this.props.doubles}>
              <Card className='animated fadeIn room_two'>
                <Image style={styles.image} src={Doubles} />
                <Card.Content>
                  <Card.Header>
                    2 Double Beds
                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>
                      <Icon name='bed' color='red'/><Icon name='bed' color='red'/>&nbsp; &nbsp;FAMILY'S CHOICE
                    </span>
                  </Card.Meta>
                  <Card.Description>
                    All Brand New! Read more...
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='user' />
                    Sleeps 4
                </Card.Content>
              </Card>
              </Menu.Item>

              <Menu.Item link onClick={this.props.ksuite}>
              <Card className='animated fadeIn room_three'>
                <Image style={styles.image} src={KingSuite} />
                <Card.Content>
                  <Card.Header>
                    Luxury King Suite
                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>
                    <Icon name='bed' color='red'/>&nbsp; &nbsp;COUPLE'S CHOICE
                    </span>
                  </Card.Meta>
                  <Card.Description>
                    All Brand New! Read more...
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='user' />
                    Sleeps 2
                </Card.Content>
              </Card>
              </Menu.Item>

              <Menu.Item link onClick={this.props.dsuite}>
              <Card className='animated fadeIn room_four'>
                <Image style={styles.image} src={Doubles} />
                <Card.Content>
                  <Card.Header>
                    2 Double Suite
                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>
                    <Icon name='bed' color='red'/><Icon name='bed' color='red'/>&nbsp; &nbsp;BIG FAM CHOICE
                    </span>
                  </Card.Meta>
                  <Card.Description>
                    All Brand New! Read more...
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='user' />
                    Sleeps 4
                </Card.Content>
              </Card>
              </Menu.Item>

              <Menu.Item link onClick={this.props.jsuite}>
              <Card className='animated fadeIn room_five'>
                <Image style={styles.image} src={JacuzziSuite} />
                <Card.Content>
                  <Card.Header>
                   Grand Jacuzzi Suite
                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>
                      <Icon name='bed' color='red'/><Icon name='bath' color='red'/>&nbsp; &nbsp;NEW FEATURE
                    </span>
                  </Card.Meta>
                  <Card.Description>
                    Superior category of suites...
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='user' />
                    Sleeps 2
                </Card.Content>
              </Card>
              </Menu.Item>

              
            </Menu>

            <Menu widths={3}  borderless>

            <Menu.Item>
              <Card color='red' as='a' href='https://www.choicehotels.com/choice-privileges' className='animated fadeIn gift_card'>
                <Image style={styles.image} src={Gift} />
                <Card.Content>
                  <Card.Header>
                    Get a gift from us upon check-in!
                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>
                      <Icon name='star' color='yellow'/><Icon name='star' color='yellow'/><Icon name='star' color='yellow'/>
                    </span>
                  </Card.Meta>
                  <Card.Description>
                    Join Choice Privileges Rewards. It's free!
                  </Card.Description>
                </Card.Content>
              </Card>
            </Menu.Item>
              
              <Menu.Item>
                <Image src={Rewards} size='medium' as='a' href='https://www.choicehotels.com/choice-privileges'/>
              </Menu.Item>
              
              <Menu.Item>
              <Card color='red' as='a' href='https://www.choicehotels.com/clarion/meet-me-at-clarion' className='animated fadeIn meet_card'>
                <Image style={styles.image} src={Meet} />
                <Card.Content>
                  <Card.Header>
                    Meet Me at Clarion!
                  </Card.Header>
                  {/* <Card.Meta>
                    <span className='date'>
                      <Icon name='star' color='yellow'/>&nbsp; &nbsp;POPULAR CHOICE
                    </span>
                  </Card.Meta> */}
                  <Card.Description>
                    We believe life is better when you get together. Read more...
                    {/* Read More... */}
                  </Card.Description>
                </Card.Content>
              </Card>
            </Menu.Item>
              
            </Menu>
          </div>
          
          <div style={{position: 'absolute', top: this.props.top, width: window.innerWidth }}>
            <Menu fluid inverted widths={5}>
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