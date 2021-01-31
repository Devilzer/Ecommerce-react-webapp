import './style/App.scss';
import { useSelector } from "react-redux";


function App() {
  const isLoggedIn = useSelector(state => state.ui.isLoggedIn);

  return (
    <div className="App">

    </div>
  );
}

export default App;
