import React, { Component } from 'react';
import './Counter.css';
import propTypes  from 'prop-types';

//functional components
// function Counter()
// {
//     return(
//         <div className='Counter'>
//             <button onClick={inrecment}> 
//                 +1
//             </button>
//             <span className="count">0</span>

//         </div>
//     )
// }
// function inrecment()
// {
//     console.log('increment');
// }

class Counter extends Component
{
    constructor()
    {
        super();
        this.state={
            Counter:0
        }
        //this.increment=this.increment.bind(this)
        //if use arrow function binding is not necessary
    }
    render=()=>
    {
        return(
            <div className='Counter'>
        <CounterButton incremenMethod={this.increment}/>
        <CounterButton by={10} incremenMethod={this.increment} />
        <CounterButton  by={20}incremenMethod={this.increment}/>
        <span className="count">{this.state.Counter}</span>
      </div>
        )
    }

    increment=(by)=> {
        this.setState((prevState)=>{
           return {Counter:prevState.Counter+by}

        });


        
    }
}


class CounterButton  extends Component

{

    constructor()
    {
        super();
        this.state={
            Counter:0
        }
        //this.increment=this.increment.bind(this)
        //if use arrow function binding is not necessary
    }
    
   

       render=()=>
    {
        return(
        
            <div className='Counter'>
            <button onClick={this.increment}> 
                +{this.props.by}
             </button>
             {/*<span className="count">{this.state.Counter}</span>*/}

         </div>

        );
    }

    increment=()=>
    {
        console.log('increment')
        this.setState({
            Counter:this.state.Counter+this.props.by

        });

        this.props.incremenMethod(this.props.by)
    }


}

CounterButton.defaultProps={
    by:1
}
CounterButton.propTypes={
    by:propTypes.number    
}

export default Counter