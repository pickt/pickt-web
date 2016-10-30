import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import Card from '../../src/components/card'

test('Card renders with card class', t => {
  const card = shallow(<Card textItems={['item']} />)
  t.deepEqual(card.find('div.card').length, 1)
})

test('Card renders with it\'s proper title', t => {
  const card = shallow(<Card textItems={['item']} title={'Title'}/>)
  t.deepEqual(card.contains(<h4 className='card-title'>Title</h4>), true)
})

test('Card renders the text items', t => {
  const card = shallow(<Card textItems={['Item 1', 'Item 2']} title={'Title'}/>)
  t.deepEqual(card.contains(<p className='card-text'>Item 1</p>), true)
  t.deepEqual(card.contains(<p className='card-text'>Item 2</p>), true)
})
