import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import NavbarLoggedOut from "./components/NavbarLoggedOut";
import Home from "./pages/Home";
import NewChat from "./pages/NewChat";
import Login from "./pages/Login";
import ChatHistory from "./pages/ChatHistory";
import Logout from "./pages/Logout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
    {isLoggedIn ? <Navbar /> : <NavbarLoggedOut />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/newchat' element={<NewChat />} /> 
        <Route path='/login' element={<Login />} />
        <Route path='/chathistory' element={<ChatHistory />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
