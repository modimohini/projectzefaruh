import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class GoogleApiWrapper extends Component {
    state = { 
        lat,
        lon,
     }
    render() { 
        return ( 
            <>
            <Map
           google={this.props.google}
           zoom={8}
        //    style={mapStyles}
           initialCenter={{ lat: this.props.lat, lng: this.props.lon}}
        />
         {/* <Marker position={{ lat: 48.00, lng: -122.00}} /> */}
            </>
         );
    }
}
 
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCCC9vhou30BPuzyd2Lrr-NJKiqr9JiIa0'
  })(MapContainer);