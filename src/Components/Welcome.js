import { React, Component } from 'react';

// create a class that extends Component
// class Welcome extends Component {
//     render() {
//         return <h1>Class Component {this.props.name} a.k.a {this.props.heroName}</h1>
//     }
// }

// Desctructuring props in the render method
class Welcome extends Component {
    render() {
        const {name, heroName} = this.props
        return <h1>Class Component {name} a.k.a {heroName}</h1>
    }
}


export default Welcome;