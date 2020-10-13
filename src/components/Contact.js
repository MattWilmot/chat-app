import './Contact.css'
import React from 'react'

function Contact () {
    return(
    <div className="Contact">
        <img className="avatar" src="https://randomuser.me/api/portraits/women/15.jpg"
        alt="user-pic" />
        <div>
            <p className="name">Rosa Newman</p>
            <div className="status">
            <div className="status-online"></div>
            <div className="status-text">online</div>
            </div>
        </div>

    </div>

    )
}

export default Contact
