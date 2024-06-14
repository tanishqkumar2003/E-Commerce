import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "./About.js";
import Contact from "./Contact.js";
import ItemDetail from "./ItemDetails.js";

const AppLayout = () => {
    return (
       <div className="app-layout">
        <Header/>
        <Outlet/>
       </div>
    )
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
        {path:"/",
          element:<Body/>
    },
        {
        path:"/about",
        element:<About/>
    },
    {
        path:"/contact",
        element:<Contact/>
    },
    {
      path:"/items/:id",
      element:<ItemDetail/>
  }
],
    errorElement:<Error/>
}

]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);


