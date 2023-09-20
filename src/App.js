import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignIn } from "./Auth/SignIn.js";
import { Gallery } from "./components/Gallery.js";
import { SearchProvider } from "./SearchContext.js";

function App() {
  return (
    <Router>
      <SearchProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          {/* Set the sign-in page as the home page */}
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </SearchProvider>
    </Router>
  );
}

export default App;
