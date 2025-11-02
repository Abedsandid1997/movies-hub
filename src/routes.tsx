import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import MovieGrid from "./components/MovieGrid";
import TvGrid from "./components/TvGrid";
import MediaDetail from "./pages/MediaDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          { index: true, element: <MovieGrid /> },
          { path: "movie", element: <MovieGrid /> },
          { path: "tv", element: <TvGrid /> },
        ],
      },
      { path: ":media/:id", element: <MediaDetail /> },
    ],
  },
]);

export default router;
