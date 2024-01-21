import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";

const rootElement = document.getElementById("root");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/search?",
    element: <App />,
  },
] as RouteObject[]);

if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
