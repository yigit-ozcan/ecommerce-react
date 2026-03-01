import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <h1>Home Page</h1>
      </Route>

      <Route path="/about">
        <h1>About Page</h1>
      </Route>
    </Switch>
  );
}

export default App;
