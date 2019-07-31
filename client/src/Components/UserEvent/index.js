import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'

export class UserForm extends Component {
    state={
        eventNameSearch: '',
        dateSearch: '',
        timeSearch:'',
        categorySearch: '',
        postEventName:'',
        postEventDate:'',
        postEventAddress:'',
        postEventTime:'',
        postEventCategory:''
    

    }

    handleChange = input => event =>{
        this.setState({ [input ]: event.target.value })

    }
    render() {
        const {eventNameSearch , dateSearch, timeSearch, categorySearch} = this.state
        const values = {eventNameSearch , dateSearch, timeSearch, categorySearch} 
        return (
          <FormUserDetails
          handleChange={this.handleChange}>

          </FormUserDetails>
        

        )
    }
}

export default UserForm

