import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/homePortal';
import Login from './components/login';
import SignUp from './components/signUp';
import HomePortal from './components/homePortal';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/home/*" element={<HomePortal/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
