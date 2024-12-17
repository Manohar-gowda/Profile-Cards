import "./App.css"
import HomePage from "./components/SocialMedia/HomePage";
import Authentication from "./components/SocialMedia/Authentication/Authentication";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, logout } from "./components/SocialMedia/Store/Auth/Actions";


function App() {

  
  const auth = useSelector((store) => store.auth); 
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt"); 
  
  useEffect(() => {  
    if (jwt) { 
       dispatch(getUserProfile(jwt)); 
       navigate("/"); 
      } 
    }, [jwt, dispatch]); 

  return ( 
   
      <div>

      <Routes>
        <Route path="/*" element={auth.user ? <HomePage /> : <Authentication />} />
      </Routes>

      </div>
  );
}

export default App;
