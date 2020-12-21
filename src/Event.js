import React, { useState } from "react";


const Event = ( {event} ) => {

  const [ showDetails, setShowDetails ] = useState(false);

  const buttonText = showDetails ? 'Hide Details' : 'Show Details'; 

  return (
    <div className="event">
      {event && (
        <div>
      <h2 className="event_name">{event.summary}</h2>
      <p className="event-date">{event.created}</p>
      <p>@{event.summary} | {event.location}</p>
      <div className="event_location">
          <button
            className="details-btn"
            onClick={() => setShowDetails( !showDetails )}
          >
          {buttonText}
          </button>
          {showDetails && <div className="info">
            <h3>About event:</h3>
            <a href={event.htmlLink}>See detalis on Google Calendar</a>
            <p>{event.description}</p>
          </div>}
      </div>
      </div>
      )}
    </div>
  );
}

export default Event;