import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import styles from '../cpn.css';

class Sidebar extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div className="sidebar">
                <div className="top">
                    <button>
                        <img src={require("./dash.png")} />
                        <span>Dashboard</span>
                    </button>
                    <br /><button>
                        <img src={require("./query.png")} />
                        <span>Queries</span>
                    </button>       
                    <br /><button>
                        <img src={require("./database.png")} />
                        <span>Database</span>
                    </button>
                </div>
                <div className="bot">
                    <button>
                        <img src={require("./gear.png")} />
                        <span>Administration</span>
                    </button>
                    <br /><button>
                        <img src={require("../nav/notif.png")} />
                        <span>User Settings</span>
                    </button>
                </div>
            </div>
        )
    }
}

export { Sidebar };