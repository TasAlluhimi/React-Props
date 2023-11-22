import React from 'react'
import Companies from './Companies'
import Services from './Services'

function Programers(props) {
  return (
    <div>
            <h2>Name: {props.name}</h2>
            <h2>Languages: {props.Languages}</h2>
            <h2>experiance: {props.exp}</h2>
            <h2>Company Name: {props.cn}</h2>
    </div>
  )
}

export default Programers