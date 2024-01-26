import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
 
import Home from '../components/home/Home.jsx'
import UserCrud from '../components/user/usercrud.jsx'
 
export default props => (
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/users' element={<UserCrud />} />
        <Route path='*' element={<Navigate to='/' />} /> 
    </Routes>
);