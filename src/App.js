import './App.css';
import WeatherComponent from "./components/WeatherComponent";
import HeaderComponent from "./components/UI/HeaderComponent";
import FooterComponent from "./components/UI/FooterComponent";

function App() {
  return (
    <div>
        <HeaderComponent></HeaderComponent>
        <WeatherComponent lat={37.7749} lon={-122.4194}></WeatherComponent>
        <FooterComponent></FooterComponent>
    </div>

  );
}

export default App;
