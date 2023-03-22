import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import FirstComponent from './Components/FirstComponent'



class App extends Component
{
  render()
  {
    return(
      <div className='App'>
        hello
        <FirstComponent>

        </FirstComponent>
      </div>
      
    );
  }
}

export default App;
