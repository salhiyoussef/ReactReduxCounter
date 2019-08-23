import React, { Component } from 'react'
import { connect } from 'react-redux'
import {increment, decrement}  from '../redux/actions'
import App2 from './App2';

class App extends Component {
    render() {
        const {counter, increment, decrement} = this.props;
        
        return (
           <React.Fragment>
                <h1>{counter}</h1>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    const { counter } = state;
    return {
        counter
    };
}
function mapDispatchToProps(dispatch) {
    return {
        increment : () => dispatch(increment()),
        decrement : () => dispatch(decrement()),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(App) ;