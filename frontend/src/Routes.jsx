
import React from 'react'
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Loja from './pages/Loja/loja'
import Home from './pages/Home/home'

export default function () {

    return(
        <BrowserRouter>
           <Routes>
             <Route path = "/loja"  element = {<Loja />} />
             <Route path = "/"  element = {<Home />} />
           </Routes>
        </BrowserRouter>
 
    );
}