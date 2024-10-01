import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CarList from "./components/CarList";
import CarDetail from "./components/CarDetail";



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <CarList />
    },
    {
      path: '/cars/:id',
      element: <CarDetail />,
    },
  ])

  return (
    <RouterProvider router={router} />
  )

}

export default App