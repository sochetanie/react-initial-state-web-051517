import React from 'react';
import ReactDOM from 'react-dom';

// import ToggleButton from './components/ToggleButton'

// ReactDOM.render(
//     <ToggleButton />,
//     document.getElementById('root')
// )


import Address from './components/Address'

ReactDOM.render(
    <Address
        street='Santa Monica Blvd.'
        city='Santa Monica' />,
    document.getElementById('root')
)