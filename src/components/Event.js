import { useState } from "react";

const Event = ({ event }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <li>
        <div>
          <h3>{event.summary}</h3>
          <p className="location">{event.created}</p>
          <p className="location">{event.location}</p>
          {toggle ? (
            <>
              <p className="eventDetails">{event.description}</p>
              <button id="hide-details" onClick={() => setToggle(false)}>
                {" "}
                Hide details{" "}
              </button>
            </>
          ) : (
            <button id="show-details" onClick={() => setToggle(true)}>
              {" "}
              Show details{" "}
            </button>
          )}
        </div>
      </li>
    </>
  );
};

export default Event;
