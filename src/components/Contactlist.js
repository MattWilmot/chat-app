
import React from 'react'
import Contact from "./Contact"

const users = [
{
    name:"Rosa Newman",
    avatar:"https://randomuser.me/api/portraits/women/15.jpg",
    online: true
},

{
    name:"Olivia Masone",
    avatar:"https://randomuser.me/api/portraits/women/35.jpg",
    online: false
},

{
    name:"Howard Reyes",
    avatar:"https://randomuser.me/api/portraits/men/6.jpg",
    online: true
},

{
    name: 'Juanita Phillips',
    avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
    online: true
},

{
    name: 'Erica Hunt',
    avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
    online: false
  }
];

const ContactList = () => (
    <div>
        {users.map(e => <Contact name={e.name} avatar={e.avatar} online={e.online}/>)}
    </div>
)




export default ContactList
