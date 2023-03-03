import './App.css'
import { Route, Routes } from "react-router-dom"
import data from './data'
import Home from './components/Home'
import About from './components/About'
import Stock from './components/Stock'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={ <About />} />
        <Route path="/stocks" element={ <Dashboard />} />
        <Route path="/stocks/ :symbol" element={ <Stock />} />
      </Routes>
    </div>
  );
}

export default App
