import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import CreateMeme from "../pages/CreateMeme";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
        {
            index: true,
            element: <Home />
        },
        {
            path: "newmeme",
            element: <CreateMeme />
        },
        {
            path: "contacto",
            element: <Contact />    
        }
    ]
}]);