import React from "react";


function Annouc_display({annouc_display}){

    return(
        <div>
            <h1>{annouc_display.name_}</h1>
            <h2>{annouc_display.description_}</h2>
            <h3>{annouc_display.tags_.split(" ").map(tag_ => {
                return "|" + tag_ + "|";
            })}</h3>
            <h4>{annouc_display.subject_}</h4>
        </div>
    );
}

export default Annouc_display;