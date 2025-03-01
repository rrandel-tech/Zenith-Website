import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

const Layout = () => (
    <>
      <Navbar />
      <Outlet />
    </>
  );
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);
  
  export function AppRouter() {
    return <RouterProvider router={router} />;
  }