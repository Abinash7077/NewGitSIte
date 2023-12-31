import React from "react";
import "./App.css";
import Main from "./Page/Main";
/* import Login from "./Page/Login"; */
import Authe from "./Page/Authe";
import Reponame from "./Page/Reponame";
import Home from "./Page/Home";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Page/Error";
function App() {
  
  return (
    <div className="App App-header ">
      <BrowserRouter>
      
        <Routes>
        <Route  path="/" element={<Home />}/>

        <Route  path="/login" element={<Authe />}></Route>
          {/* <Route exact path="/Login" element={<Login />}></Route> */}
          <Route path="/repos" element={<Main/>}>
         
          </Route>
          <Route  path="/repos/repo-name" element={<Reponame />}/>
          <Route path="*" element={<Error/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
