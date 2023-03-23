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
    render=()=>
    {
        return(
            <div className='Counter'>
        <CounterButton/>
        <CounterButton by={10}/>
        <CounterButton  by={20}/>
      </div>
        )
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
        //this.inrecment=this.inrecment.bind(this)
        //if use arrow function binding is not necessary
    }

       render=()=>
    {
        return(
        
            <div className='Counter'>
            <button onClick={this.inrecment}> 
                +{this.props.by}
             </button>
             <span className="count">{this.state.Counter}</span>

         </div>

        );
    }

     inrecment=()=>
    {
        console.log('increment')
        this.setState({
            Counter:this.state.Counter+this.props.by

        });
    }


}

CounterButton.defaultProps={
    by:1
}
CounterButton.propTypes={
    by:propTypes.number    
}

export default Counter