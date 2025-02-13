
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Exercise1 from "./pages/exercise1.jsx";
import Exercise2 from "./pages/exercise2.jsx";
import Exercise2_1 from './pages/exercise2_1.jsx';
import Exercise3 from "./pages/exercise3.jsx";
import Exercise3_1 from './pages/exercise3_1.jsx';





function App() {

  return (
    <Router>
    <div className="min-h-screen flex flex-col">  
      <Navbar></Navbar>
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise1" element={<Exercise1 />} />
          <Route path="/exercise2" element={<Exercise2 />} />
          <Route path="/exercise2/exercise2_1" element={<Exercise2_1 />} />
          <Route path="/exercise3" element={<Exercise3 />} />
          <Route path="/exercise3/exercise3_1" element={<Exercise3_1 />} />


        </Routes>
      </div>
      <footer className="bg-gray-100 p-4 text-center">
        <p>© 2025 -Eli Pentser</p>
      </footer>
    </div>
  </Router>
  )
}

export default App
