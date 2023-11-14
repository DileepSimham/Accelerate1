import './App.css';
import Home from './components/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import TypingAnimation from './components/TypingAnimation';
import AboutMe from './components/AboutMe';
import OurClients from './utilities/OurClients';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Resume from './utilities/Resume';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/aboutme' element={<AboutMe />}></Route>
          <Route path='/resume' element={<Resume />}></Route>
          
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
