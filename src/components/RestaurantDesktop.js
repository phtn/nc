import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Item, Button, Icon, Menu, Container, Message, Label} from 'semantic-ui-react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import CrossfadeImage from 'react-crossfade-image'

// import Doubles from '../assets/images/erNDD2.png'
// import King from '../assets/images/eNK1.png'
// import Suites from '../assets/board/erSA_400.jpg'

// import Righty from '../assets/arrow-right.svg'
// import Lefty from '../assets/left-arrow.svg'
// import Back from '../assets/back.svg'

// images
import Event1 from '../assets/images/event1.jpg'
import Breakfast2 from '../assets/images/brk11.jpg'
import Breakfast3 from '../assets/images/brk12.jpg'
import Breakfast4 from '../assets/images/brk13.jpg'

import Chimi from '../assets/board/chimi.jpg'
import Beans from '../assets/board/beans.jpg'
import Shrimp from '../assets/board/shrimp.jpg'
import Burger from '../assets/board/burger.jpg'
import Humus1 from '../assets/board/humus1.jpg'
import Humus2 from '../assets/board/humus2.jpg'


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
    color: `rgb(250,226,173)`,
  },
  address: {
    color: `#eee`,
    marginTop: 10,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    fontSize: 12
  },
  backButton: {
    height: 40,
    position: 'absolute',
    margin: 10,
    cursor: 'pointer'
  }
}

// const Right = props => (
//   <div>
//     <img src={Righty} onClick={props.onClick} height={40} className='slick-next blink_me' alt='' style={{marginLeft: 20, maxHeight: 100}} />
//   </div>
// )

// const Left = props => (
//   <div style={{ paddingRight: 50}}>
//     {/* <img src={Lefty} onClick={props.onClick} height={40} className='slick-prev' alt='' style={{marginRight: 20, maxHeight: 100}}/> */}
//   </div>
// )


const RoomDesc = props => (
  <div>
    <Menu.Item><Message size='big'>{props.description}</Message></Menu.Item>
    

    <Menu.Item>
      <Button  color='red' fluid as='a' href='https://www.choicehotels.com/pennsylvania/new-hope/clarion-hotels/pa668'><Icon name='bed' />BOOK NOW</Button>
    </Menu.Item>
  </div>
)



const MexicanFood = props => (

  <div style={styles.menu}>
    <Menu.Item>
      <Button basic color='red' fluid as='a' href=''><Icon name='food' />POPULAR MEXICAN CHOICES</Button>
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
      <Button animated='fade' color='red' fluid >
        <Button.Content visible>
          <Icon name='birthday' />RESERVATIONS
        </Button.Content>
        <Button.Content hidden>
          <Icon name='call'/>&nbsp;215-862-5221
        </Button.Content>
      </Button>
    </Menu.Item>
  </div>
)


const settings = {
  infinite: true,
  speed: 1000,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  autoplay: true,
  dots: false,
  // nextArrow: <Right/>,
  // prevArrow: <Left/>,
}


const images = [Chimi, Shrimp, Beans, Burger, Humus1, Humus2]

const RestaurantDesktop = observer (
  class RestaurantPage extends Component {
    constructor(props){
      super(props)
      this.state = {
        imageIndex: 0
      }
      this.intervalID = 0
    }
    componentDidMount(){
      this.crossfadeImages()
    }
    componentWillUnmount(){
      this.clearLoop()
    }
    clearLoop(){
      clearInterval(this.intervalID)
    }
    crossfadeImages(){
      // for (let i in images){
      //   setTimeout(t=> { return images[i]}, 2000)
      // }
      let imageCount = images.length
      let index = 0
      this.intervalID = setInterval(t => { 
        
        index = (index + 1) % imageCount
        
        this.updateImage(index)
        
      }, 7000)
    }
    updateImage(index){
      this.setState({imageIndex: index})
      console.log(index)
    }

    
    render(){
      
      return(
        <div style={styles.container} id='roomImage'>
          
          <div style={styles.innerContainer}>
          
            
              <div >
                <Item.Group>
                  <Item>
                    
                    <Item.Image className='animated fadeIn' size='huge' src={images[this.state.imageIndex]} style={{marginLeft:10, width: window.innerWidth*.666 }} />
                    {/* <CrossfadeImage src={Breakfast3} style={{marginLeft:10, width: window.innerWidth*.666 }}/> */}
                    {/* <CrossfadeImage src={Breakfast4} style={{marginLeft:10, width: window.innerWidth*.666 }}/> */}
                    <Item.Content>
                      
                      <Item.Extra>
                        <Menu vertical fluid style={{marginRight: 10}}>
                          <Menu.Item>
                            <span style={styles.header}>{this.props.header}</span>
                            <br/>
                            <Item.Meta><Icon name='star' color='yellow'/><Icon name='star' color='yellow'/><Icon name='star' color='yellow'/><Icon name='star' color='yellow'/><Icon name='star' color='yellow'/></Item.Meta>
                          </Menu.Item>

                          <Slider {...settings}>
                            {/* <RoomDesc description={this.props.description}/> */}
                            {/* <RoomAmenities/> */}
                            <MexicanFood/>
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
              <Menu.Item name='eat' active={false} link  onClick={this.props.rooms} >
                <span style={styles.tabs}>ROOMS</span>
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
export default RestaurantDesktop