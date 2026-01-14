import React,{useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';


function UsersDetail() {
    const {id} = useParams();
    const [user, setUser] = useState()

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => setUser(data))
    },[id]);
  return (
    <div>
      <h2>Kullanıcı Detayları</h2>

    <pre>
       {user && JSON.stringify(user, null,2)}
    </pre>
    <Link to={`/users/${Number(id) + 1}`}>Sonraki Kulanıcı</Link>
    </div>
  )
}
//useParams kullanarak parametre almak bu parametre ile kullanıcı detayını gösteriyoruz
export default UsersDetail
