import React from "react";
import "../App.css";
import { useState } from "react";
import ReactDOM from 'react-dom';

function Annoucement({shareSubmit}) {

    function checkMailFormat(email){
      let mail = /\S+@\S+\.\S+/;
  
      return mail.test(email);
  
    }
  
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if( name === '' || subject === '' || tags === ''){
        alert("Not all fields have been completed!");
        return;
      }
  
      if( !checkMailFormat(email)){
        alert("Wrong email!");
        return;
      }
  
      let annouData = {
        name_: name,
        description_: description,
        tags_: tags,
        subject_: subject,
        email_: email
      }
  
      shareSubmit(annouData);
      alert("Annoucement added to page");
  
      setName("");
      setDescription("");
      setTags("");
      setEmail("");
      setSubject("");
    }
  
      return (
        <div>
            <h1>Dodaj ogłoszenie</h1>
        <form onSubmit={handleSubmit}>
          <ul>
              <li>
                  <label>Enter name of project:  
                  <input id="form1a" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
              </li>
              <li>
                <label>Enter description:  
                  <input id="form2a" type="text" value={description} onChange={(e) => setDescription(e.target.value)}  />
                </label>
              </li>
              <li>
                <label>Enter tags:  
                  <input id="form3a" type="text" value={tags} onChange={(e) => setTags(e.target.value)}  />
                </label>
              </li>
              <li>
                <label>Enter subject:  
                  <input id="form4a" type="text" value={subject} onChange={(e) => setSubject(e.target.value)}  />
                </label>
              </li>
              <li>
                <label>Enter members emails:  
                  <input id="form5a" type="text" value={email} onChange={(e) => setEmail(e.target.value)}  />
                </label>
              </li>
          </ul>
          <input type="submit"/>
        </form>
        </div>
      )
    }
  
export default Annoucement;