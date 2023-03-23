import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import FirstComponent from './Components/FirstComponent'
import Counter from './Components/CounterComponents/Counter';



class App extends Component
{
  render()
  {
    return(
      <div className='App'>
        <Counter/>
      </div>
      
    );
  }
}

export default App;
