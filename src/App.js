import './App.css';
import WeatherComponent from "./components/WeatherComponent";

function App() {
  return (
    <div>
        <WeatherComponent lat={37.7749} lon={-122.4194}></WeatherComponent>
    </div>

  );
}

export default App;
