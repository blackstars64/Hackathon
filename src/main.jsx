import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const CalenderLoader = async () => {
  const reponse = await fetch("../../src/assets/datas.json", {
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
