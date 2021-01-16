import React from "react";
import Header from "./components/Header";
import Worlds from "./components/Worlds";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ThemeContextProvider from "./context/ThemeContext";
import CountryPage from "./components/CountryPage";

const App = () => {
  return (
    <ThemeContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Worlds />
          </Route>
          <Route path='/country/:name'>
            <CountryPage />
          </Route>
        </Switch>
      </Router>
    </ThemeContextProvider>
  );
};

export default App;
