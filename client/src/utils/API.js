
import axios from "axios";
  
const beforeAPIKEY = '&apikey='

const APIKEY =  process.env.APIKEY1

const BASEURL = "https://app.ticketmaster.com/discovery/v2/events.json?"

const COUNTRY = "&countryCode=US"

const keyword = "&keyword="

const STATE = "&stateCode=CA"

const CITY = "&city=losangeles"

// Export an object with a "search" method that searches the API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + keyword + query + STATE + CITY + COUNTRY + beforeAPIKEY + APIKEY );
  },
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