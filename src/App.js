import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/Registration/SignUp';


function App() {
  return(
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path="/login" element={<Login />} />
           <Route path='/register' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}

export default App;
