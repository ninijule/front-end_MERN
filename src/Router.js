import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import { ToastContainer } from 'react-toastify';

import NavBar from "./component/NavBar/NavBar";
import Home from "./component/General/Dashboard/Home";
import Login from "./component/Auth/Login/";
import Register from "./component/Auth/Register";

import 'react-toastify/dist/ReactToastify.css';

function Router() {
    return <BrowserRouter>
        <NavBar />
        <ToastContainer limit={1} />
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Register />} />
        </Routes>
    </BrowserRouter>
}

export default Router; 