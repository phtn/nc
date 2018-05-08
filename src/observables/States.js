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
const descriptions = [null, 'Luxury King Description']

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

      parallaxOffset: 1,
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

          />
            case 2: return <RoomsDesktop 
            image={images[this.roomComponent]} 
            header={headers[this.roomComponent]} 
            tag={tags[this.roomComponent]}
            description={descriptions[this.roomComponent]}
            back={back}
            top={top}
          />
          case 3: return <RoomsDesktop 
            image={images[this.roomComponent]} 
            header={headers[this.roomComponent]} 
            tag={tags[this.roomComponent]}
            description={descriptions[this.roomComponent]}
            back={back}
            top={top}
          />
          case 4: return <RoomsDesktop 
            image={images[this.roomComponent]} 
            header={headers[this.roomComponent]} 
            tag={tags[this.roomComponent]}
            description={descriptions[this.roomComponent]}
            back={back}
            top={top}
          />
          case 5: return <RoomsDesktop 
            image={images[this.roomComponent]} 
            header={headers[this.roomComponent]} 
            tag={tags[this.roomComponent]}
            description={descriptions[this.roomComponent]}
            back={back}
            top={top}
          />
          case 6: return <RoomsDesktop 
            image={images[this.roomComponent]} 
            header={headers[this.roomComponent]} 
            tag={tags[this.roomComponent]}
            description={descriptions[this.roomComponent]}
            back={back}
            top={top}
            />
          default: return <RoomSelectDesktop/>
        }
      }
    })
  }
}
export default States