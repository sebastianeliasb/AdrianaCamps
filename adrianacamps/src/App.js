import "./app.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Concepts from "./pages/Concepts/Concepts";
import News from "./pages/News";
import Contact from "./pages/Contact";

// Layouts
import RootLayout from "./layouts/RootLayout";

// import ProjectItem from "./pages/ProjectItem";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="studio" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="concepts" element={<Concepts />} />
      <Route path="news" element={<News />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
