import './App.css';
import Navbar from './Components/Nav';
import Home from './Pages/Homepage';
import Loginpage from './Pages/Login';
import Registerpage from './Pages/Register';

function App() {
  let Route
  switch (window.location.pathname) {
    case "/":
      Route=<Home />;
      break;
    case "/login":
      Route=<Loginpage />;
      break;
    case "/register":
      Route=<Registerpage />;
      break;
  }

  return (
    <div className="App">
      <Navbar />
      {Route}
    </div>
  );
}

export default App;
