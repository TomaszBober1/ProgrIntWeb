import React, { useEffect } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { useState} from "react";
import './App.css';
import Annoucement from "./Pages/Annoucement";
import NewGroup from "./Pages/NewGroup";
import NavBar from './NavBar';
import SearchAnnoucements from "./Pages/SearchAnnoucements";
import SearchGroup from "./Pages/SearchGroups";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import axios from 'axios';

import { auth } from "./firebase/init";
import { useAuthState } from "react-firebase-hooks/auth";
import { logout } from "./firebase/users"
function App() {

  const [userInny] = useAuthState(auth);


  const [annouData, setAnnouData] = useState([]);

  const [groupData, setGroupData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/dataF/dataAnn.json").then(res => {
      const annoudata = res.data;
      setAnnouData(annoudata);
      console.log("loaded_a")
    });
  },[]);

  useEffect(() => {
    axios.get("http://localhost:3000/dataF/dataGroup.json").then(res => {
      const groupdata = res.data;
      setGroupData(groupdata);
      console.log("loaded_g")
    });
  },[]);

  
const shareSubmit = (Annouc_display) => {
  setAnnouData(annouData =>[...annouData, Annouc_display]);
}


  return (
    <div className="App">
      
      <BrowserRouter>
       <NavBar></NavBar> 
       {userInny && <button onClick={logout}>Log out {userInny.displayName || userInny.email} </button> || <NavLink to="/login">Log in</NavLink>}
       <Routes>
          <Route exact path="/new-group" element={<NewGroup />}/>
          <Route exact path="/annoucements" element={<Annoucement annouData={annouData} shareSubmit={shareSubmit} />}/>
          <Route exact path="/search-annoucements" element={<SearchAnnoucements annouData={annouData}/>}/>
          <Route exact path="/search-groups" element={<SearchGroup groupData={groupData}/>}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/register" element={<Register />}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
