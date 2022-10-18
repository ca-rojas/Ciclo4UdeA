import './App.css';
import React from 'react';
import Header from './components/layout/header';
import Home from './components/Home';
import { Footer } from './components/layout/footer';
// import router for the Front, this is different form the router in the back
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <div  className='container container-fluid'>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/Home" element={<Home />}/>
            </Routes>
          </div>
          <Footer />
      </div>
    </Router>
  );
}

export default App;