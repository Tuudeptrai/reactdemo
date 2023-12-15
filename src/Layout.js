import {  Routes, Route } from "react-router-dom";
import App from './App';
import User from './components/Users/User';
import Admin from './components/Admin/Admin';
import Home from './components/Home/Home';
import DashBoard from './components/Admin/Content/DashBoard';
import ManageUser from './components/Admin/Content/ManageUser';
import Login from './components/Auth/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from "./components/Auth/Register";
import ListQuiz from "./components/Users/ListQuiz";

const Layout = (props) => {
    return (
        <>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home/>} />
                {/* <Route path="/users" element={<User />} /> */}
                <Route path="/users" element={<ListQuiz />} />
                
            </Route>
            <Route path="/admins" element={<Admin />}>
            <Route index element={<DashBoard/>} />
            <Route path="manage-users" element={<ManageUser />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Register />} />
      </Routes>
      <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    />
                    {/* Same as */}
                    <ToastContainer />
        </>
    )
}
export default Layout;