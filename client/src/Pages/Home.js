import React, { Component } from "react"
import Container from '../Components/Container'
// import InputBox from '../Components/InputBox'
// import Nav from '../Components/Nav'
import TextField from '@material-ui/core/TextField';
import DatePicker from '../Components/DatePicker'
import CategoryInput from "../Components/CategoryInput"
import SearchButton from "../Components/Button"


class Home extends Component {

    state = {
        eventSearched: "",
        selectedDate: ""
    }


    handleInputChange = event => {

        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

    };


    handleSubmit = ()=>{
    console.log("submiting!")
    }

    //this is going to need a get all saved events function


    render() {
        return (


            <Container>
                <h1>Search Upcoming Events</h1>


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
                />
                <CategoryInput />
                <SearchButton 
                onClick={() => this.handleSubmit()}/>

               

            </Container >



        )
    }

}




export default Home