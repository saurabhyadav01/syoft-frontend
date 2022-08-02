import React from "react"
import Home from "../component/Home"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "../component/SignIn";
import SignUp from "../component/SignUp";
import AddProduct from "../component/AddProduct";

export default function AllRoute()
{
 return(
    <>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/signIn" element={<SignIn />}></Route>
    <Route path="/signUp" element={<SignUp />}></Route>
    <Route path="/addProduct" element={<AddProduct />}></Route>
   </Routes> 
    </>
 )
}