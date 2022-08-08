import videoBg from "./assets/black.mp4"
import "./App.css"
import Portfolio from "./components/portfolio/Portfolio.jsx";


function App() {
  return (
    <div className="App">
      <div className="overlays"/>
      <Portfolio/>
      <video src={videoBg} autoPlay loop muted />

    
    </div>
  );
}

export default App;
