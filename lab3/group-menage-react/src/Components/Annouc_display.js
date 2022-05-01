import React, { useEffect, useState } from "react";
import Avatar from "./Avatar.js"
import { useNavigate } from "react-router-dom"


var counter = 0;

function Annouc_display({ annouc_display }) {
    const [img, setImg] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        Image_get(counter);
        counter++;
    }, []);

    const Image_get = (count) => {
        Avatar(count);
        const getImage = JSON.parse(localStorage.getItem('image' + count));
        setImg(getImage);
        setLoading(false);
    }
    const navigate = useNavigate()
    const onClickHandler = () => navigate('../Pages/AnnoucementInfo.js')
    counter = 0;
     return (
         <> {isLoading ? (
            <div>
                <p>No img yet</p>

                <h1 onClick={onClickHandler}>{annouc_display.name_}</h1>
                <h2>{annouc_display.description_}</h2>
                <h3>{annouc_display.tags_.split(" ").map(tag_ => {
                    return "|" + tag_ + "|";
                })}</h3>
                <h4>{annouc_display.subject_}</h4>
            </div>
        
    

    ) : (
        <div id={annouc_display.id}>
            <p>
                <img id={img} alt="" onClick={event =>  window.location.href='/ann-info'} src={img}></img>
            </p>
            <h1 >{annouc_display.name_}</h1>
            <h2>{annouc_display.description_}</h2>
            <h3>{annouc_display.tags_.split(" ").map(tag_ => {
                return "|" + tag_ + "|";
            })}</h3>
            <h4>{annouc_display.subject_}</h4>
        </div>)}
        </>
    );
}

export default Annouc_display;