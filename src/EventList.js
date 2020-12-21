import React, { Component } from 'react';
import Event from './Event';
import { mockData } from './mock-data';

class EventList extends Component {

  render() {

    return (
      <ul className="EventList">
        {mockData.map(event =>
          <li key={event.id}>
            <Event event={event} />
          </li>
        )}
      </ul>
  )};
}
export default EventList;