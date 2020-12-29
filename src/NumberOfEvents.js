import React, { Component } from "react";
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    state = {
        infoText: '',
    };


handleInputChanged = (event) => {
  const value = event.target.value;
  this.props.filteredEvents(value);

  if (value < 1 ) {
    this.setState({ 
      infoText: "Select number from 1 to 32",
    });
  } else {
    this.setState({
      infoText: "",
    });
  }
};

render() {

    return (
      <div className="numberOfEvents">
        <label>Number Of Events:</label>
        <input
          type="text"
          className="city"
          id="numberOfEvents"
          onChange={this.handleInputChanged}
          />
          <ErrorAlert text={this.state.infoText} />
      </div>
    );
  };
};

export default NumberOfEvents; 