export const getMarkets = (baseURL, zip) => {
  return $.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    url: `${baseURL}/zipSearch?zip=${zip}`,
    dataType: 'jsonp'
  })
}
