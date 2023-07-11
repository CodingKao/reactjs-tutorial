import React, { Component } from 'react'

class UserGreeting extends Component {

constructor(props) {
  super(props)

  this.state = {
     isLoggedIn: true
  }
}

  render() {

    // 1st Method: if/else condition rendering
    // if (this.state.isLoggedIn) {
    //     return <div>Welcome Kao</div>        
    // } else {
    //     return <div>Welcome Guest</div> 
    // }

    // 2nd Method: Element variable rendering
    // let message
    // if (this.state.isLoggedIn) {
    //     message = <div>Welcome Kao</div>        
    // } else {
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>


    // 3rd Method: Ternary conditional operator rendering
    // return(
    //     this.state.isLoggedIn ?
    //     <div>Welcome Kao</div> :
    //     <div>Welcome Guest</div>
    // )


    // 4th Method: Short circuit operator rendering
    return this.state.isLoggedIn && <div>Welcome Kao</div>

    // return (
    //   <div>
    //     <div>UserGreeting Welcome Kao</div>
    //     <div>UserGreeting Welcome Guest</div>
    //  </div>
    // )

  }
}

export default UserGreeting