import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const AnyReactComponent = ({ text }) => (
  <div>
    <LocationOnIcon />
  </div>
);

class Map extends Component {
  render() {
    const defaultProps = {
      center: {
        lat: this.props.lat,
        lng: this.props.lng,
      },
      zoom: 11,
    };
    return (
      <div style={{ height: "50vh", width: "50vw" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB7FX3rFRHzeng8svfr6mX8lWEV8iVh8cM" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={this.props.lat}
            lng={this.props.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
