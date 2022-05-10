import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import AllRoutes from "./pages/AllRoutes";
import RouteDetail from "./pages/RouteDetail";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/route-detail/:id" element={<RouteDetail />} />
        <Route path="/all-routes" element={<AllRoutes />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
