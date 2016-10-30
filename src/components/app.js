import React, { Component } from 'react';
import Navbar from './navbar'
import Card from './card'
import { getMarketDetails } from '../services/get-market-details'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {markets: [], marketDetails: []}
    this.updateMarketDetails = this.updateMarketDetails.bind(this)
    this.updateMarkets = this.updateMarkets.bind(this)
  }

  componentDidMount() {
    const baseURL = 'http://search.ams.usda.gov/farmersmarkets/v1/data.svc/'
    const zip = '67208';

    const self = this;

    $.ajax({
      type: "GET",
      contentType: "application/json; charset=utf-8",
      url: `${baseURL}/zipSearch?zip=${zip}`,
      dataType: 'jsonp',
      success: (data) => {
        this.updateMarkets(data.results)

        const ids = this.state.markets.map(market => market.id)
        ids.forEach(id => {
          getMarketDetails(id, this.updateMarketDetails)
        })
      },
      fail: err => console.log(err)
    });

  }

  updateMarketDetails(data) {
    const { marketDetails } = this.state
    this.setState({marketDetails: marketDetails.concat(data)})
  }

  updateMarkets(data) {
    this.setState({markets: this.state.markets.concat(data)})
  }

  render() {
    const details = () => {
      if(this.state.marketDetails.length) {
        return this.state.marketDetails.map(market => {
          const {
            Address, 
            GoogleLink, 
            Products, 
            Schedule
          } = market.marketdetails

          return (
            <Card 
              title={market.marketdetails.Address} textItems={[]} 
              textItems={[Address, GoogleLink, Products, Schedule]}
              key={GoogleLink}
            />
          )
        })
      }

      return <p>No Details</p>
    }
    return (
      <div className='row'>
        <Navbar links={['Sign In', 'Contact']} />
        {details()}
      </div>
    );
  }
}
