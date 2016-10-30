export const getMarketDetails = (id, cb) => {
  $.ajax({
    type: 'GET',
    contentType: 'application/json; charset=utf-8',
    url: 'http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=' + id,
    dataType: 'jsonp',
    success: data => {
      cb(data)
      // self.setState({marketDetails: self.state.marketDetails.concat(data)})
    }
  })
}

