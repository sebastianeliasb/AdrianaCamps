import "./app.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./routes/root";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Concepts from "./pages/Concepts/Concepts";
import News from "./pages/News";
import Contact from "./pages/Contact";

// Layouts
import RootLayout from "./layouts/RootLayout";
import ProjectItem from "./pages/ProjectItem/ProjectItem";

// import ProjectItem from "./pages/ProjectItem";
const fakeData = [
  {
    id: "0",
    projectInfo: [
      {
        name: "Project number1",
        location: "Glessen,Germany",
        date: "2017-2020",
        description:
          "Designed for a site formerly occupied by a mews house, located between parallel rows of townhouses in the town of Giessen in central Germany, this project was always going to be about taking a set of established architectural principles and applying them to the creation of an enclosed domestic universe  of Giessen in central Germany, this project was always going to be about taking a set of established architectural principles and applying them to the creation of an enclosed domestic universe. of Giessen in central Germany, this project was always going to be about taking a set of established architectural principles and applying them to the creation of an enclosed domestic universe. of Giessen in central Germany, this project was always going to be about taking a set of established architectural principles and applying them to the creation of an enclosed domestic universe.",
        client: "Lorem Ipsum",
        photografer: "Lorem Ipsum",
        surface: "Lorem Ipsum",
      },
    ],
    projectImages: [
      {
        projectImageMain: null,
        projectImage1: null,
        projectImage2: null,
        projectImage3: null,
        projectImage4: null,
        projectImage5: null,
        projectImage6: null,
        projectImage7: null,
        projectImage8: null,
        projectImage9: null,
        projectImage10: null,
      },
    ],
  },
  {
    id: "1",
    projectInfo: [
      {
        name: "Project number2",
        location: "Glessen,Germany",
        date: "2017-2020",
        description: "",
        client: "Lorem Ipsum",
        photografer: "Lorem Ipsum",
        surface: "Lorem Ipsum",
      },
    ],
    projectImages: [
      {
        projectImageMain: null,
        projectImage1: null,
        projectImage2: null,
        projectImage3: null,
        projectImage4: null,
        projectImage5: null,
        projectImage6: null,
        projectImage7: null,
        projectImage8: null,
        projectImage9: null,
        projectImage10: null,
      },
    ],
  },
];

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route index element={<Home />} />
//       <Route path="studio" element={<About />} />
//       <Route path="projects" element={<Projects />} />
//       <Route path="concepts" element={<Concepts />} />
//       <Route path="news" element={<News />} />
//       <Route path="contact" element={<Contact />} />
//       <Route path="project" element={<ProjectItem />} />
//     </Route>
//   )
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
