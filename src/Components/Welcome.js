import { React, Component } from 'react';

// create a class that extends Component
class Welcome extends Component {
    render() {
        return <h1>Class Component {this.props.name} a.k.a {this.props.heroName}</h1>
    }
}

export default Welcome;