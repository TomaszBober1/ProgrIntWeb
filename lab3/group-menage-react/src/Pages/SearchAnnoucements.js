import React, { useState } from "react";
import '../App.css';
import AnnoucementDisplay from "../Components/Annouc_display";

function SearchAnnoucements({annouData}) {

    const [search, setSearch] = useState("");

    const lookForAnnouc = (event) => {
        setSearch(event.target.form.look.value);
    }

    return (
    <>
    <div className="App">
    
        <form onSubmit= {(event) => {event.preventDefault()}}>
            <h1>Wyszukiwarka:</h1>
            <input name="look" onChange={lookForAnnouc}/>
        </form>
        <h2>Ogłoszenia:</h2>
        
          {(annouData.map((grp, idx) => {

           if( search === ""){
                
            return (
                    <AnnoucementDisplay key={idx} annouc_display={grp} />);
                }else{

                    if(grp.description_.includes(search) || grp.tags_.includes(search) || grp.subject_.includes(search)) {
                        
                        return (
                            <AnnoucementDisplay key={idx} annouc_display={grp} />);
                    }
                }
        }))}
    </div>
    </>);
}

export default SearchAnnoucements;