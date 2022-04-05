import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import './App.css';
import Annoucement from "./Pages/Annoucement";
import NewGroup from "./Pages/NewGroup";
import NavBar from './NavBar';
import SearchAnnoucements from "./Pages/SearchAnnoucements";
import SearchGroup from "./Pages/SearchGroups";

function App() {

  const [annouData, setAnnouData] = useState([{
    name_: "Projekt gry",
    description_: "Opis",
    tags_: "C# Godot",
    subject_: "Gry komputerowe",
    email_: "123456@wp.com"

},
{
    name_: "Spartan 3E",
    description_: "Description",
    tags_: "VHDL",
    subject_: "Ucisw2",
    email_: "123456@wp.com"

}
]);

const [groupData, setGroupData] = useState([{
  name_: "Projekt gry",
  description_: "Opis",
  members_: "Marek",
  subject_: "Gry komputerowe",
  email_: "123456@wp.com"

},
{
  name_: "Spartan 3E",
  description_: "Description",
  members_: "Jakub",
  subject_: "Ucisw2",
  email_: "123456@wp.com"

}
]);

const shareSubmit = (Annouc_display) => {
  setAnnouData(annouData =>[...annouData, Annouc_display]);
}


  return (
    <div className="App">
      
      <BrowserRouter>
       <NavBar></NavBar> 
       <Routes>
          <Route exact path="/new-group" element={<NewGroup />}/>
          <Route exact path="/annoucements" element={<Annoucement annouData={annouData} shareSubmit={shareSubmit} />}/>
          <Route exact path="/search-annoucements" element={<SearchAnnoucements annouData={annouData}/>}/>
          <Route exact path="/search-groups" element={<SearchGroup groupData={groupData}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
