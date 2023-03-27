import React from "react";
import styles from './Sidebar.module.scss';


export default function Sidebar() {

  function goToLink(url) {
    window.location = url;
  }

    return(
        <aside className={styles.Sidebar}>
          <h3 className={styles.SidebarHeader}>To Do List</h3>
          <ul className={styles.ActionBar}>
            <li onClick={() => goToLink("/home")}>Home</li>
            <li onClick={() => goToLink("/todos")}>TODOs</li>
            <li onClick={() => goToLink("/about")}>About</li>
          </ul>
        </aside>
    );
}