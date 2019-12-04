import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import About from "../Routes/About";
import Login from "../Routes/Login";
import Register from "../Routes/Register";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
