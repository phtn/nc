import React from 'react'
import { extendObservable } from 'mobx'
import RoomSelectDesktop from '../components/RoomSelectDesktop'
import RoomsDesktop from '../components/RoomsDesktop'

// images
import King from '../assets/images/eNK1.png'
import Doubles from '../assets/images/erNDD2.png'
import KingSuite from '../assets/images/ROOM1.jpg'
import JacuzziSuite from '../assets/images/erGSK2_40.jpg'
// room props
const images = [null, King, Doubles, KingSuite, Doubles, JacuzziSuite]
const headers = [null, 'Luxury King Bed', '2 Double Beds', 'Luxury King Suite', '2 Double Bed Suite', 'Grand Jacuzzi Suite']
const tags = [null, 'POPULAR CHOICE', "FAMILY'S CHOICE", ""]
const descriptions = [null, 
  'Reserve this Luxurious Brand New King Room. It comes with a new very comfortable King Bed, Spacious with a modern design filled with art paintings of the historic local town. It has a fully equipped bathroom and plenty of universal power outlets on bedside tables and work area.  It also has a home automation system which automatically regulates the temperature of the room based on guest presence or absence from the room. ',
  'This Brand New Room comes with a new very comfortable 2 Double beds, Spacious with a modern design filled with art paintings of the historic local town. It has a fully equipped bathroom and plenty of universal power outlets on bedside tables and work area.  It also has a home automation system which automatically regulates the temperature of the room based on guest presence or absence from the room. ',
  'Reserve this Luxurious Brand New King Suite. It comes with a new very comfortable King Bed, Spacious with a modern design filled with art paintings of the historic local town. It has a fully equipped bathroom and plenty of universal power outlets on bedside tables and work area.  It also has a home automation system which automatically regulates the temperature of the room based on guest presence or absence from the room. With a huge sitting area with another set of 42in TV, microwave and fridge.',
  'Two Double Bed Suite is one of a kind. It comes with a new very comfortable King Bed, Spacious with a modern design filled with art paintings of the historic local town. It has a fully equipped bathroom and plenty of universal power outlets on bedside tables and work area.  It also has a home automation system which automatically regulates the temperature of the room based on guest presence or absence from the room. With a huge sitting area with another set of 42in TV, microwave and fridge.',
  'This Superior category Jacuzzi Suite is the finest in all Bucks County. It comes with a new very comfortable King Bed, Spacious with a modern design filled with art paintings of the historic local town. It has a fully equipped bathroom and plenty of universal power outlets on bedside tables and work area.  It also has a home automation system which automatically regulates the temperature of the room based on guest presence or absence from the room. With a huge sitting area with another set of 42in TV, microwave and fridge, and of course, A state of the art Jacuzzi system.',
]

class States {
  constructor(){
    extendObservable(this, {
      // width: window.innerWidth,
      // height: window.innerHeight,
      // resizedWidth(width){
      //   this.width = width
      // },
      // resizedHeight(height){
      //   this.height = height
      // }

      // sidebarVisibility: true,
      // toggleSidebar(state){
      //   this.sidebarVisibility = !state
      //   console.log(this.sidebarVisibility)
      // }

      parallaxOffset: 0,
      setOffset(offset){
        this.parallaxOffset = offset
      },
      roomImageHeight: null,
      roomComponent: 0,
      setComponent(component){
        this.roomComponent = component
      },
      getRoomComponent(rest, amenities, group, events, discover, top, back, king, doubles, ksuite, dsuite, jsuite){
        switch(this.roomComponent){
          case 0: return <RoomSelectDesktop
            rest={rest}
            amenities={amenities}
            group={group}
            events={events}
            discover={discover} 
            top={top} 
            king={king}
            doubles={doubles}
            ksuite={ksuite}
            dsuite={dsuite}
            jsuite={jsuite}
          />
          case 1: return <RoomsDesktop 
            image={images[this.roomComponent]} 
            header={headers[this.roomComponent]} 
            tag={tags[this.roomComponent]}
            description={descriptions[this.roomComponent]}
            back={back}
            top={top}
            rest={rest}
            amenities={amenities}
            group={group}
            events={events}
            discover={discover} 
          />
            case 2: return <RoomsDesktop 
            image={images[this.roomComponent]} 
            header={headers[this.roomComponent]} 
            tag={tags[this.roomComponent]}
            description={descriptions[this.roomComponent]}
            back={back}
            top={top}
            rest={rest}
            amenities={amenities}
            group={group}
            events={events}
            discover={discover} 
          />
          case 3: return <RoomsDesktop 
            image={images[this.roomComponent]} 
            header={headers[this.roomComponent]} 
            tag={tags[this.roomComponent]}
            description={descriptions[this.roomComponent]}
            back={back}
            top={top}
            rest={rest}
            amenities={amenities}
            group={group}
            events={events}
            discover={discover} 
          />
          case 4: return <RoomsDesktop 
            image={images[this.roomComponent]} 
            header={headers[this.roomComponent]} 
            tag={tags[this.roomComponent]}
            description={descriptions[this.roomComponent]}
            back={back}
            top={top}
            rest={rest}
            amenities={amenities}
            group={group}
            events={events}
            discover={discover} 
          />
          case 5: return <RoomsDesktop 
            image={images[this.roomComponent]} 
            header={headers[this.roomComponent]} 
            tag={tags[this.roomComponent]}
            description={descriptions[this.roomComponent]}
            back={back}
            top={top}
            rest={rest}
            amenities={amenities}
            group={group}
            events={events}
            discover={discover} 
          />
          case 6: return <RoomsDesktop 
            image={images[this.roomComponent]} 
            header={headers[this.roomComponent]} 
            tag={tags[this.roomComponent]}
            description={descriptions[this.roomComponent]}
            back={back}
            top={top}
            rest={rest}
            amenities={amenities}
            group={group}
            events={events}
            discover={discover} 
            />
          default: return <RoomSelectDesktop/>
        }
      }
    })
  }
}
export default States