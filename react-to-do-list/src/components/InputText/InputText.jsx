import React, { useState, useRef } from "react";
import styles from './InputText.module.scss'

const InputText = (props) => {

    const ref = useRef(null);
    const [textValue, setTextValue] = useState(''); 

    function handleClick(value) {
        if (props.onButtonClick(value)) {
            setTextValue('');
        }
        ref.current.focus();
    }

    function enterHandling (event){
        if(event.keyCode === 13){
            handleClick(textValue);
        }
    }

return (
    <div className={styles.InputText}>
        <label className={styles.InputTextLabel}>{props.title}</label>
        <input className={styles.InputTextElem}
            type="text"
            value={textValue}
            ref={ref}
            onKeyDown={event => enterHandling(event)}
            onChange={event => {
              setTextValue(event.target.value);
          }}>
        </input>
        <button type="button" className={styles.SubmitButton} onClick={() => {handleClick(textValue)}}>{props.buttonTitle}</button>
    </div>
);

};

export default InputText;