import React from "react";


function Group_display({group_display}){

    return(
        <div>
            <h1>{group_display.name_}</h1>
            <h2>{group_display.description_}</h2>
            <h3>{group_display.members_}</h3>
            <h4>{group_display.subject_}</h4>
        </div>
    );
}

export default Group_display;