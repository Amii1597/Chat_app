import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <div className="App">
            <div className="app_body">
              <Sidebar />

              <Route exact path="/">
                <Chat />
              </Route>
              <Route path="/room/:roomId">
                <Chat />
              </Route>
            </div>
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
