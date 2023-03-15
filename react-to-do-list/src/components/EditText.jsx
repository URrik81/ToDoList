import React, { useState, useRef, useEffect } from "react";
import './../css/EditText.css'

const EditText = (props) => {

    const ref = useRef(null);
    const [textValue, setTextValue] = useState(props.text);

    function enterHandling (event){
        if(event.keyCode == 13){
            props.onSave(textValue);
        }
    }

    useEffect(() => {
        if (props.editMode && ref != null) {
            ref.current.focus();
        }
      });

    console.log("textValue : " + textValue + ", editMode : " + props.editMode);
        return (
            props.editMode ?
            <input type="text"
            ref = {ref}
            value={textValue}
            className="EditText"
            onKeyDown={event => enterHandling(event)}
            onChange={event => {setTextValue(event.target.value);}}
            />
            :
            <p className="FixedText">{textValue}</p>
        );
};

export default EditText;