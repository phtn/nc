import React from 'react'
import { extendObservable } from 'mobx'

// pages
import Home from '../pages/Home'

class Renderer {
  constructor(){
    extendObservable(this, {
      activeComponent: 'home',
      get component(){
        switch(this.activeComponent){
          case 'home': return <Home/>
          default: return <Home/>
        }
      }
    })
  }
}
export default Renderer