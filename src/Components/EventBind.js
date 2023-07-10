import React, { Component } from 'react'

class EventBind extends Component {

constructor(props) {
  super(props)

  this.state = {
     message: 'Hello'
  }

  // Approach 3: Binding in the constructor
//   this.clickHandler = this.clickHandler.bind(this)
}

// clickHandler() {
//     this.setState({
//         message: 'Goodbye!'
//     })
//     console.log(this)
// }


// Approach 4: Use Arrow Function a Class Property
clickHandler = () => {
    this.setState({
        message: 'Goodbye!'
    })
    console.log(this)
}


  render() {
    return (
      <div>
        <div>{this.state.message}</div>

        {/* // Approach 1: Binding in the render method */}
        {/* <button onClick ={this.clickHandler.bind(this)}>Click Me Bind</button> */}

        {/* // Aprroach 2: Class property as arrow function */}
        {/* <button onClick ={() => this.clickHandler()}>Click Me Bind</button> */}

        {/* // Approach 3: Binding in the constructor */}
        {/* <button onClick ={this.clickHandler}>Click Me Bind</button> */}

        {/* // Approach 4: Use Arrow Function a Class Property*/}
        <button onClick ={() => this.clickHandler()}>Click Me Bind</button>

      </div>
    )
  }
}

export default EventBind