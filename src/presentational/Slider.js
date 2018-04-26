import React from 'react'
import { Image } from 'semantic-ui-react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// images
import Bridge from '../assets/images/erNH_40.jpg'
import Pool from '../assets/board/pool3_2.png'

const settings = {
  infinite: true,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  autoplay: false
}

const styles = {
  slide1: {
    backgroundImage: `url(${Bridge})`,
    height: 400,
    backgroundColor: 'tomato'
  }
}

export default props => (
  <div>
    <Slider {...settings}>
      <div style={styles.slide1}><img src={Bridge} alt='' /></div>
      <div style={styles.slide1}><img src={Pool} alt='' width={window.innerWidth}/></div>
      <div>3</div>
    </Slider>
  </div>
)