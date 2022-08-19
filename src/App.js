import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import RegistrationPage from "./components/pages/Registration";
import SelectPage from "./components/pages/SelectPage";

const App = () => (
  <div className="ui container">
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
    <Route path="/register" exact component={RegistrationPage} />
    <Route path="/select" exact component={SelectPage} />
  </div>
);

export default App;
