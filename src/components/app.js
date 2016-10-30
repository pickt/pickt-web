import React, { Component } from 'react';
import Navbar from './navbar'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {markets: [], marketDetails: []}
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
        this.setState({markets: data.results})
        console.log(this.state)
        const ids = this.state.markets.map(market => market.id)
        ids.forEach(id => {

        $.ajax({
          type: 'GET',
          contentType: 'application/json; charset=utf-8',
          url: 'http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=' + id,
          dataType: 'jsonp',
          success: data => self.setState({marketDetails: self.state.marketDetails.concat(data)})
        })

        })
      },
      fail: err => console.log(err)
    });
  }

  render() {
    const details = () => {
      if(this.state.marketDetails.length) {
        return this.state.marketDetails.map(market => {
          console.log(market)
          return (
            <div className='card'>
              <div className='card-block'>
                <h4 className='card-title'>{market.marketdetails.Address}</h4>
                <p className='card-text'>{market.marketdetails.GoogleLink}</p>
                <p className='card-text'>{market.marketdetails.Products}</p>
                <p className='card-text'>{market.marketdetails.Schedule}</p>
              </div>
            </div>
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
