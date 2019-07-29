
import axios from "axios";

//const beforeAPIKEY = '&apikey='


// const BASEURL = "https://app.ticketmaster.com/discovery/v2/events.json?"

// const COUNTRY = "&countryCode=US"

// const keyword = "&keyword="

// const STATE = "&stateCode=CA"

// const CITY = "&city=losangeles"
// https://app.ticketmaster.com/discovery/v2/events.json?&keyword=lady&stateCode=CA
// Export an object with a "search" method that searches the API for the passed query
export default {
  search: function(query, geohash) {
    return axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${query}&countryCode=US&apikey=h0unNltRv7LnmEOS2kYZ43GR9GKBQjCC
  &geoPoint=${geohash}
    `);
  }, 
   // &latlong=${latlon}
  // getEvents: function(id) {
  //   return axios.get("/api/events/" + id);
  // },
  // deleteEvent: function(id) {
  //   return axios.delete("/api/events/" + id);
  // },
  // // Saves a events to the database
  // saveEvent: function(eventData) {
  //   return axios.post("/api/events", eventData);
  // },
  
  // getSavedEvent: function(){
  //   return axios.get("/api/events")
  // }
};