/* eslint-disable no-unused-vars */
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Report from "./components/Report";
import dashboard from "./components/dashboard";
import test from "./components/test";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Sidebar />
        <Switch>
          <Route component={Content} path="/Content" exact />
          <Route component={dashboard} path="/dashboard" />
          <Route component={Report} path="/Report" />
        </Switch>
        {/* <Content /> */}
        <test/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
