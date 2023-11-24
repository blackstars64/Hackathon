import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cadeaux from "./components/Cadeaux.jsx";
import Error from "./components/Error.jsx";

export const CalenderLoader = async () => {
  const reponse = await fetch("../../src/data/cadeaux.json", {
    method: "GET",
  });
  const data = await reponse.json();
  return data;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: CalenderLoader,
  },
  {
    path: "/cadeaux/:id",
    element: <Cadeaux />,
    loader: CalenderLoader,
  },
  {
    path: "/*",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
