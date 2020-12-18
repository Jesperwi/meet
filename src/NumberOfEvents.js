import React, { Component } from "react";

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
    };

handleInputChanged = (event) => {
    const value = event.target.value;
    this.props.updateEvents(null, value);
    this.setState({ numberEvents: value });

    if (value < 1) {
      this.state({
        infoText: "1 to 32"
      });
    }
};



render() {
  const { numberOfEvents } = this.state;
    return (
      <div className="numberOfEvents">
        <label>Number Of Events:</label>
        <input
          type="text"
          className="city"
          id="numberOfEvents"
          value={numberOfEvents}
          onChange={this.handleInputChanged}
          />
      </div>
    );
};
};

export default NumberOfEvents; 