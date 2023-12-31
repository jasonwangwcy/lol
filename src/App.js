import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <div className="App"> 
    <Router>
      <Navbar />
        <Routes>
       <Route path="/" element={<Home/>} /> 
        </Routes>
    </Router> 
     </div>
  )
}

export default App;
