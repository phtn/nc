import { extendObservable } from 'mobx'


class Layout {
  constructor(){
    extendObservable(this, {
      width: window.innerWidth,
      resizedWidth(width){
        this.width = width
      }
    })
  }
}
export default Layout