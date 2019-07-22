import React from "react"
import { TextInput }from 'react-materialize'

function Inputbox(props){
    console.log(props)
    return(

        <TextInput 
        name= {props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder} 
        type="text"
        className="form-control" 
        
        />


    )

}

export default Inputbox