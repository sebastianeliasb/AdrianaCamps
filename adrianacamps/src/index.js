import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import ErrorPage from "./pages/error-page";
import About from "./pages/About";
import Root from "./routes/root";
import "./app.scss";
import Projects from "./pages/Projects";
import Concepts from "./pages/Concepts/Concepts";
import News from "./pages/News";
import Contact from "./pages/Contact";
import ProjectItem from "./pages/ProjectItem";
import Dashboard from "./pages/Dashboard/Dashboard";
import Signin from "./pages/Signin/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "studio",
    element: <About />,
  },
  {
    path: "projects",
    element: <Projects />,
  },

  {
    path: "project/:projectId",
    element: <ProjectItem />,
  },
  {
    path: "concepts",
    element: <Concepts />,
  },
  {
    path: "news",
    element: <News />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "singin",
    element: <Signin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
