import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

class Status extends Component {
    render(){
        return(
            <div className="top">
                <h2 className="main">Status</h2>
                <div className="main">
                    <div className="box red">
                        Unresolved
                        <h1>5</h1>
                    </div>
                    <div className="box green">
                        Resolved
                        <h1>30</h1>
                    </div>
                    <div className="box blue">
                        Submitted
                        <h1>47</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export { Status };