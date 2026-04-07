import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import ZipPage from "./pages/ZipPage";
import NongdamPage from "./pages/NongdamPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "zip",
        element: <ZipPage />,
      },
      {
        path: "nongdam",
        element: <NongdamPage />,
      },
    ],
  },
]);

export default router;
