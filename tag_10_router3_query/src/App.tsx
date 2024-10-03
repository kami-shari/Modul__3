import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./components/Landingpage";
import DetailPage from "./components/Detailpage";
import AllBeers from "./components/AllBeers";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/beers", element: <AllBeers /> },
      { 
        path: "/beers/:id",
        element: <DetailPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;