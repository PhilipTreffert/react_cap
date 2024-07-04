import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Navbar from './Components/Navbar/Navbar.css';
function App() {

  return (
    <div className="App">

<nav>
 
 <div class="nav__icon" onClick={handleClick}>
   <i class="fa fa-times fa fa-bars"></i>
 </div>
 <ul class="nav__links active">
   <li class="link">
     <a href="../Landing_Page/LandingPage.html">Appointments</a>
   </li>
   <li class="link">
     <a href="#">Reviews</a>
   </li>

       <li class="link">
         <a href="../Sign_Up//Sign_Up.html">Sign-up
           
         </a>
       </li>
       <li class="link">
         <a href="../Login/Login.html">
           <button class="btn1">Login</button>
         </a>
       </li>

 </ul>
</nav>

        <BrowserRouter>
          <Navbar/>
              <Routes>
              </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;