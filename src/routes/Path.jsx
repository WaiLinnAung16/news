import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "../pages/News";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
const Path = () => {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/news",
      element: <News />,
    },
    {
      path: "/news/:id",
      element: <Detail />,
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.element}
              path={route.path}
              element={route.element}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Path;
