import './App.css';
import Home from './components/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import TypingAnimation from './components/TypingAnimation';
import AboutMe from './components/AboutMe';


function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <AboutMe />

      {/* <TypingAnimation /> */}
    </div>
  );
}

export default App;
