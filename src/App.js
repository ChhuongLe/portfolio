import './App.css';
import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/portfolio/' component={Landing} />
          <Route exact path='/portfolio/home' component={Landing} />
          <Route exact path='/portfolio/projects' component={Projects} />
          <Route exact path='/portfolio/about' component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
