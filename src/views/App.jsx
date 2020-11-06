import React from 'react';
import UsersPage from "./users-page/UsersPage";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <UsersPage />
            </Route>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
