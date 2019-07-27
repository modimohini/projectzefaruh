import React, { Component } from "react"
import Container from '../Components/Container'
// import InputBox from '../Components/InputBox'
// import Nav from '../Components/Nav'
import TextField from '@material-ui/core/TextField';
import DatePicker from '../Components/DatePicker'
import CategoryInput from "../Components/CategoryInput"
import SearchButton from "../Components/Button"
import Location from "../Components/Location"
import API from "../utils/API";

 var latlon;
//  var showPosition;
//  var showError

class Home extends Component {

    state = {
        eventSearched: "",
        selectedDate: "",
        events: [],
        nameofmyself: "kate"
    }



    // searchTicketMaster = (query, latlon) => {
    //     API.search(query, latlon)
    //     .then(res => {
    //     console.log("response" + res);
    //     // this.setState({ events: res.data });
    //     })
    //     .catch(err => console.log(err));
    //     };

    // showError = error => {
    //     switch(error.code) {
    //         case error.PERMISSION_DENIED:
    //             alert("User denied the request for Geolocation.")
    //             break;
    //         case error.POSITION_UNAVAILABLE:
    //             alert("Location information is unavailable.")
    //             break;
    //         case error.TIMEOUT:
    //             alert("The request to get user location timed out.")
    //             break;
    //         case error.UNKNOWN_ERROR:
    //             alert("An unknown error occurred.")
    //             break;
    //     }
    // }
    
    // addMarker = (map, event) => {
    //   var marker = new google.maps.Marker({
    //     position: new google.maps.LatLng(event._embedded.venues[0].location.latitude, event._embedded.venues[0].location.longitude),
    //     map: map
    //   });
    //   marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
    //   console.log(marker);
    // }

    // initMap = (position, json)  => {
    //   var mapDiv = document.getElementById('map');
    //   var map = new google.maps.Map(mapDiv, {
    //     center: {lat: position.coords.latitude, lng: position.coords.longitude},
    //     zoom: 10
    //   });
    //   for(var i=0; i<json.page.size; i++) {
    //     addMarker(map, json._embedded.events[i]);
    //   }
    // }
    

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

    };

    handleSubmit = event =>{
        event.preventDefault()
        API.search(this.state.eventSearched)
            .then(res => {
                console.log(res.data)
            })
        this.searchTicketMaster(this.state.eventSearched, latlon);
        console.log("event searched state ",this.state.eventSearched, "event date: ", this.state.selectedDate )
        console.log("submiting!")
        }

    //this is going to need a get all saved events function


    render() {
        return (
            <>
            <Location></Location>

            <Container>
                <h1>Search Upcoming Events</h1>

           {console.log(this.props)}
                <TextField
                    name="eventSearched"
                    value={this.state.eventSearched}
                    placeholder="  i.e. outdoor concerts, roll-outs"
                    onChange={this.handleInputChange}
                    type="text"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    style={{ margin: 8 }}
                    InputLabelProps={{
                        shrink: true,
                    }}



                //  label="eventSearch"
                />
                <DatePicker 
                // name="selectedDate"
                />
                <CategoryInput />
                <SearchButton 
                onClick={() => this.handleSubmit()}/>

            
            <div className="location">
            {/* <Map
                google={this.props.google}
                zoom={8}
                //  style={mapStyles}
                initialCenter={{ lat: this.props.lat, lng: this.props.lon}}
        /> */}

            </div>

            </Container >
        </>
        )
    }

}

export default Home