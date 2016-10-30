import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Navbar from '../../src/components/navbar'

describe('App' , () => {
  it('should render the Navbar with the appropriate number of links', () => {
    const navbar = shallow(<Navbar links={['Sign in', 'About']} />)
    expect(navbar.find('nav ul.nav li').length).to.eql(2)
  });

  it('should render the links as text', () => {
    const navbar = shallow(<Navbar links={['Sign in', 'About']} />)
    const signIn = <a className='nav-link' href='#'>Sign in</a>
    const about = <a className='nav-link' href='#'>About</a>

    expect(navbar.contains(signIn)).to.eql(true)
    expect(navbar.contains(about)).to.eql(true)
  })
});
