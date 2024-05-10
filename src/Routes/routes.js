import React from "react";
import Home from "../pages/site/Home/Home";
import Shop from "../pages/site/Shop/Shop";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Products from "../pages/admin/Products/Products";
import Users from "../pages/admin/Users/Users";
import AdminRoot from "../pages/admin/AdminRoot";
import SiteRoot from "../pages/site/SiteRoot";
import Error from "../pages/Error/Error";
import About from "../pages/site/About/About";
import Addproduct from "../components/admin/Addproduct/Addproduct";

const ROUTES = [
  {
    path: "/",
    element:<SiteRoot/>,
    
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      }, {
        path:"About",
        element: <About/>
      },{
        path:"*",
        element: <Error/>
      }],
  },{
    path: "/admin",
    element:<AdminRoot/>,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products />,
      },{
        path:"addproduct",
        element:<Addproduct/>,
      }
      ,{
        path: "users",
        element: <Users/>,
      }],
  }
];

export default ROUTES;
