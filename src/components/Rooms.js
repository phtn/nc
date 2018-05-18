import React from 'react'
// slider
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// semantic
import { Card, Image, Icon, Button, Menu } from 'semantic-ui-react'
// images
import King from '../assets/images/eNK1.png'
import Doubles from '../assets/images/erNDD2.png'
import Suites from '../assets/board/erSA_400.jpg'
// widgets
import Rewards from '../widgets/ChoiceRewards'


const styles = {
  container: {
    
    textAlign: 'center',
    border: '0px solid red',
    // backgroundColor: 'rgba(0,0,0,0.5)',
    padding: '20px 30px 20px 30px',
  },
  segment: {
    background: 'transparent',
    margin: 5
  },
  book: {
    marginLeft: 30
  },
  image: {
    maxHeight: 170
  },
  tabs: {
    fontFamily: 'Playfair Display',
    color: `rgb(250,226,173)`,
  },
}

const settings = {
  infinite: true,
  speed: 1000,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  autoplay: false,
}

export default props => (
  <div>
    
    <div style={Object.assign({margin: `${props.topMargin}px 0px 20px 0px`}, styles.container)}>
      
      
      <Slider {...settings}>

        <div style={styles.segment}>
          <Card color='red' fluid>
            <Image style={styles.image} src={King}/>
            <Card.Content>
              <Card.Header>
                Single King Bed
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                  Popular Choice
                </span>
              </Card.Meta>
              <Card.Description>
                Microwave & Fridge, HDTV, Free Wifi
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='user' />
                2 Adults
                <Button primary style={styles.book} as='a' href='https://www.choicehotels.com/pennsylvania/new-hope/clarion-hotels/pa668'> Book Now</Button>
            </Card.Content>
          </Card>
        </div>

        <div style={styles.segment}>
          <Card color='red' fluid>
            <Image style={styles.image} src={Doubles} />
            <Card.Content>
              <Card.Header>
                2 Double Beds
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                  Family Choice
                </span>
              </Card.Meta>
              <Card.Description>
                Microwave & Fridge, HDTV, Free Wifi
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='user' />
                4 Adults
                <Button primary style={styles.book} as='a' href='https://www.choicehotels.com/pennsylvania/new-hope/clarion-hotels/pa668'> Book Now</Button>
            </Card.Content>
          </Card>
        </div>

        <div style={styles.segment}>
          <Card color='red' fluid>
            <Image style={styles.image} src={Suites} />
            <Card.Content>
              <Card.Header>
                Single King Suite
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                  Popular Choice
                </span>
              </Card.Meta>
              <Card.Description>
                Microwave & Fridge, HDTV, Wifi, Sitting Area
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='user' />
                4 Adults
                <Button primary style={styles.book} as='a' href='https://www.choicehotels.com/pennsylvania/new-hope/clarion-hotels/pa668'> Book Now</Button>
            </Card.Content>
          </Card>
        </div>

        <div style={styles.segment}>
          <Card color='red' fluid>
            <Image style={styles.image} src={Doubles} />
            <Card.Content>
              <Card.Header>
                Double Bed Suite
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                  Popular Choice
                </span>
              </Card.Meta>
              <Card.Description>
                Microwave & Fridge, HDTV, Wifi, Sitting Area
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='user' />
                4 Adults
                <Button primary style={styles.book} as='a' href='https://www.choicehotels.com/pennsylvania/new-hope/clarion-hotels/pa668'> Book Now</Button>
            </Card.Content>
          </Card>
        </div>

        
      </Slider>
    </div>
    <Rewards />
    <div style={{marginTop: 0}}>
      <Menu fluid inverted widths={5}>

        <Menu.Item name='eat' active={false} link  onClick={props.rest} >
          <span style={styles.tabs}>EAT & DRINK</span>
        </Menu.Item>

        <Menu.Item name='group' active={false} link  onClick={props.group} >
          <span style={styles.tabs}>AMENITIES</span>
        </Menu.Item>

        <Menu.Item name='events' active={false} link  onClick={props.events} >
          <span style={styles.tabs}>EVENTS</span>
        </Menu.Item>

        <Menu.Item name='discover' active={false} link  onClick={props.discover} >
          <span style={styles.tabs}>DISCOVER</span>
        </Menu.Item>

      </Menu>
    </div>

  </div>
)