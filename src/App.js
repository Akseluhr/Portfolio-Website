import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css'
import HomeView from "./views/homeView"
import AboutMeView from './views/aboutMeView';
import ProjectsView from './views/projectsView'
import ContactView from './views/contactView';
import { BrowserRouter as Router, Routes, Route, MemoryRouter } from "react-router-dom";
import Speechbubble from './components/Speechbubble';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>

          <Routes>
            <Route exact path='/' element={<HomeView/>}/>
            <Route path="/aboutme" element={<AboutMeView/>}/>
            <Route path="/projects" element={<ProjectsView/>}/>
            <Route path="/contact" element={<ContactView/>}/>

          </Routes>
      </Router>

      <Footer />

    </div>
  );
}

export default App;
