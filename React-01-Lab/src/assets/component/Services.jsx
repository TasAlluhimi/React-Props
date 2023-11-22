import React from 'react'

function Services(props) {
  return (
    <div>
        <h1>Services: {props.services}</h1>
        <h2>Prices: {props.Prices}$</h2>
    </div>
  )
}

export default Services