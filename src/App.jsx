import './App.css'
import { 
  Home,
  Aboutus
 } from './views/index';
import { Routes, Route } from "react-router-dom";



function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Aboutus" element={<Aboutus />} />

    </Routes>
  )
}

export default App;
