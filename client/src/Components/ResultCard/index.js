import React from 'react'


function ResultCard(props){


    return(

  <div> 

  <h2 className="header">{props.title}</h2>
  <div className="card horizontal">
    <div className="card-image">
      <img src={props.image}/>
    </div>
    <div className="card-stacked">
      <div className="card-content">
        <p>{props.note}</p>
        <p>{props.dates}</p>

      </div>
      <div className="card-action">
        <a href={props.tickets}>Get Tickets</a>
      </div>
    </div>
  </div>
</div>
  
    )

}
export default ResultCard


