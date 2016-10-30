import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'

/* setup.js */

var jsdom = require('jsdom').jsdom;

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

import App from '../../src/components/app'
import Navbar from '../../src/components/navbar'

test('App renders the navbar', t => {
  const app = shallow(<App />)
  t.deepEqual(app.find(Navbar).length, 1)
})

test('It fetches data', t => {
  sinon.stub(App.prototype, 'componentDidMount')
  const app = mount(<App />)
  t.deepEqual(App.prototype.componentDidMount.calledOnce, true)
})
