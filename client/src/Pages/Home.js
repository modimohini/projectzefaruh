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


class Home extends Component {

    state = {
        events: [],
        eventSearched: "",
        selectedDate: new Date(),
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

    };

    setSelectedDate = date => {
        this.setState({ selectedDate: date })
    }

    // searchTicketMaster = query => {
    //     API.search(query)
    //     .then(res => {
    //     console.log("respomse" + res);
    //     // this.setState({ events: res.data });
    //     })
    //     .catch(err => console.log(err));
    //     };

    handleSubmit = event =>{
        // event.preventDefault()
        API.search(this.state.eventSearched)
            .then(res => {
                this.setState({ events: res.data._embedded.events })
                console.log(res.data._embedded.events)
            })
            .catch(err => console.log(err))
        // this.searchTicketMaster(this.state.eventSearched);
        console.log("events", this.state.events)
        console.log("submiting!")
        }

    //this is going to need a get all saved events function


    render() {
        return (
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
                onClick={() => this.handleSubmit()}/>
                <Container>
                
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

               

            </Container >



        )
    }

}




export default Home