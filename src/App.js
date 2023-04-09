import "./App.css";
import Header from "./components/header";
import Login from "./components/login";
import Sign_Up from "./components/register";
import LandingPage from "./components/landingPage";
import AdminPage from "./components/adminPage";
import UserPage from "./components/userPage";
import LibroDiario from "./components/LibroDiario";

import {BrowserRouter as Router,Routes ,Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <> 
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/user" element={<UserPage/>}></Route>
      <Route path="/admin" element={<AdminPage/>}></Route>
      <Route path="/libro" element={<LibroDiario/>}></Route>
    </Routes>
    
    </Router>
    </>
  );
}

export default App;
