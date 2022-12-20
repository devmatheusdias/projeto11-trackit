import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Habits from '../components/Habits';
import Today from '../components/Today';

const PrivateRoutes = ({token}) => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/habitos' element={<Habits token={token}></Habits>}/>
                <Route path='/hoje' element={<Today token={token}> </Today>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default PrivateRoutes
