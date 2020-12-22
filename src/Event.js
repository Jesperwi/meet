import React, { useState } from "react";


const Event = ( {events} ) => {
  console.log('hi', events)

  const [ showDetails, setShowDetails ] = useState(false);

  const buttonText = showDetails ? 'Hide Details' : 'Show Details'; 

  return (
    <div className="event">
      {events && (
        <div>
      <h2 className="event_name">{events.summary}</h2>
      <p className="event-date">{events.created}</p>
      <p>@{events.summary} | {events.location}</p>
      <div className="event_location">
          <button
            className="details-btn"
            onClick={() => setShowDetails( !showDetails )}
          >
          {buttonText}
          </button>
          {showDetails && <div className="info">
            <h3>About event:</h3>
            <a href={events.htmlLink}>See detalis on Google Calendar</a>
            <p>{events.description}</p>
          </div>}
      </div>
      </div>
      )}
    </div>
  );
}

export default Event;