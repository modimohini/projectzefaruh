
  import axios from "axios";
  
const APIKEY = process.env.APIKEY1


// Export an object with a "search" method that searches the API for the passed query
export default {
  search: function(query) {
    return axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${query}&source=universe&countryCode=US&apikey=${APIKEY}`);
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