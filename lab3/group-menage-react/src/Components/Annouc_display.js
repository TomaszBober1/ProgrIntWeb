import React from "react";
import Avatar from "./Avatar.js"
import { useNavigate } from "react-router-dom"
import AnnoucementInfo from "../Pages/AnnoucementInfo.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Annouc_display({annouc_display}){
    const navigate = useNavigate()
    const onClickHandler = () => navigate('../Pages/AnnoucementInfo.js')
    return(
        <div>
            <Avatar />

            <Routes>
                <Route path="/anno-info*" element={<AnnoucementInfo />}/>
            </Routes>

            <h1 onClick={onClickHandler}>{annouc_display.name_}</h1>
            <h2>{annouc_display.description_}</h2>
            <h3>{annouc_display.tags_.split(" ").map(tag_ => {
                return "|" + tag_ + "|";
            })}</h3>
            <h4>{annouc_display.subject_}</h4>
        </div>
    );
}

export default Annouc_display;