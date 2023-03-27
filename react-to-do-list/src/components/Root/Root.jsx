import React, { useState } from "react";
import {
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./../Home/Home";
import About from "./../About/About";
import ToDoList from "../ToDoList/ToDoList";
import styles from './Root.module.scss';
import Sidebar from "../Sidebar/Sidebar";

export default function Root() {

    return (
        <div className={styles.Root}>
          <Sidebar/>
          <div className={styles.InfoPage}>
            <Routes>
              <Route path="about" element={<About/>}/>
              <Route path="home" element={<Home/>}/>
              <Route index element={<Home/>}/>
              <Route path="todos" element={<ToDoList/>}/>
            </Routes>
          </div>
        </div>
    );
  }