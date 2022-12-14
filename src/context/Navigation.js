import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import { Home } from './Home/Home'


const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Navigation;