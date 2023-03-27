import React, { useState, useRef, useEffect } from "react";
import FixedText from "../FixedText/FixedText";
import styles from './EditText.module.scss';

const EditText = (props) => {

    const inputRef = useRef(null);
    const [textValue, setTextValue] = useState(props.text);

    function enterHandling (event){
        if(event.keyCode === 13){
            props.onSave(textValue);
        }
    }

    function setTaskText(selectedText) {
        if (selectedText != '' && textValue.match(selectedText)) {
            let index = textValue.indexOf(selectedText);
            let headText = textValue.substring(0, index);
            let boldText = textValue.substring(index, index + selectedText.length);
            let tailText = textValue.substring(index + selectedText.length, textValue.length);
            return <FixedText headText={headText} boldText={boldText} tailText={tailText}/>
        }
        return <FixedText headText={textValue}/>;
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
            className={styles.EditText}
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