import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home.js';
import Users from './pages/Users.js';
import Contact from './pages/Contact.js';
import Header from './components/Header.js';

//pages
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path="users" element= {<Users/>} />
          <Route path="contact" element = {<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
