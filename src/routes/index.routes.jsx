import { createBrowserRouter, Navigate } from "react-router-dom";
import LazyLoadComponent from "../components/base/LazyLoadComponent";
import React from "react";
// Cách import thông thường => làm giảm hiệu năng ứng dụng
// import Register from "../pages/auth/register";
// import Login from "../pages/auth/login";
// import UserLayout from "../layouts/users/UserLayout";

// Tải bằng lazy load
const UserLayout = React.lazy(() => import("../layouts/users/UserLayout"));
const Login = React.lazy(() => import("../pages/auth/login"));
const Register = React.lazy(() => import("../pages/auth/register"));

const routers = createBrowserRouter([
   {
      path: "/",
      element: (
         <LazyLoadComponent>
            <Login />
         </LazyLoadComponent>
      ),
   },
   {
      path: "/login",
      element: (
         <LazyLoadComponent>
            <Login />
         </LazyLoadComponent>
      ),
   },
   {
      path: "/register",
      element: (
         <LazyLoadComponent>
            <Register />
         </LazyLoadComponent>
      ),
   },
   {
      path: "/user",
      element: (
         <LazyLoadComponent>
            <UserLayout />
         </LazyLoadComponent>
      ),
   },
]);
export default routers;
