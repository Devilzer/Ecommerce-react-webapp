import './style/App.scss';
import { useSelector } from "react-redux";
import LoginSignup from "./components/LoginSignup";

function App() {
  const isLoggedIn = useSelector(state => state.ui.isLoggedIn);

  return (
    <div className="App">
      {isLoggedIn===false && <LoginSignup/>}
      {isLoggedIn===true && <h1>HOME LOGGed in</h1>}
    </div>
  );
}

export default App;
