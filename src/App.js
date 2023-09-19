import React from 'react';
import { SignUp } from "./Auth/SignUp.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignIn } from './Auth/SignIn.js';
import { Gallery } from './components/Gallery.js';
import { SearchProvider } from './SearchContext.js';


function App() {
  return (
    <Router>
      <SearchProvider>
      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/gallery" element={<Gallery/>} />
        </Routes>
        </SearchProvider>
    </Router>
  );
}

export default App;
