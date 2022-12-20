import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import SignUp from '../components/SignUp'

const PublicRoutes = ({setToken}) => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login setToken={setToken}></Login>}/>
                <Route path="/cadastro" element={<SignUp/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default PublicRoutes