import React, { useState, useRef } from "react";
import './../css/InputText.css'

const InputText = (props) => {

    const ref = useRef(null);
    const [textValue, setTextValue] = useState(''); 

    function handleClick(value) {
        if (props.onButtonClick(value)) {
            setTextValue('');
        }
        ref.current.focus();
    }

return (
    <div className="InputText">
        <label className="InputTextLabel">{props.title}</label>
        <input className="InputTextElem"
            type="text"
            value={textValue}
            ref={ref}
            onChange={event => {
              setTextValue(event.target.value);
          }}>
        </input>
        <button type="button" className="SubmitButton" onClick={() => {handleClick(textValue)}}>{props.buttonTitle}</button>
    </div>
);

};

export default InputText;