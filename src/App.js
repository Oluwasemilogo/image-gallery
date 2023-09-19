import React from 'react';
import { SignUp } from "./Auth/SignUp.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignIn } from './Auth/SignIn.js';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
