const axios = require("axios");
const HttpError = require("../models/http-error");
const API_KEY = "pk.327e0a34fd1c21330f5ce623b7fefa9f";
 
async function getCoordsForAddress(address) {
  const response = await axios.get(
    `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${encodeURIComponent(
      address
    )}&format=json`
  );
 
  const data = response.data[0];
 
  console.log(data);
 
  if (!data || data.status === "ZERO_RESULTS") {
    const error = new HttpError(
      "Could not find location for the specified address.",
      422
    );
    throw error;
  }
 
  const coorLat = data.lat;
  const coorLon = data.lon;
  const coordinates = {
    lat: coorLat,
    lng: coorLon
  };
 
  return coordinates;
}
 
module.exports = getCoordsForAddress;