import { extendObservable } from 'mobx'


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

      sidebarVisibility: true,
      toggleSidebar(state){
        this.sidebarVisibility = !state
        console.log(this.sidebarVisibility)
      }
    })
  }
}
export default States