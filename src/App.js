import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import UserForm from "./page/UserForm/UserForm";
import ChangeUser from "./page/ChangeUser/ChangeUser";
import DeleteUser from "./page/DeleteUser/DeleteUser";
import Users from "./page/Users/Users";

import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

function App() {
  return (
    <Router>
      <div className='app'>   
            <Paper className="app__paper">
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/form'>
                <UserForm />
              </Route>
              <Route path='/users'>
                <Users />
              </Route>
              <Route path='/change'>
                <ChangeUser />
              </Route>
              <Route path='/delete'>
                <DeleteUser />
              </Route>
            </Switch>
            </Paper>
        </div>
    </Router>
  );
}

export default App;
