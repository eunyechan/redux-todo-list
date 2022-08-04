import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import TodoLayout from "../pages/TodoLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoLayout />} />
        <Route path="/detail:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
