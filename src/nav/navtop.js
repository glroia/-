import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import styles from '../cpn.css';

class Dropdown extends Component {
    constructor(){
        super()
        this.state = {showH: false,}
        this.showH = this.showH.bind(this)
        this.hideH = this.hideH.bind(this)
    }
    showH(event) {
        event.preventDefault()
        this.setState({showH: true}, () => { document.addEventListener("click", this.hideH)
        })
    }
    hideH(event){
        if (!this.dropdown.contains(event.target)){
           this.setState({showH: false}, () => { document.removeEventListener("click", this.hideH)  
            })
        }
    }
    
    render(){
        return(<header>
            <div>
                <div className="nav-top">
                    <div className="left">
                        <button className="logo">
                            <img src={require("./childlogo.jpg" )} />
                        </button>
                        <span>Curation Portal</span>
                    </div>
                    <div className="right">
                        <span>Hello, Admin</span>
                        <button className="icon" onClick={this.showH}>
                            <img src={require("./notif.png")} />
                        </button>
                        <button className="icon">
                            <img src={require("./user.png")} />
                        </button>
                        <button className="icon">
                            <img src={require("./logout.png")} />
                        </button> 
                    </div>
                </div>
                {this.state.showH ? (
                    <div 
                        className="notifications"
                        ref={(element) => {this.dropdown = element}}
                    >
                        <button>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</button><br />
                        <button>ut labore et dolore magna aliqua. Ut enim ad minim veniam</button><br />
                        <button>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis</button>
                    </div>
                ) : ( null )}
            </div>
        </header>)
    }
}

export { Dropdown };