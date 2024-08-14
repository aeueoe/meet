import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import CitySearch from "./components/CitySearch";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <CitySearch />
      <NumberOfEvents />
      <EventList />
    </div>
  );
};
export default App;
