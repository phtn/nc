import { extendObservable } from 'mobx'


class Layout {
  constructor(){
    extendObservable(this, {
      width: window.innerWidth,
      height: window.innerHeight,
      resizedWidth(width){
        this.width = width
      },
      resizedHeight(height){
        this.height = height
      }
    })
  }
}
export default Layout