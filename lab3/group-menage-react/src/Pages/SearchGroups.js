import React, { useState } from "react";
import '../App.css';
import GroupDisplay from "../Components/Group_display";

function SearchGroups({groupData}) {

    const [search, setSearch] = useState("");

    const lookForGroup = (event) => {
        setSearch(event.target.form.lookg.value);
    }

    return (
    <>
    <div className="App">
    
        <form onSubmit= {(event) => {event.preventDefault()}}>
            <h1>Wyszukiwarka (opis / przedmiot):</h1>

            <input name="lookg" onChange={lookForGroup}/>
        </form>

        <h2>Grupy:</h2>

          {(groupData.map((grp, idx) => {
          
          if( search === ""){
                
            return (
                    <GroupDisplay key={idx} group_display={grp} />);
                }else{

                    if(grp.description_.includes(search) || grp.subject_.includes(search)) {
                       
                        return (
                            <GroupDisplay key={idx} group_display={grp} />);
                    }
                }
        }))}
    </div>
    </>);
}

export default SearchGroups;