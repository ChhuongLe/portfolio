import './App.css';
import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ScrollToTop from './components/helper';
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <ScrollToTop />
        <Switch>
          <Route exact path='/portfolio/' component={Landing} />
          <Route exact path='/portfolio/home' component={Landing} />
          <Route exact path='/portfolio/projects' component={Projects} />
          <Route exact path='/portfolio/resume' component={Resume} />
          <Route exact path='/portfolio/contact' component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
