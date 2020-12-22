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
    numberOfEvents: []
  }

  componentDidMount() {
    getEvents().then((events) => {
        this.setState({ events, locations: extractLocations(events) });
    });
  }

componentWillUnmount(){
  this.mounted = false;
}

getEvents = (location) => {
  getEvents().then((events) => {
    const locationEvents = (location === 'all') ?
      events :
      events.filter((event) => event.location === location);
    this.setState({
      events: locationEvents
    });
    console.log('bye', locationEvents)
  });
}

  render() {
    console.log(this.state.events)
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.getEvents} />
        <NumberOfEvents updateEvents={this.getEvents} />
        <EventList events={this.state.events} />
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
  
