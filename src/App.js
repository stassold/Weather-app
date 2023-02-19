import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainComponent from "./components/MainComponent";
import CollectionPhotos from "./components/CollectionPhotos";

function App() {
    return (
        <div>
            <Router>
                    <Routes>
                        <Route exact path="/" element={<MainComponent/>}/>
                        <Route exact path="/collection" element={<CollectionPhotos/>}/>
                    </Routes>
            </Router>
        </div>
    );
}

export default App;
