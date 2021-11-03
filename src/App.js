import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route>
            <Route path="/">
              <Header/>
              <Home />
            </Route>
          </Route>

        </Switch>

      </Router>

    </div>
  );
}

export default App;
