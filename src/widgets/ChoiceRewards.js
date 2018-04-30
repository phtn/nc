import React from 'react'
import Rewards from '../assets/board/rewards.jpg'
import { Image, Message, Icon } from 'semantic-ui-react'
import Gift from '../assets/board/gift.svg'

const styles = {
  container: {
    position: 'absolute',
    top: 130,
    padding: 10,
    backgroundColor: '#fff',
    width: '100%',
  },
  image: {
    height: 80,
    margin: '0 auto'
  },
  gift: {
    height: 40,
    marginRight: 10
  }
}
export default props => (
  <div style={styles.container}>
    <Message icon positive>
      <Image src={Gift} style={styles.gift}/>
      <Message.Content>
        <Message.Header>Get a gift from us upon check-in!</Message.Header>
        Join Choice Privileges Rewards. It's free!
      </Message.Content>
    </Message>
    
    <Image src={Rewards} style={styles.image}/>
  </div>
)