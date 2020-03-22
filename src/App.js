import React from 'react';
import './App.css';
import Section1 from './Sections/Section1';
import Section3 from './Sections/Section3';
class App extends React.Component
{
  render(){
    return (
      <div className="App">
        <Section3 />
      </div>
    );
  }
  
}

export default App;
