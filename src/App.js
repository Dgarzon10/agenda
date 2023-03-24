import "./App.css";
import Header from "./components/header";
import Login from "./components/login";
import Sign_Up from "./components/register";
import LandingPage from "./components/landingPage";
import AdminPage from "./components/adminPage";
import UserPage from "./components/userPage";

import {BrowserRouter as Routes ,Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={<LandingPage/>}></Route>
        <Route path="/login" Component={<Login/>}></Route>
        <Route path="/signup">{/* <Sign_Up/> */}</Route>
        <Route path="/admin">{/* <AdminPage/> */}</Route>
        <Route path="/user">{/* <UserPage/> */}</Route>
      </Routes>
    </>
  );
}

export default App;
