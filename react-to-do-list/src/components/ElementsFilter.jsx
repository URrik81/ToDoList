import React, { useState } from "react";
import './../css/ToDoItem.css'
import InputText from "./InputText";


const ElementsFilter = (props) => {

return (
    <div className="ElementsFilter">
        <select id="selection-filter" onChange={
            event => props.onFilterIndexChanged(event.target.value)
            }> 
            <option value="0">All</option>
            <option value="1">Completed</option>
            <option value="-1">Incompleted</option>   
        </select>
        <p>Sort by Title</p>
        <input type="checkbox" onChange={event => {
            props.onSortByTitle(event.target.checked)
        }}/>
        <InputText onButtonClick={props.onFindItems} buttonTitle="Find" title="Find Items"/>
    </div>
);

};

export default ElementsFilter;