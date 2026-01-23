import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Dashboard/Home.js';
import Users from './pages/Dashboard/Users.js';
import Contact from './pages/Dashboard/contact/index.js';
import UsersDetail from './pages/Dashboard/UsersDetail.js';
import Login from './pages/Auth/Login.js'
import DashboardLayout from './layouts/Dashboard/index.js';
import AuthLayout from './layouts/Auth/index.js';
import Register from './pages/Auth/Register.js';
import Error404 from './pages/Error404.js';

//pages
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<DashboardLayout/>}>
          <Route path="/" element= {<Home/>} />
          <Route path="users" element= {<Users/>} />
          <Route path="users/:id" element={<UsersDetail/>} /> 
          <Route path="contact" element = {<Contact/>}/>
          </Route>
          
          <Route path="auth" element= {<AuthLayout/>}>
            <Route index element = {<Login/>}/>
            <Route path="register" element = {<Register/>}/>
          </Route>
          
          <Route path="*" element={<Error404/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
