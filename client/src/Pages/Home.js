import React, { Component } from "react"
import Container from '../Components/Container'
import InputBox from '../Components/InputBox'

class Home extends Component {

    state = {
        eventSearched: ""
    }


    handleInputChange = event => {

        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

    };


    render() {
        return (


            <Container>


                <InputBox
                    name="eventSearched"
                    value={this.state.eventSearched}
                    placeholder="i.e. outdoor concerts, roll-outs,"
                    onChange={this.handleInputChange}
                    label="searched-event-input"

                //  label="eventSearch"
                />


            </Container>

        )
    }

}


export default Home