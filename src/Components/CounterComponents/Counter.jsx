import React, { Component } from 'react';
import './Counter.css';

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
        this.inrecment=this.inrecment.bind(this)
    }

       render()
    {
        return(
        
            <div className='Counter'>
            <button onClick={this.inrecment}> 
                 +1
             </button>
             <span className="count">{this.state.Counter}</span>

         </div>

        );
    }

     inrecment()
    {
        console.log('increment')
        this.setState({
            Counter:this.state.Counter+1

        });
    }


}


export default Counter