import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

function Users() {

  const[users, setUsers] = useState([]);

  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => setUsers(data));
  },[])

  return (
    <div>
      <h2>Kullanıcılar</h2>
      {
        users.map((user) =>(
          <ul key={user.id}>
            <li><Link to={`${user.id}`} state={user}>{user.name}</Link></li>
          </ul>
        ))
      }
    </div>
  )
}

export default Users
