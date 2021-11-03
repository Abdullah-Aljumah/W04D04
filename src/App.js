import React from "react";
// import { useState } from "react";
import { Route, Switch } from "react-router";
import Nav from "./components/Nav";
// import Home from "./components/Home";
import Contact from "./components/Contact";
import Cards from "./components/Cards";
import Card from "./components/Card";
import Error404 from "./components/Error404";
// import Footer from "./components/Footer";
// import Fav from "./components/fav";
const App = () => {
  // const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Nav />

      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route exact path="/Fav" component={Fav} /> */}
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/" component={Cards} />
        <Route exact path="/Card/:id" component={Card} />
        <Route exact path="*" component={Error404} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
