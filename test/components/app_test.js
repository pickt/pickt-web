import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import App from '../../src/components/app'
import Navbar from '../../src/components/navbar'

test('App', t => {
  const app = shallow(<App />)
  t.deepEqual(app.find(Navbar).length, 1)
})
