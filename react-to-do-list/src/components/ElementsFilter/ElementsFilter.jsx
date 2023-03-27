import React, { useState } from "react";
import InputText from "../InputText/InputText";
import styles from './ElementsFilter.module.scss'


const ElementsFilter = (props) => {

return (
    <div className={styles.ElementsFilter}>
        <div className={styles.CompleteFiliter}>
          <p>Select todo status</p>
          <select className={styles.CompleteFiliter} id="selection-filter" onChange={
            event => props.onFilterIndexChanged(event.target.value)
            }> 
            <option value="0">All</option>
            <option value="1">Completed</option>
            <option value="-1">Incompleted</option>   
          </select>
          </div>
        <div className={styles.SortFilter}>
          <p>Sort by Title</p>
          <input type="checkbox" onChange={event => {
            props.onSortByTitle(event.target.checked)
          }}/>
        </div>
        <InputText onButtonClick={props.onFindItems} buttonTitle="Find" title="Find Items"/>
    </div>
);

};

export default ElementsFilter;