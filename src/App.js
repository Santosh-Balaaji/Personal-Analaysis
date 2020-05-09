import React from 'react';
import './App.css';
import Section1 from './Sections/Section1';
import Section3 from './Sections/Section3';
import Section2 from './Sections/Section2';
import Section4 from './Sections/Section4';
import {Switch, Route} from 'react-router-dom';
import Index from './Sections/IndexPage';
class App extends React.Component
{
  render(){
    return (
      <div className="App">
        <Switch>
        <Route exact path='/index.html' component={Index}/>
        <Route exact path='/Section1' component={Section1}/>
        <Route exact path='/Section2' component={Section2}/>
        <Route exact path='/Section3' component={Section3}/>
        <Route exact path='/Section4' component={Section4}/>
        </Switch>
      </div>
    );
  }
  
}

export default App;
