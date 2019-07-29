import React, { Component } from "react"
import Container from '../Components/Container'
// import InputBox from '../Components/InputBox'
// import Nav from '../Components/Nav'
import TextField from '@material-ui/core/TextField';
import DatePicker from '../Components/DatePicker'
import CategoryInput from "../Components/CategoryInput"
import SearchButton from "../Components/Button"
import API from "../utils/API";
import ResultCard from  "../Components/ResultCard"
import Geohash from 'latlon-geohash';

//  var latlon;
//  var showPosition;
//  var showError

class Home extends Component {
constructor(){
    super()
    this.state = {
        location: {
            lat: 0,
            lng: 0
        },
        events: [],
        eventSearched: "",
        selectedDate: new Date(),
        geohash: 0
    }
}

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let lat = position.coords.latitude
                let lng = position.coords.longitude

                const geohash = Geohash.encode(lat, lng, 6)
                console.log("latitude:" + lat + "longitude" + lng)  
                console.log("grab geohash" +geohash)

                this.setState({
                    geohash: geohash,
                    location: {
                      lat: lat,
                      lng: lng
                    },
                    
                  })
                  console.log("Second geohash" + geohash)
            }
        )
    }


    searchTicketMaster = (query) => {
         console.log("geohash" + this.state.geohash)
        API.search(query, this.state.geohash)
        .then(res => {
        console.log("response" + res.data._embedded.events);
        this.setState({ 
            events: res.data._embedded.events 
        })
    })
        .catch(err => console.log(err));
        };
    

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

    };

    setSelectedDate = date => {
        this.setState({ selectedDate: date })
    }

    

    handleSubmit = event => {
        event.preventDefault() 
        this.searchTicketMaster(this.state.eventSearched)
        // console.log("events", this.state.events)
        console.log("event searched state ",this.state.eventSearched, "event date: ", this.state.selectedDate )
        }

    render() {
        return (
            <>
            <Container>
                <h1>Search Upcoming Events</h1>
                <div className="row">

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
                    </div>

                    <div className="row">
                    <div className="col m8">
                <DatePicker
                    selectedDate={ this.state.selectedDate }
                    setSelectedDate={ this.setSelectedDate }
                // name="selectedDate"
                />
                </div>
                <div className="col m4">
                <CategoryInput />
                    
                </div>
                </div>

                <SearchButton 
                onClick={(event) => this.handleSubmit(event)}/>
                <Container>
          {this.state.events.map( event => {
              return (<ResultCard
              title= {event.name}
              dates={event.dates.start.localDate}
              image= {event.images[0].url}
              note={event.pleaseNote}
              key= {event.id}
              locationName={event.venue.name}
            //   tickets= {event.ticketLimit.url}
              />


              )
          })}
        

                </Container>
            </Container >
        </>
        )
    }

}

export default Home