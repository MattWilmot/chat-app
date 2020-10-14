
const userData = () => {

const user = [
{
    name:"Rosa Newman",
    avatar:"https://randomuser.me/api/portraits/women/15.jpg",
    online: true
},

{
    name="Olivia Masone",
    avatar="https://randomuser.me/api/portraits/women/35.jpg",
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


    
        {user.map(item => (
    <div className="Contact">
            <img className="avatar" src={item.avatar} alt={item.name}/>        
            <div>
            <p className="name">{item.name}</p>
            <div className="status">
            <div className={item.online ? 'status-online' : 'status-offline'}></div>
            <div className="status-text">{item.online ? 'online' : 'offline'}</div>
            </div>
        </div>
    </div>
           ))};
};



export default userData
