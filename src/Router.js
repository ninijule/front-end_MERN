import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import { ToastContainer } from 'react-toastify';

import NavBar from "./component/NavBar";
import Home from "./component/Home";
import Login from "./component/Login";
import Register from "./component/Register";

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