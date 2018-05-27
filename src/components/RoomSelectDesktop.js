import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Icon, Menu, Container, Image, Card } from 'semantic-ui-react'



import King from '../assets/webp/king.webp'
import Doubles from '../assets/webp/double.webp'
import KingSuite from '../assets/webp/kingS.webp'
import JacuzziSuite from '../assets/webp/jacuzzi.webp'
import Rewards from '../assets/webp/rewards.webp'
import Gift from '../assets/board/gift.svg'
import Meet from '../assets/webp/hands.webp'




const styles = {
  container: {
    padding: '110px 0px 0px 0px',
  },
  innerContainer: {
    height: 470,
    backgroundColor: 'transparent',
    // backgroundColor: '#eee',
    padding: '0px 25px 0px 25px',
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
  menu: {
    backgroundColor: 'transparent',
    border: '0px',
    boxShadow: 'none',
    marginBottom: -20
  },
  image: {
    maxHeight: 150,
    minHeight: 150,
    border: '0px'
  },
  redIcon: {
    color: 'rgb(153,27,50)'
  }
}



const RoomSelectDesktop = observer (
  class RoomPage extends Component {
    render(){
      return(
        <div style={styles.container}>
          <div style={styles.innerContainer}>
            <Menu widths={5} style={styles.menu} borderless >
              
              <Menu.Item link onClick={this.props.king} style={{border: '0px solid red'}}>
              <Card className='animated fadeIn room_one' raised style={{marginRight: 10}}>
                <Image className='lazy' style={styles.image} src={King} />
                <Card.Content>
                  <Card.Header>
                    Luxury King Bed
                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>
                      <Icon name='bed' style={styles.redIcon}/>&nbsp; &nbsp;POPULAR CHOICE
                    </span>
                  </Card.Meta>
                 
                </Card.Content>
                <Card.Content extra>
                    <Icon name='user' />
                    Sleeps 2
                </Card.Content>
              </Card>
              </Menu.Item>

              <Menu.Item link onClick={this.props.doubles}>
              <Card className='animated fadeIn room_two' raised style={{marginRight: 10}}>
                <Image className='lazy' style={styles.image} src={Doubles} />
                <Card.Content>
                  <Card.Header>
                    2 Double Beds
                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>
                      <Icon name='bed' style={styles.redIcon}/><Icon name='bed' style={styles.redIcon}/>&nbsp; &nbsp;FAMILY'S CHOICE
                    </span>
                  </Card.Meta>
                  
                </Card.Content>
                <Card.Content extra>
                    <Icon name='user' />
                    Sleeps 4
                </Card.Content>
              </Card>
              </Menu.Item>

              <Menu.Item link onClick={this.props.ksuite}>
              <Card className='animated fadeIn room_three' raised style={{marginRight: 10}}>
                <Image className='lazy' style={styles.image} src={KingSuite} />
                <Card.Content>
                  <Card.Header>
                    Luxury King Suite
                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>
                    <Icon name='bed' style={styles.redIcon}/>&nbsp; &nbsp;COUPLE'S CHOICE
                    </span>
                  </Card.Meta>
                 
                </Card.Content>
                <Card.Content extra>
                    <Icon name='user' />
                    Sleeps 2
                </Card.Content>
              </Card>
              </Menu.Item>

              <Menu.Item link onClick={this.props.dsuite}>
              <Card className='animated fadeIn room_four' raised style={{marginRight: 10}}>
                <Image className='lazy' style={styles.image} src={Doubles} />
                <Card.Content>
                  <Card.Header>
                    2 Double Suite
                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>
                    <Icon name='bed' style={styles.redIcon}/><Icon name='bed' style={styles.redIcon}/>&nbsp; &nbsp;BIG FAM CHOICE
                    </span>
                  </Card.Meta>
                 
                </Card.Content>
                <Card.Content extra>
                    <Icon name='user' />
                    Sleeps 4
                </Card.Content>
              </Card>
              </Menu.Item>

              <Menu.Item link onClick={this.props.jsuite}>
              <Card className='animated fadeIn room_five' raisedstyle={{marginLeft: 10}}>
                <Image className='lazy' style={styles.image} src={JacuzziSuite} />
                <Card.Content>
                  <Card.Header>
                   Grand Jacuzzi Suite
                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>
                      <Icon name='bed' style={styles.redIcon}/><Icon name='bath' style={styles.redIcon}/>&nbsp; &nbsp;NEW FEATURE
                    </span>
                  </Card.Meta>
                 
                </Card.Content>
                <Card.Content extra>
                    <Icon name='user' />
                    Sleeps 2
                </Card.Content>
              </Card>
              </Menu.Item>

              
            </Menu>

            <Menu widths={3}  borderless className='animated fadeInUp gift_container'>

            <Menu.Item >
              <Card color='red' as='a' href='https://www.choicehotels.com/choice-privileges' className='animated fadeIn gift_card'>
                <Image className='lazy' style={styles.image} src={Gift} />
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
                <Image className='animated fadeIn' src={Rewards} size='medium' as='a' href='https://www.choicehotels.com/choice-privileges'/>
              </Menu.Item>
              
              <Menu.Item>
              <Card color='red' as='a' href='https://www.choicehotels.com/clarion/meet-me-at-clarion' className='animated fadeIn meet_card'>
                <Image className='lazy' style={styles.image} src={Meet} />
                <Card.Content>
                  <Card.Header>
                    Meet Me at Clarion!
                  </Card.Header>
                  
                  <Card.Description>
                    We believe life is better when you get together. Read more...
                  </Card.Description>
                </Card.Content>
              </Card>
            </Menu.Item>
              
            </Menu>
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
export default RoomSelectDesktop