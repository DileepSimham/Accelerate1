// import './App.css';
import Home from './components/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import AboutMe from './components/AboutMe';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import BlogExtended from './components/BlogExtended';
import ResumePage from './components/ResumePage';
// import PortfolioPage from './components/PortfolioPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/aboutme' element={<AboutMe />}></Route>
          <Route path='/resume' element={<ResumePage />}></Route>
          {/* <Route path='/portfolio' element={<PortfolioPage />}></Route> */}
          <Route path='/blog' element={<BlogPage />}></Route>
          <Route path='/blogExtended' element={<BlogExtended />}></Route>
          <Route path='/contact' element={<ContactPage />}></Route>
          
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
