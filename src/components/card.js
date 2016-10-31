import React, { PropTypes } from 'react'

const Card = ({ title, textItems }) => (
  <div className='card'>
    <div className='card-block'>
      <h4 className='card-title'>{title}</h4>
      {textItems.map(item => (
        <p key={Math.random()} className='card-text'>{item}</p>
      ))}
    </div>
  </div>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
  textItems: PropTypes.array.isRequired
}

export default Card
