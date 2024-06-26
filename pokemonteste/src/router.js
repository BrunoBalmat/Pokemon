import React from 'react';
import Lista from './lista';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from './App';


const Rotas = () => {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/lista" element={<Lista/>} />
      </Routes>
    </Router>
  );
}
export default Rotas;