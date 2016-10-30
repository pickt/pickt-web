import React, { Component } from 'react';
import Navbar from './navbar'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {markets: []}
  }

  componentDidMount() {
    const baseURL = 'http://search.ams.usda.gov/farmersmarkets/v1/data.svc/'
    const zip = '67208';

    $.ajax({
      type: "GET",
      contentType: "application/json; charset=utf-8",
      url: `${baseURL}/zipSearch?zip=${zip}`,
      dataType: 'jsonp',
      success: (data) => this.setState({markets: data.results}),
      fail: err => console.log(err)
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
