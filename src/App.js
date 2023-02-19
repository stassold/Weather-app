import './App.css';
import WeatherComponent from "./components/WeatherComponent";
import HeaderComponent from "./components/UI/HeaderComponent";
import FooterComponent from "./components/UI/FooterComponent";
import TimeComponent from "./components/TimeComponent";
import NasaApodComponent from "./components/NasaApodComponent";

function App() {
  return (
    <div>
        <HeaderComponent></HeaderComponent>
        <WeatherComponent lat={37.7749} lon={-122.4194}></WeatherComponent>
        <TimeComponent></TimeComponent>
        <NasaApodComponent></NasaApodComponent>
        <FooterComponent></FooterComponent>
    </div>

  );
}

export default App;
