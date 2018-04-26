import React from 'react'
import { Segment, Menu, Icon } from 'semantic-ui-react'
import ActiveComponent from '../observables/Renderer'
// import active from '../observables/Renderer'
// const comp = new ActiveComponent()
const styles = {
  container: {
    backgroundColor: 'rgb(0,0,0,0.5)',
    
    fontFamily: 'Raleway, sans-serif',
    zIndex: 1
  },
  segment: {
    background: 'transparent'
  },
  tabs: {
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 100
  }
}
export default props => (
  <div style={styles.container}>
    <Segment style={styles.segment}>
      <Menu inverted secondary pointing>
        
        

        <Menu.Item name='resv' link 
          active={false} 
          onClick={props.rooms} >
            <span style={styles.tabs}>RESERVATIONS</span>
        </Menu.Item>

        <Menu.Item name='eat' active={false} link  onClick={this.handleItemClick} >EAT & DRINK</Menu.Item>
        <Menu.Item name='restaurant' active={false} onClick={this.handleItemClick} >DISCOVER NEW HOPE</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item name='book now' active={false} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    </Segment>
  </div>
)