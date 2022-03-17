import React from "react";
import { HashRouter, Route, Routes as RRDRoutes } from "react-router-dom";
import Home from "./src/screens/home/home";

// eslint-disable-next-line import/no-cycle

const Routes = () => (
  <HashRouter>
    <RRDRoutes>
      <Route path="/" root exact element={<Home />} />
    </RRDRoutes>
  </HashRouter>
);

export default Routes;
