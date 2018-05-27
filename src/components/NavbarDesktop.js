import React from 'react'
import { Segment, Menu, Icon, Button } from 'semantic-ui-react'
// import ActiveComponent from '../observables/Renderer'
// import active from '../observables/Renderer'
// const comp = new ActiveComponent()
const styles = {
  container: {
    zIndex: 1
  },
  segment: {
    background: 'transparent',
    marginTop: '-10px'
  },
  menu: {
    border: 'none',
    // fontSize: 12
  },
  tabs: {
    fontFamily: 'Playfair Display',
    // fontWeight: 100,
    color: `rgb(250,226,173)`,
    fontSize: 15,
    letterSpacing: 1
    
  },
  address: {
    color: 'tomato',
    backgroundColor: 'rgba(0,0,0,0.7)',

  },
  clarionButton: {
    // backgroundColor: 'rgb(153,27,50)',
    backgroundColor: 'transparent',
    color: `rgb(250,226,173)`,
    // maxWidth: 150
  }
}
export default props => (
  <div style={styles.container}>
    <Segment style={styles.segment}>
      <Menu fluid inverted secondary pointing style={Object.assign({fontSize: props.menuLabelSize}, styles.menu)}>
        
        <Menu.Item name='resv' link active={false} onClick={props.rooms} > 
            <span style={styles.tabs}>ROOMS</span>
        </Menu.Item>

        <Menu.Item name='eat' active={false} link  onClick={props.rest} >
          <span style={styles.tabs}>EAT & DRINK</span>
        </Menu.Item>

        <Menu.Item name='amenities' active={false} link  onClick={props.amenities} >
          <span style={styles.tabs}>HOTEL AMENITIES</span>
        </Menu.Item>
        
        <Menu.Item name='group' active={false} link  onClick={props.group} >
          <span style={styles.tabs}>GROUP RESERVATIONS</span>
        </Menu.Item>
        
        <Menu.Item name='events' active={false} link onClick={props.events}>
          <span style={styles.tabs}>EVENTS</span>
        </Menu.Item>
        
        <Menu.Item name='discover' active={false} link onClick={props.discover}>
          <span style={styles.tabs}>DISCOVER</span>
        </Menu.Item>

        {/* // <Menu.Item name='restaurant' active={false} link onClick={props.team}>
        //   <span style={styles.tabs}>MEET THE TEAM</span>
        // </Menu.Item> */}

        

        <Menu.Menu position='right'>
          
          <Menu.Item name='weather' active={false} link>
            <p style={{lineHeight: '20px',color: 'rgb(250,226,173)', fontFamily: 'Roboto, sans-serif', fontWeight: 100, fontSize: 24, maxWidth: '24ch', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>{props.temp}&deg;F 
              <span style={{marginLeft: 10, fontSize: 16, fontFamily: 'Raleway, sans-serif', fontWeight: 600, }}> {props.wdesc} </span></p>
          </Menu.Item>

        </Menu.Menu>




        {/* <Menu.Menu position='right'>
          <Menu.Item name='restaurant' active={false} link  href='https://www.facebook.com/clarion.newhope.1'>
            <Icon name='facebook square'/>
          </Menu.Item>

          <Menu.Item name='restaurant' active={false} link  href='https://www.facebook.com/clarion.newhope.1'>
            <Icon name='instagram'/>
          </Menu.Item>  
        </Menu.Menu> */}

        <Menu.Menu position='right'>
          <Menu.Item>
            <Button style={styles.clarionButton} as='a' href='https://www.google.com/maps/dir/6426+Lower+York+Road,+New+Hope,+PA+18938'><Icon name='map'/></Button>
          </Menu.Item>
          <Menu.Item>
            <Button style={styles.clarionButton} as='a' href='https://mail.google.com/mail/?view=cm&fs=1&to=clarionsalespa@gmail.com'><Icon name='mail' /> </Button>
          </Menu.Item>
        </Menu.Menu>

      </Menu>
      
    </Segment>
  </div>
)