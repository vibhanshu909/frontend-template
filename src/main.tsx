import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import About from "./pages/about";
import SignUp from "./pages/auth/signup";
import Root from "./pages/root";
import Todos, { loader as todosLoader } from "./pages/todos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <h1>{import.meta.env.VITE_APP_NAME}</h1>,
      },
      {
        path: "/todos",
        loader: todosLoader,
        element: <Todos />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/auth/signup",
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
