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
import ResultCard from  "../Components/ResultCard"

 var latlon;
//  var showPosition;
//  var showError

class Home extends Component {

    state = {
        events: [],
        eventSearched: "",
        selectedDate: new Date(),
    }




    searchTicketMaster = (query) => {
        console.log(this.props.coords)
        API.search(query)
        .then(res => {
        console.log("response" + res);
        this.setState({ events: res.data._embedded.events })
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
        console.log("events", this.state.events)
        console.log("event searched state ",this.state.eventSearched, "event date: ", this.state.selectedDate )
        console.log("submiting!")
        }

    render() {
        return (
            <>
            <Location coords={this.props.coords}></Location>

            <Container>
                <h1>Search Upcoming Events</h1>
                <div className="row">

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
                {console.log('PROCESS', process.env.REACT_APP_API_KEY1)}
          {this.state.events.map( event => {
              return (<ResultCard
              title= {event.name}
              dates={event.dates.start.localDate}
              image= {event.images[0].url}
              note={event.pleaseNote}
              key= {event.id}
            //   tickets= {event.ticketLimit.url}
              />


              )
          })}
        

                </Container>

            
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