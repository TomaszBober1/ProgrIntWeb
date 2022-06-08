import React,{useState} from "react";
import '../App.css'

let x=1;



function Avatar() {
    const rand = getRandomInt(100, 1000);
    console.log( rand);
    let url = "https://picsum.photos/id/";
    url += rand;
    url += "/70/100";
    return (
        <div> 
             <img src={url} className="avatar"/>
        </div>
    )
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

export default Avatar;