import './style/App.scss';
import { useSelector } from "react-redux";
import LoginSignup from "./components/LoginSignup";
import Home from "./components/Home";
import "../node_modules/noty/lib/noty.css";
import "../node_modules/noty/lib/themes/nest.css";


function App() {
  const isLoggedIn = useSelector(state => state.ui.isLoggedIn);

  return (
    <div className="App">
      {isLoggedIn===false && <LoginSignup/>}
      {isLoggedIn===true && <Home/>}
    </div>
  );
}

export default App;
