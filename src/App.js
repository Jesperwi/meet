import React, { Component } from 'react';
import { getEvents, extractLocations } from "./api";
import "./nprogress.css";

import './App.css';
import EventList from './components/EventListView/EventList';
import CitySearch from './components/CitySearchView/CitySearch';
import NumberOfEvents from './components/NumberOfEventsView/NumberOfEvents';
import EventGenre from './components/EventGenreView/EventGenre';
import { OfflineAlert } from './components/AlertView/Alert';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

class App extends Component {
  state = {
    events:[],
    locations: [],
    numberOfEvents: 32,
    alertText: "",
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events,
          locations: extractLocations(events),
        });
      }
    });
    window.addEventListener("online", this.offlineAlert());
  }

offlineAlert = () => {
  if (navigator.onLine === false) {
    this.setState({
      alertText:
        "You are currently offline. Connect to the internet to see the apps whole content",
    });
  } else {
    this.setState({ alertText: "" });
  }
};

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

getData = () => {
  const { locations, events } = this.state;
  const data = locations.map((location)=>{
    const number = events.filter((event) => 
      event.location === location).length;
    const city = location.split(' ').shift()
    return {city, number};
  })
  return data;
};

render() {
  
  const { locations, numberOfEvents, events } = this.state;

  return (
    <div className="App">
       <h1 className="HeadLine">Meet Up</h1>
        <OfflineAlert text={this.state.alertText} />
          <div className="searchBars">
            <CitySearch locations={this.state.locations} getEvents={this.getEvents} />
            <NumberOfEvents filteredEvents={this.filteredEvents} numberOfEvents={this.state.numberOfEvents} numberOfEventChart={numberOfEvents} />
          </div>
      <div className="data-vis-wrapper">
        <EventGenre events={events} locations={locations} />
          <ResponsiveContainer height={400} >
            <ScatterChart 
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>

              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis type="number" dataKey="number" name="number of events"
              allowDecimals={false} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
      </div>
        <EventList events={this.state.events.slice(0, this.state.numberOfEvents)} eventChart={events} />
    </div>
  );
}
}

export default App;
