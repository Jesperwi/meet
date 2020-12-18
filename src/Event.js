import React, { Component } from "react";

class Event extends Component {
    
  constructor(props) {
		super(props);
		this.state = {
			opened: false,
		};
		this.showDetails = this.showDetails.bind(this);
	}
  
	showDetails() {
		const { opened } = this.state;
		this.setState({
			opened: !opened,
		});
	}

  render() {
  var { summary, location, start, description, htmlLink } = this.props;
  const { opened } = this.state;
    
        return (
          <div className="event">
            <div className="eventContainer">
            <h1 className="eventContainer--name">{summary}</h1>
            <p className="eventContainer--localDate">{start}</p>
            {location}
            <button className="eventButton" onClick={this.showDetails}>show details</button>
          {opened && (					
            <div class="eventContent">
              <p className="eventContent--desc">{description}</p>
              <link>{htmlLink}</link>
            </div>
          )}
          </div>
        </div>
      );
    }
  }
export default Event;