import React from 'react'
import { Segment, Menu, Icon } from 'semantic-ui-react'
import ActiveComponent from '../observables/Renderer'

const comp = new ActiveComponent()
const styles = {
  container: {
    backgroundColor: 'rgb(0,0,0,0.5)',
    position: 'absolute',
    zIndex: 1,
    top: 530,
    width: '100%',
    fontFamily: 'Raleway, sans-serif'
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
        
        <Menu.Item name='home' 
          active={comp.activeComponent === 'home'} 
          onClick={this.handleItemClick} >
          <Icon name='home' size='large'/> 
        </Menu.Item>

        <Menu.Item name='resv' link 
          active={comp.activeComponent === 'resv'} 
          onClick={this.handleItemClick} >
            <span style={styles.tabs}>RESERVATIONS</span>
        </Menu.Item>

        <Menu.Item name='eat' active={false} link  onClick={this.handleItemClick} />
        <Menu.Item name='restaurant' active={false} onClick={this.handleItemClick} />
        <Menu.Menu position='right'>
          <Menu.Item name='book now' active={false} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    </Segment>
  </div>
)