import React from 'react'

const Card = (props) => (
  <div className='card'>
    <div className='card-block'>
      <h4 className='card-title'>{props.title}</h4>
      {props.textItems.map(item => (
        <p key={Math.random()} className='card-text'>{item}</p>
      ))}
    </div>
  </div>
)

export default Card
