import React, { Component } from 'react'
import fire from '../database/Fire'
import { Form, Segment, Radio, Message, Menu, Container } from 'semantic-ui-react'


const styles = {
  container: {padding: '130px 100px 0px 100px'},
  body: {backgroundColor: `transparent`, textAlign: 'center'},
  jumbo: {backgroundColor: 'transparent', marginTop: -15},
  res: {color: '#100', fontSize: 30, textAlign: 'center', fontFamily: 'Roboto, sans-serif', fontWeight: 100},
  sub: {color: '#100', textAlign: 'center'},
  img: {diplay: 'block', width: '100%', height: 'auto'},
  badge: {marginRight: 10},
  tabs: {
    fontFamily: 'Playfair Display',
    color: `rgb(250,226,173)`,
  },
  address: {
    color: `#eee`,
    marginTop: 10,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    fontSize: 12
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
      groupType: 'Wedding',
      numberOfRooms: '1',
      numberOfNights: '1',
      arrivalDate: '',
      giftbags: 'Yes',
      specialRequest: 'None',
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handlePhoneChange = this.handlePhoneChange.bind(this)
    this.handleGroupNameChange = this.handleGroupNameChange.bind(this)
    this.handleGroupTypeChange = this.handleGroupTypeChange.bind(this)
    this.handleNumberOfRoomsChange = this.handleNumberOfRoomsChange.bind(this)
    this.handleNumberOfNightsChange = this.handleNumberOfNightsChange.bind(this)
    this.handleArrivalDateChange = this.handleArrivalDateChange.bind(this)
    this.handleGiftbagsChange = this.handleGiftbagsChange.bind(this)
    this.handleSpecialRequestChange = this.handleSpecialRequestChange.bind(this)
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
  handleGroupTypeChange(e){
    this.setState({groupType: e.target.value})
  }
  handleNumberOfRoomsChange(e){
    this.setState({numberOfRooms: e.target.value})
  }
  handleNumberOfNightsChange(e){
    this.setState({numberOfNights: e.target.value})
  }
  handleArrivalDateChange(e){
    this.setState({arrivalDate: e.target.value})
  }
  handleGiftbagsChange(e){
    this.setState({giftbags: e.target.value})
  }
  handleSpecialRequestChange(e){
    this.setState({specialRequest: e.target.value})
  }

  handleInsertData(email, name, phone, groupName, groupType, numberOfRooms, numberOfNights, arrivalDate, giftbags, specialRequest){
    
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
      giftbags,
      specialRequest
    }, ()=> {
      // Show Success Toast
      this.props.showToast()
    })
  }
  clearInputs(){
    this.refs.inputEmail.value = ''
    this.refs.inputName.value = ''
    this.refs.inputPhone.value = ''
    this.refs.inputGroupName.value = ''
    this.refs.inputRooms.value = ''
    this.refs.inputArrivalDate.value = ''
    this.refs.inputSpecialRequest.value = ''
  }
  handleSubmit(e){
    e.preventDefault()
    this.handleInsertData(this.state.email, this.state.name, this.state.phone, this.state.groupName, this.state.groupType, this.state.numberOfRooms, this.state.numberOfNights, this.state.arrivalDate, this.state.giftbags, this.state.specialRequest)
    this.clearInputs()
  }
  
  render(){
    
    return(
      <div style={styles.container}>

        {/* SEMANTIC */}
        <Segment>
          <Message 
            info 
            icon='info'
            header="We will never share your information to anyone."
          />
        <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Email' placeholder='Email Address' />
          <Form.Input fluid label='Contact Name' placeholder='Contact Name' />
          <Form.Input fluid label='Phone Number' placeholder='Phone Number' />
          <Form.Input fluid label='Group Name' placeholder='Group Name' />
        </Form.Group>
        <Form.Group inline>
          <label>Group Type</label>
          <Form.Field control={Radio} label='Wedding' value='Wedding' checked={false} onChange={this.handleGroupTypeChange} />
          <Form.Field control={Radio} label='Corporate' value='Corporate' checked={false} onChange={this.handleGroupTypeChange} />
          <Form.Field control={Radio} label='Sports Team' value='Sports Team' checked={false} onChange={this.handleGroupTypeChange} />
          <Form.Field control={Radio} label='Club' value='Club' checked={false} onChange={this.handleGroupTypeChange} />
        </Form.Group>
        <Form.Group inline>
          <label>Number of Rooms</label>
          <Form.Field control={Radio} label='5 Rooms' value='Wedding' checked={false} onChange={this.handleGroupTypeChange} />
          <Form.Field control={Radio} label='10 Rooms' value='Corporate' checked={false} onChange={this.handleGroupTypeChange} />
          <Form.Field control={Radio} label='15 Rooms' value='Sports Team' checked={false} onChange={this.handleGroupTypeChange} />
          <Form.Field control={Radio} label='More than 15 Rooms' value='Club' checked={false} onChange={this.handleGroupTypeChange} />
        </Form.Group>
        <Form.Group inline>
          <label>Nights of Stay</label>
          <Form.Field control={Radio} label='1 Night' value='Wedding' checked={false} onChange={this.handleGroupTypeChange} />
          <Form.Field control={Radio} label='2 Nights' value='Corporate' checked={false} onChange={this.handleGroupTypeChange} />
          <Form.Field control={Radio} label='3 Nights' value='Sports Team' checked={false} onChange={this.handleGroupTypeChange} />
          <Form.Field control={Radio} label='More 3 Nights' value='Club' checked={false} onChange={this.handleGroupTypeChange} />
        </Form.Group>
        <Form.TextArea label='Special Requests' placeholder='Type your requests here...' />
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Form.Button positive>Submit</Form.Button>
      </Form>
      </Segment>
        
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


        
        <div style={{position: 'absolute', top: this.props.top, width: window.innerWidth }}>
          <Menu fluid inverted widths={5}>
            
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
