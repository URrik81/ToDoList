import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import About from "./components/About/About";
import Home from "./components/Home/Home";
import Root from "./components/Root/Root";
import ToDoList from "./components/ToDoList/ToDoList";
import './css/App.scss'


const router = createBrowserRouter([
  {
    path: "*",
    element: <Root/>,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "todos",
        element: <ToDoList />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

/*
      <React.StrictMode>
          <RouterProvider router={router} />
      </React.StrictMode>
*/

export default App;
