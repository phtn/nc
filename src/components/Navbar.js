import React from 'react'
import { Segment, Menu } from 'semantic-ui-react'
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
    border: 'none'
  },
  tabs: {
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 100,
    color: `rgb(250,226,173)`
  }
}
export default props => (
  <div style={styles.container}>
    <Segment style={styles.segment}>
      <Menu inverted secondary pointing style={styles.menu}>
        
        <Menu.Item name='resv' link active={true} onClick={props.rooms} > 
            <span style={styles.tabs}>ROOMS</span>
        </Menu.Item>

        <Menu.Item name='eat' active={true} link  onClick={props.rest} >
          <span style={styles.tabs}>EAT & DRINK</span>
        </Menu.Item>
        
        <Menu.Item name='restaurant' active={true} link >
          <span style={styles.tabs}>DISCOVER</span>
        </Menu.Item>
        
        <Menu.Item name='restaurant' active={true} link >
          <span style={styles.tabs}>EVENTS</span>
        </Menu.Item>
      
      </Menu>
    </Segment>
  </div>
)