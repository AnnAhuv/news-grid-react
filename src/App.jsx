import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Article from "./pages/Article";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SharedLayout from "./components/SharedLayout";

const routs = [
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "article",
        element: <Article />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routs);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
