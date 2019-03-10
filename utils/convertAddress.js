const NodeGeocoder = require('node-geocoder');
require('dotenv').config();


var options = {
  provider: 'mapquest',
  apiKey: process.env.MAPQUEST_KEY,
};

var geocoder = NodeGeocoder(options);

const convertAddress = function(req, res) {
  console.log("geocoding")
  geocoder.geocode(req, function(err, res) {
    console.log(res);
    return res;
  });

  // geocoder.geocode(req)
  // .then(function(res) {
  //   console.log(res);
  //   return res.json(res);
  // })
  // .catch(function(err) {
  //   console.log(err);
  // });
return res;
};
module.exports = convertAddress;