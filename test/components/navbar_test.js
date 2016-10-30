import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import Navbar from '../../src/components/navbar'

test('Navbar renders with appropriate number of links', t => {
  const navbar = shallow(<Navbar links={['Sign in', 'About']} />)
  t.deepEqual(navbar.find('nav ul.nav li').length, 2)
})

test('Navbar renders the links as text', t => {
  const navbar = shallow(<Navbar links={['Sign in', 'About']} />)
  const signIn = <a className='nav-link' href='#'>Sign in</a>
  const about = <a className='nav-link' href='#'>About</a>

  t.deepEqual(navbar.contains(signIn), true)
  t.deepEqual(navbar.contains(about), true)
})
