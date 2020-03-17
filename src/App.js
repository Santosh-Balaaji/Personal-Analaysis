import React from 'react';
import './App.css';
import Section1 from './Sections/Section1';
import Section2 from './Sections/Section2';
class App extends React.Component
{
  render(){
    return (
      <div className="App">
        <Section1 />
      </div>
    );
  }
  
}

export default App;
