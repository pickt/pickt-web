import React, { Component } from 'react';
import Navbar from './navbar'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {markets: []}
  }

  componentDidMount() {
    const self = this

    $.ajax({
      type: "GET",
      contentType: "application/json; charset=utf-8",
      url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=67208",
      dataType: 'jsonp',
      success: function(data) { 
        self.setState({markets: data.results})
      }
    });
  }

  render() {
    return (
      <div className='row'>
        <Navbar links={['Sign In', 'Contact']} />
        {this.state.markets.map(market => {
          return <p key={market.id}>{market.marketname}</p>
        })}
      </div>
    );
  }
}
