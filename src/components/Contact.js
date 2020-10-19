import React from 'react';
import './Contact.css';


class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        online: props.online
        }
    }

    changeStat = () => {
        const newStat = !this.state.online;
        this.setState({online: newStat})
    }


render() {
    return(
    <div className="Contact">
        <img className="avatar" src={this.props.avatar}
        alt={this.props.name} />
        <div>
            <p className="name">{this.props.name}</p>
            <div className="status">            
            <div onClick={() => this.changeStat()} className={this.state.online ? 'status-online' : 'status-offline'}></div>
            <div onClick={() => this.changeStat()} className="status-text">{this.state.online ? 'online' : 'offline'}</div>

            </div>
        </div>

    </div>

    )
}
}

export default Contact