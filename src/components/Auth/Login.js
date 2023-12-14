import { useState } from 'react';
import './Login.scss'
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/apiSevice';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { doLogin } from '../../redux/action/userAction';
import { ImSpinner3 } from "react-icons/im";

const Login = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async()=>{
        //validate
        setIsLoading(true)
        //submit apis
        let data = await postLogin(email, pass)
        console.log("me", data);
        if(data && data.EC === 0){
            toast.success(data.EM);
            setIsLoading(false);
            dispatch(doLogin(data))
            navigate('/')
        }
        if(data && +data.EC !==0 ){
            toast.error(data.EM);
            setIsLoading(false);
        }
    }
    const handleSignup =()=>{
        navigate('/signup')
    }

    return (
        <>
            <div className="login-container">
                <div className='header  d-flex justify-content-end'>
                   <p>Don't have an account yet?</p> 
                    <div className="d-grid">
                        <button type="button" className="btn-signup btn btn-default btn-outline"
                        onClick={()=> handleSignup()}
                        >Signup </button>
                    </div>
                </div>
                <div className='title col-4 mx-auto d-flex justify-content-center'>
                    Tuu Web
                </div>
                <div className='welcome col-4 mx-auto d-flex justify-content-center'>
                    Hello, who’s this?
                </div>
                <div className='content-form col-4 mx-auto'>
                    <div className="mb-3">
                        <label  className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(event)=>setEmail(event.target.value)}
                        />
                        <label  className="form-label">PassWord</label>
                        <input
                            type="password"
                            className="form-control"
                            value={pass}
                            onChange={(event)=>setPass(event.target.value)}
                        />
                    </div>
                    <span className='forgot'>Forgot your password?</span>
                    <div className="d-grid btn-submit">
                        <button type="button" className="btn btn-primary"
                        onClick={()=> handleLogin()}
                        disabled={isLoading}
                        >{isLoading==true&&<ImSpinner3 className='loaderIcon' />} Login</button>
                    </div>
                    <span className='back text-center' onClick={()=>navigate('/')}>&#60;&#60; Go to Homepage</span>
                </div>
            </div>
        </>
    )
}
export default Login;