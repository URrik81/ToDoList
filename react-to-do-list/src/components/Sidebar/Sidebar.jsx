import React from "react";
import './Sidebar.scss';


export default function Sidebar() {

    return(
        <div className="Sidebar">
          <h3 className="SidebarHeader">To Do List</h3>
          <ul className="ActionBar">
            <li><a href="/home">Home</a></li>
            <li><a href="/todos">TODOs</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
    );
}