import React from 'react'
import { connect } from 'react-redux'

function App2(props) {
    const { value } = props;
    return (
        <div>
            {
                value.toString()
            }
        </div>
    )
}

function mapStateToProps(state) {
    const { value } = state;
    return {
        value
    };
}

export default connect(mapStateToProps, null)(App2) ;


