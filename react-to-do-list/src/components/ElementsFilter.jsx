import React, { useState } from "react";
import './../css/ToDoItem.css'


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
    </div>
);

};

export default ElementsFilter;