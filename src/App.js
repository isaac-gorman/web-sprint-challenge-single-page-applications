import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";

const App = () => {
  return (
    <div>
      <header>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/form">
            <li>Form</li>
          </Link>
        </ul>
      </header>

      <div>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/form">
          <Form />
        </Route>
      </div>
    </div>
  );
};
export default App;
