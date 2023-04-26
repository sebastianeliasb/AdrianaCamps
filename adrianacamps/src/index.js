import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import ConceptItem from "./pages/ConceptsItem/ConceptItem";

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
    path: "concept/:conceptId",
    element: <ConceptItem />,
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
