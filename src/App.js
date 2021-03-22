import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default App;
