import React, { useState, useRef, useEffect } from "react";
import './EditText.scss'

const EditText = (props) => {

    const inputRef = useRef(null);
    const [textValue, setTextValue] = useState(props.text);

    function enterHandling (event){
        if(event.keyCode === 13){
            props.onSave(textValue);
        }
    }

    function setTaskText(selectedText) {
        if (selectedText != '' && textValue.startsWith(selectedText)) {
            let index = Math.min(selectedText.length, textValue.length);
            let boldText = textValue.substring(0, index);
            let otherText = textValue.substring(index);
            return <div display='inline-block'>
                     <b className="BoldText">{boldText}</b>
                     <p className="FixedText">{otherText}</p>
                    </div>;
        }
        return <p className="FixedText">{textValue}</p>
    }

    useEffect(() => {
        if (props.editMode && inputRef != null) {
            inputRef.current.focus();
        }
      });

    console.log("textValue : " + textValue + ", editMode : " + props.editMode);
        return (
            props.editMode ?
            <input type="text"
            ref = {inputRef}
            value={textValue}
            className="EditText"
            onKeyDown={event => enterHandling(event)}
            onChange={event => {setTextValue(event.target.value);}}
            />
            :
            <div>
                {setTaskText(props.selectedText)}
            </div>
        );
};

export default EditText;