import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../DashBoard Page/AllUsers";

import AddClassForm from "../DashBoard Page/Instructor Dashboard/AddClassForm";
import InstructorClass from "../DashBoard Page/Instructor Dashboard/InstructorClass";
import AdminManage from "../DashBoard Page/AdminManage";
import Classes from "../Pages/Classes";
import InstructorsPage from "../Pages/InstructorsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path:"instructors",
        element:<InstructorsPage></InstructorsPage>
      }
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "addClass",
        element: <AddClassForm></AddClassForm>,
      },
      {
        path: "instructorClass",
        element: <InstructorClass></InstructorClass>,
      },
      {
        path: "manageClass",
        element: <AdminManage></AdminManage>,
      },
    ],
  },
]);

export default router;
