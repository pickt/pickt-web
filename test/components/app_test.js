import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import App from '../../src/components/app'
import Navbar from '../../src/components/navbar'

describe('App' , () => {
  it('should render the Navbar', () => {
    const app = shallow(<App />)
    expect(app.find(Navbar)).to.have.length(1);
  });
});
