import React, { Component } from 'react'
import fire from '../database/Fire'
import { Form, Segment, Radio, Menu, Container, Header, Icon, Divider, Grid, Image } from 'semantic-ui-react'
import Umbrella from '../assets/umbrella.svg'
import Reception from '../assets/reception.svg'
import BrandNew from '../assets/brandnew.svg'
import PadLock from '../assets/padlock.svg'

const styles = {
  container: {padding: '130px 0px 0px 0px'},
  innerContainer: {
    height: 600,
    // backgroundColor: 'transparent',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: '0px 50px 0px 100px',
  },
  tabs: {
    fontFamily: 'Playfair Display',
    fontSize: 16,
    color: `rgb(250,226,173)`,
    letterSpacing: 1
  },
  address: {
    color: `#eee`,
    marginTop: -5,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    fontSize: 16
  },
  header: {
    color: 'rgb(165, 20, 55)'
  }
}




class Group extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      name: '',
      phone: '',
      groupName: '',
      groupType: 'WEDD',
      numberOfRooms: '10',
      numberOfNights: '1',
      arrivalDate: '',
      createdAt: null,
      submitted: false,
      submitClass: 'animated'
    }

    this.handleGroupTypeChange = (e, { value }) => this.setState({groupType: value })
    this.handleNumberOfRoomsChange = (e, { value }) => this.setState({numberOfRooms: value })
    this.handleNumberOfNightsChange = (e, { value }) => this.setState({numberOfNights: value })

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handlePhoneChange = this.handlePhoneChange.bind(this)
    this.handleGroupNameChange = this.handleGroupNameChange.bind(this)
    this.handleArrivalDateChange = this.handleArrivalDateChange.bind(this)
    
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleEmailChange(e){
    this.setState({email: e.target.value})
  }
  handleNameChange(e){
    this.setState({name: e.target.value})
  }
  handlePhoneChange(e){
    this.setState({phone: e.target.value})
  }
  handleGroupNameChange(e){
    this.setState({groupName: e.target.value})
  }
  
  handleArrivalDateChange(e){
    this.setState({arrivalDate: e.target.value})
  }
 

  handleInsertData(email, name, phone, groupName, groupType, numberOfRooms, numberOfNights, arrivalDate, createdAt){
    
    const db = fire.database().ref('groups/' + new Date())
    db.set({
      email,
      name,
      phone,
      groupName,
      groupType,
      numberOfRooms,
      numberOfNights,
      arrivalDate,
      createdAt
    }, ()=> {
      // Show Success Toast
      // this.props.showToast()
      // this.clearInputs()
      this.showSubmitSuccess()
    })
  }
  clearInputs(){
    this.setState({email: ''})
    this.setState({name: ''})
    this.setState({phone: ''})
    this.setState({groupName: ''})
    this.setState({groupType: 'WEDD'})
    this.setState({numberOfRooms: '10'})
    this.setState({numberOfNights: '1'})
  }
  showSubmitSuccess(){
    this.setState({submitted: true})
    
  }
  
  buttonSubmitSwitch(){
    if (!this.state.submitted){
      return <Form.Button fluid style={{backgroundColor: 'rgb(153,27,50)', color: '#eee', fontSize: 16}} className={this.state.submitClass} onClick={this.handleSubmit}>Submit</Form.Button>
    } else {
      return <Form.Button positive fluid className='animated zoomIn submit_success'><Icon name='check' /> &nbsp;Submit Successful!</Form.Button>
    }
  }

  handleSubmit(e){
    
    if (this.state.email !== '' && this.state.name !== '' && this.state.phone !== ''){
      this.setState({submitClass: 'animated zoomOut'})
      this.setState({createdAt: new Date()})
      e.preventDefault()
      this.handleInsertData(
        this.state.email, 
        this.state.name, 
        this.state.phone, 
        this.state.groupName, 
        this.state.groupType, 
        this.state.numberOfRooms, 
        this.state.numberOfNights, 
        this.state.arrivalDate, 
        this.state.createdAt
      )
    } else {
      this.setState({submitClass: 'animated shake'})
      setTimeout(()=> {this.setState({submitClass: ''})}, 300)
    }

    
  }



  
  
  render(){
    // const { value } = this.state
    return(
      <div style={styles.container}>
        <div style={styles.innerContainer}>


        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={8}>
            <Segment>
            <Form style={{fontSize: 16}}>
              <Header as='h2' style={styles.header}>
                <Header.Content style={{fontSize: 20}}>
                  Get Group Rates for Weddings, Sports Teams, Meetings or any events!
                  <Header.Subheader style={{fontSize: 16}}>
                    Our Sales Team will contact you within 24 hours.
                  </Header.Subheader>
                </Header.Content>
              </Header>
              <Divider/>
              <Form.Group widths='equal'>
                <Form.Input label='Email' placeholder='Email Address' onChange={this.handleEmailChange}/>
                <Form.Input fluid label='Contact Name' placeholder='Contact Name' onChange={this.handleNameChange}/>
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input fluid label='Phone Number' placeholder='Phone Number' onChange={this.handlePhoneChange}/>
                <Form.Input fluid label='Group Name' placeholder='Group Name' onChange={this.handleGroupNameChange}/>
              </Form.Group>
              <Form.Group inline>
                <label>Group Type</label>
                <Form.Field control={Radio} label='Wedding' value='WEDD' checked={this.state.groupType === 'WEDD'} onChange={this.handleGroupTypeChange} />
                <Form.Field control={Radio} label='Corporate' value='CORP' checked={this.state.groupType === 'CORP'} onChange={this.handleGroupTypeChange} />
                <Form.Field control={Radio} label='Sports Team' value='TEAM' checked={this.state.groupType === 'TEAM'} onChange={this.handleGroupTypeChange} />
                <Form.Field control={Radio} label='Club' value='CLUB' checked={this.state.groupType === 'CLUB'} onChange={this.handleGroupTypeChange} />
              </Form.Group>
              <Form.Group inline>
                <label>Estimated Rooms</label>
                <Form.Field control={Radio} label='10 Rooms' value='10' checked={this.state.numberOfRooms === '10'} onChange={this.handleNumberOfRoomsChange} />
                <Form.Field control={Radio} label='15 Rooms' value='15' checked={this.state.numberOfRooms === '15'} onChange={this.handleNumberOfRoomsChange} />
                <Form.Field control={Radio} label='15+ Rooms' value='15+' checked={this.state.numberOfRooms === '15+'} onChange={this.handleNumberOfRoomsChange} />
              </Form.Group>
              <Form.Group inline>
                <label>Estimated Nights</label>
                <Form.Field control={Radio} label='1 Night' value='1' checked={this.state.numberOfNights === '1'} onChange={this.handleNumberOfNightsChange} />
                <Form.Field control={Radio} label='2 Nights' value='2' checked={this.state.numberOfNights === '2'} onChange={this.handleNumberOfNightsChange} />
                <Form.Field control={Radio} label='3 Nights' value='3' checked={this.state.numberOfNights === '3'} onChange={this.handleNumberOfNightsChange} />
                <Form.Field control={Radio} label='3+ Nights' value='3+' checked={this.state.numberOfNights === '3+'} onChange={this.handleNumberOfNightsChange} />
              </Form.Group>
              <Form.Group inline><Form.Input   label='Date of Arrival' placeholder='MM / DD / YEAR' onChange={this.handleArrivalDateChange}/></Form.Group>
              
              {this.buttonSubmitSwitch()}

              </Form>
              </Segment>
            </Grid.Column>
            
            <Grid.Column width={8}>
              <h1 style={{color: '#fff', fontFamily: 'Raleway, sans-serif'}}>The Clarion Inn & Suites <span style={{color: '#fff', fontSize: 18}}>of New Hope & Lambertville</span></h1>
              <Divider/>
              <Grid> 
                <Grid.Row>
                  <Grid.Column width={3}><Image src={Umbrella} size='tiny' style={{height: 50}}/></Grid.Column>
                  <Grid.Column width={9}>
                    <p style={{color: '#fff', fontSize: 28}}>We've got you covered.</p>
                    <p style={{color: '#fff', fontSize: 16, marginTop: '-30px', fontFamily: 'Roboto, sans-serif', fontWeight: 100}}>Best Rates Guaranteed!</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <Grid> 
                <Grid.Row>
                  <Grid.Column width={3}><Image src={Reception} size='tiny' style={{height: 50}}/></Grid.Column>
                  <Grid.Column width={9}>
                    <p style={{color: '#fff', fontSize: 28}}>24/7 Guest Services.</p>
                    <p style={{color: '#fff', fontSize: 16, marginTop: '-30px', fontFamily: 'Roboto, sans-serif', fontWeight: 100}}>Always ready to assist you.</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <Grid> 
                <Grid.Row>
                  <Grid.Column width={3}><Image src={BrandNew} size='tiny' style={{height: 50}}/></Grid.Column>
                  <Grid.Column width={9}>
                    <p style={{color: '#fff', fontSize: 28}}>All Brand New Rooms.</p>
                    <p style={{color: '#fff', fontSize: 16, marginTop: '-30px', fontFamily: 'Roboto, sans-serif', fontWeight: 100}}>Modern & Elegant Design.</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <Grid> 
                <Grid.Row>
                  <Grid.Column width={3}><Image src={PadLock} size='tiny' style={{height: 50}}/></Grid.Column>
                  <Grid.Column width={9}>
                    <p style={{color: '#fff', fontSize: 28}}>We Value your Privacy.</p>
                    <p style={{color: '#fff', fontSize: 16, marginTop: '-30px', fontFamily: 'Roboto, sans-serif', fontWeight: 100}}>We will never share your information to anyone.</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>


            </Grid.Column>
          </Grid.Row>
        </Grid>


        {/* <Segment style={{background: 'transparent'}}>
        <Menu widths={2} borderless>
        <Menu.Item style={{background: 'transparent'}}>
          test
        </Menu.Item>
        <Menu.Item>
        
        

        <Divider/>
        <Form>

        <Header as='h2' style={styles.header}>
          
          <Header.Content>
            Get Group Rates for Weddings, Sports Teams, Meetings or any events!
            <Header.Subheader>
              Our Sales Team will contact you within 24 hours.
            </Header.Subheader>
          </Header.Content>
        </Header>

        <Form.Group widths='equal'>
          <Form.Input  label='Email' placeholder='Email Address' />
          <Form.Input fluid label='Contact Name' placeholder='Contact Name' />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Phone Number' placeholder='Phone Number' />
          <Form.Input fluid label='Group Name' placeholder='Group Name' />
        </Form.Group>
        <Form.Group inline>
          <label>Group Type</label>
          <Form.Field control={Radio} label='Wedding' value='Wedding' checked={true} onChange={this.handleGroupTypeChange} />
          <Form.Field control={Radio} label='Corporate' value='Corporate' checked={false} onChange={this.handleGroupTypeChange} />
          <Form.Field control={Radio} label='Sports Team' value='Sports Team' checked={false} onChange={this.handleGroupTypeChange} />
          <Form.Field control={Radio} label='Club' value='Club' checked={false} onChange={this.handleGroupTypeChange} />
        </Form.Group>
        <Form.Group inline>
          <label>Estimated Rooms</label>
          <Form.Field control={Radio} label='10 Rooms' value='Corporate' checked={false} onChange={this.handleGroupTypeChange} />
          <Form.Field control={Radio} label='15 Rooms' value='Sports Team' checked={false} onChange={this.handleGroupTypeChange} />
          <Form.Field control={Radio} label='More than 15' value='Club' checked={true} onChange={this.handleGroupTypeChange} />
        </Form.Group>
        <Form.Group inline>
          <label>Estimated Nights</label>
          <Form.Field control={Radio} label='1 Night' value='Wedding' checked={false} onChange={this.handleGroupTypeChange} />
          <Form.Field control={Radio} label='2 Nights' value='Corporate' checked={true} onChange={this.handleGroupTypeChange} />
          <Form.Field control={Radio} label='3 Nights' value='Sports Team' checked={false} onChange={this.handleGroupTypeChange} />
          <Form.Field control={Radio} label='More than 3 Nights' value='Club' checked={false} onChange={this.handleGroupTypeChange} />
        </Form.Group>
        <Form.TextArea label='Special Requests' placeholder='Type your requests here...' />

        <Message 
          info 
          icon='info'
          header="We will never share your information to anyone."
        />
        
        <Form.Button color='red' >Submit</Form.Button>
      </Form>
      </Menu.Item>
      </Menu>
      </Segment> */}
        
        {/* <div className="animated fadeIn" style={styles.body}>
        <div className="jumbotron" style={styles.jumbo}>
        

            <form>
              <fieldset>
                
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input  ref="inputEmail" onChange={this.handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                
                <div className="form-group">
                  <label htmlFor="contactName">Contact Name</label>
                  <input ref="inputName" onChange={this.handleNameChange} type="text" className="form-control" id="contactName" placeholder="Contact Name"/>
                </div>

                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input ref="inputPhone" onChange={this.handlePhoneChange} type="number" className="form-control" id="phoneNumber" placeholder="Phone Number"/>
                </div>

                <div className="form-group">
                  <label htmlFor="groupName">Group Name</label>
                  <input ref="inputGroupName" onChange={this.handleGroupNameChange} type="text" className="form-control" id="groupName" placeholder="Group Name"/>
                </div>



                <div className="form-group">
                  <label htmlFor="groupType">Group Type</label>
                  <select onChange={this.handleGroupTypeChange} className="form-control" id="groupType">
                    <option>Wedding</option>
                    <option>Company</option>
                    <option>Sports Team</option>
                    <option>Family</option>
                    <option>Club</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="numberOfRooms">Number of Rooms</label>
                  <input ref="inputRooms" onChange={this.handleNumberOfRoomsChange} type="number" className="form-control" id="phoneNumber" placeholder="Number of Rooms needed"/>
                </div>

                <div className="form-group">
                  <label htmlFor="stay">Nights of Stay</label>
                  <select onChange={this.handleNumberOfNightsChange} className="form-control" id="stay">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>More than 5</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="arrivalDate">Arrival Date</label>
                  <input ref="inputArrivalDate" onChange={this.handleArrivalDateChange} type="number" className="form-control" id="arrival" placeholder="MM / DD / YYYY"/>
                </div>

                

                <div className="form-group">
                  <label htmlFor="giftBags">Gift Bags</label>
                  <select onChange={this.handleGiftbagsChange} multiple="" className="form-control" id="giftBags">
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="exampleTextarea">Special Requests</label>
                  <textarea ref="inputSpecialRequest" onChange={this.handleSpecialRequestChange} className="form-control" id="requests" rows="3"></textarea>
                </div>
                
                
                
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
              </fieldset>
            </form>


            
            
        </div>

        

        </div> */}

        </div>
        
        <div style={{position: 'absolute', top: this.props.top, width: window.innerWidth }}>
          <Menu fluid inverted widths={5} style={{borderRadius: 0}}>
            
            <Menu.Item name='rooms' active={false} link  onClick={this.props.rooms} >
              <span style={styles.tabs}>ROOMS</span>
            </Menu.Item>
            <Menu.Item name='eat' active={false} link  onClick={this.props.rest} >
              <span style={styles.tabs}>EAT & DRINK</span>
            </Menu.Item>

            <Menu.Item name='eat' active={false} link  onClick={this.props.amenities} >
              <span style={styles.tabs}>HOTEL AMENITIES</span>
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
export default Group
