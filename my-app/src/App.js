import './App.css';

import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'

import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Singleuser from './components/Singleuser';
import Allusers from './components/Allusers';
import Protected from './components/Protected';



function App() {
  const role = localStorage.getItem('token');
  return (
    <div className="App">

      <Navbar />
      <Routes>

        <Route path='/' exact element={<Home />} />
        <Route path='/contact' exact element={<Contact />} />
        <Route path='/services' exact element={<Services />} />
        <Route path='/register' exact element={<Register />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/about' exact element={<About />} />


        <Route path='/dashboard' element={<Protected role={role} />}>
          <Route path='/dashboard' element={<Dashboard />} >
            <Route path='singleuser' element={<Singleuser />} />
            <Route path='allusers' element={<Allusers />} />
          </Route>

        </Route >
        {/* <Protected role={role} >
       </Protected> */}





      </Routes>
      <Footer />

    </div>
  );
}

export default App;

