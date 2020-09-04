import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import CurriculumVitae from './components/CurriculumVitae';
import Portofolio from './components/Portofolio';
import Home from './components/Home';

function App() {
  return (
    <div>
      <React.Fragment>
        <Router>
            <NavigationBar/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/portofolio" component={Portofolio}/>
              <Route path="/cv" component={CurriculumVitae}/>
            </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
