import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import NavBar from "./component/NavBar/";
import Dashboard from "./component/General/Dashboard";
import Login from "./component/Auth/Login/";
import Home from "./component//General/Home/";
import Register from "./component/Auth/Register";

import 'react-toastify/dist/ReactToastify.css';

function Router() {
    return <BrowserRouter>
        <NavBar />
        <ToastContainer limit={1} />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Register />} />
        </Routes>
    </BrowserRouter>
}

export default Router; 