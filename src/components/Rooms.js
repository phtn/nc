import React from 'react'
// slider
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// semantic
import { Segment, Card, Image, Icon } from 'semantic-ui-react'
// images
import King from '../assets/images/eNK1.png'

const styles = {
  container: {
    marginTop: 300,
    height: 300,
    textAlign: 'center',
    border: '0px solid red',
    backgroundColor: 'rgba(0,0,0,0.5)',
    
  },
  segment: {
    background: 'transparent'
  }
}

const settings = {
  infinite: true,
  speed: 1000,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  autoplay: false,
}

export default props => (
  <div style={styles.container}>
    <Slider {...settings}>
      <Segment style={styles.segment} textAlign='center'>
        <Card color='red'>
          <Image src={King}/>
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
          </Card.Content>
        </Card>
      </Segment>
      <div>Double Beds</div>
      <div>Suites</div>
    </Slider>
  </div>
)