import React, { Component } from 'react';
import { getEvents, extractLocations } from "./api";
import "./nprogress.css";

import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';



class App extends Component {
  state = {
    events:[],
    locations: [],
    numberOfEvents: 32
  }

componentDidMount() {
  getEvents().then((events) => {
      this.setState({ events, locations: extractLocations(events) });
  });
}

componentWillUnmount(){
  this.mounted = false;
}

filteredEvents = (value) => {
  if (!(value)){
    this.setState({ numberOfEvents: this.state.events.length })
  }
  else {this.setState({ numberOfEvents: value })};
};

getEvents = (location) => {
  getEvents().then((events) => {
    const locationEvents = (location === 'all') ?
      events :
      events.filter((event) => event.location === location);
    this.setState({
      events: locationEvents
    });
  });
}

render() {

  return (
    <div className="App">
      <CitySearch locations={this.state.locations} getEvents={this.getEvents} />
      <NumberOfEvents filteredEvents={this.filteredEvents} numberOfEvents={this.state.numberOfEvents} />
      <EventList events={this.state.events.slice(0, this.state.numberOfEvents)} />
    </div>
  );
}
}

export default App;

// async componentDidMount() {
//   const accessToken =
//   localStorage.getItem("access_token");
//   const validToken = accessToken !== null ? await
//   checkToken(accessToken) : false;
//   this.setState({ tokenCheck: validToken });
//   if(validToken === true) this.updateEvents()
//   const searchParams = new
//   URLSearchParams(window.location.search);
//   const code = searchParams.get("code");
//   this.mounted = true;
//   if (code && this.mounted === true && validToken
//   === false){
//   this.setState({tokenCheck:true });
//   this.updateEvents()
//   }
//   }
  
