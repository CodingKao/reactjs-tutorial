import React from 'react';

// Conventional way of writing a function
// function Greet() {
//     return <h1>Hello Kao!</h1>
// }

// ES6 way of writing a function
// const Greet = (props) => {
//     console.log(props)

//     return (
//         <div>
//             <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//             {props.children}
//         </div>
//     )
// }

// Destructuring props in the function parameters
const Greet = props => {
    const {name, heroName} = props

    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            {/* {props.children} */}
        </div>
    )
}

export default Greet;