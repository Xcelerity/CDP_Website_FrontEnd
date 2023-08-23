import React from "react";
import ReactDOM from "react-dom/client";
import App, { Events, LandingPage, StudentRegistration, Team } from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { inject } from "@vercel/analytics";

inject();

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/studentRegistration",
    element: <StudentRegistration />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
