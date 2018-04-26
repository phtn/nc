import React, { Component } from 'react'
// mobx
import { observer } from 'mobx-react'
// observables
import Renderer from './observables/Renderer'
// semantic
import 'semantic-ui-css/semantic.min.css'
// components
import Header from './components/Header'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'

const renderThis = new Renderer()

const App = observer(
  class Main extends Component {
    constructor(props){
      super(props)
      this.state = {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }
    render() {
      console.log(window.innerHeight)
      return (
        <div>
          {/* <Header width={this.state.width} height={this.state.height}/> */}
          {renderThis.component}
          {/* <Navbar/> */}
          {/* <Footer/> */}
          
        </div>
      )
    }
  }
)

export default App;
