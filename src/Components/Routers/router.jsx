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
import DashboardHome from "../DashBoard Page/DashboardHome";
import SelectedClasses from "../DashBoard Page/Student Dashboard/SelectedClasses";
import Payments from "../DashBoard Page/Student Dashboard/Payments";
import PaymentHistory from "../DashBoard Page/Student Dashboard/PaymentHistory";
import EnrolledClass from "../DashBoard Page/Student Dashboard/EnrolledClass";
import ErrorPage from "../Shared/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "instructors",
        element: <InstructorsPage></InstructorsPage>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "home",
        element: <DashboardHome></DashboardHome>,
      },
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
      { path: "selectedClass", element: <SelectedClasses></SelectedClasses> },
      {
        path: "payment/:id",
        element: <Payments></Payments>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "enrolledClass",
        element: <EnrolledClass></EnrolledClass>,
      },
    ],
  },
]);

export default router;
