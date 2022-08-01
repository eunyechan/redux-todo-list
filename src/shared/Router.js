import React from "react";
import { Provider } from "react-redux";
import store from "../redux/config/configStore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import TodoLayout from "../pages/TodoLayout";

const Router = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoLayout />} />
          <Route path="/detail:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default Router;
