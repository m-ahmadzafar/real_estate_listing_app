import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import SignUp from './SignUp';
import SignIn from './SignIn';

function App() {
  return (
     
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  

  );
}

export default App;


// import LandingPage from "./LandingPage"

// function App() {


//   return (
//     <>
//      <LandingPage></LandingPage>
//     </>
//   )
// }

// export default App
