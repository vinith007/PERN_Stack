import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Update from "./routes/Update";
import RestaurantsDetailsPage from "./routes/RestaurantsDetailsPage";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";

const App = () => {
  return (
    <RestaurantsContextProvider>
      <div className="container">
        <Router>
          <Routes>
            <Route exact path="/" Component={Home}></Route>
            <Route
              exact
              path="/restaurants/:id/update"
              Component={Update}
            ></Route>
            <Route
              exact
              path="/restaurants/:id"
              Component={RestaurantsDetailsPage}
            ></Route>
          </Routes>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
};

export default App;
