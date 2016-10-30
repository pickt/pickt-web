import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import Card from '../../src/components/card'

describe('Card', () => {
  it('should render a div with the card class', () => {
    const card = shallow(<Card textItems={['item']}/>)

    expect(card.find('div.card').length).to.eql(1)
  })

  it('should render the title', () => {
    const card = shallow(<Card textItems={['items']} title={'Title'}/>)

    expect(card.contains(<h4 className='card-title'>Title</h4>)).to.eql(true)
  })

  it('should render the card text items', () => {
    const card = shallow(<Card textItems={['Item 1', 'Item 2']} title={'Title'}/>)

    expect(card.contains(<p className='card-text'>Item 1</p>)).to.eql(true)
    expect(card.contains(<p className='card-text'>Item 2</p>)).to.eql(true)
  })
})
