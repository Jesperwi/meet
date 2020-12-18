import React, { Component } from 'react';
import Login from "../src/components/LoginView/Login";
import { getEvents, checkToken } from "./api";

import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import Event from './Event';
import numberOfEvents from './numberOfEvents';

class App extends Component {
  render() {
    return (
      <div className="App">
        <numberOfEvents />
        <Event />
        <CitySearch />
        <EventList />
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
  
