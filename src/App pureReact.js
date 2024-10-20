import React from 'react'
import ReactDOM from 'react-dom'

let Pet = (props) => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('h2', {}, props.animal),
        React.createElement('h2', {}, props.breed),
    ])
}

const App = () => {
    return React.createElement(
        'div', //top level element that App will return
        {}, // attributes to go into the top level div
        [
            React.createElement('h1', {}, 'Adopt Me please!'), //puts an h1 inside the div
            React.createElement(Pet, {
                name: 'Luna',
                breed: 'Mutt',
                animal: 'Cat',
            }),
            React.createElement(Pet, {
                name: 'Opal',
                breed: 'Mutt',
                animal: 'Cat',
            }),
        ]
    )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))
