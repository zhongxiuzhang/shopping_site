import './App.css';
import RHeader from "./Header";
import Home from "./Home";
import RCheckout from "./Checkout";
import RLogin from "./Login";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path="/login">
            <RLogin />
          </Route>

          <Route path="/checkout">
            <RHeader />
            <RCheckout />
          </Route>

          <Route>
            <Route path="/">
              <RHeader/>
              <Home />
            </Route>
          </Route>

        </Switch>

      </Router>

    </div>
  );
}

export default App;
