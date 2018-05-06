import React from 'react'
import { Segment, Menu, Button, Icon } from 'semantic-ui-react'
// import ActiveComponent from '../observables/Renderer'
// import active from '../observables/Renderer'
// const comp = new ActiveComponent()
const styles = {
  container: {
    zIndex: 1
  },
  segment: {
    background: 'transparent'
  },
  menu: {
    border: 'none',
    // fontSize: 12
  },
  tabs: {
    fontFamily: 'Playfair Display',
    // fontWeight: 100,
    color: `rgb(250,226,173)`,
    
  },
  address: {
    color: 'tomato',
    backgroundColor: 'rgba(0,0,0,0.7)',

  }
}
export default props => (
  <div style={styles.container}>
    <Segment style={styles.segment} >
      <Menu inverted secondary pointing fluid style={Object.assign({fontSize: props.menuLabelSize}, styles.menu)}>
        
        <Menu.Item name='resv' link active={false} onClick={props.rooms} > 
            <span style={styles.tabs}>ROOMS</span>
        </Menu.Item>

        <Menu.Item name='eat' active={false} link  onClick={props.rest} >
          <span style={styles.tabs}>EAT & DRINK</span>
        </Menu.Item>
        
        
        <Menu.Item name='restaurant' active={false} link >
          <Button positive fluid as='a' href='https://www.choicehotels.com/pennsylvania/new-hope/clarion-hotels/pa668'>
            <Icon name='bed'/>
            &nbsp;BOOK NOW
          </Button>
        </Menu.Item>
      
      </Menu>
      
    </Segment>
  </div>
)