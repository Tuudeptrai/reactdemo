import { useState } from 'react';
import './Login.scss'

const Login = (props) => {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleLogin =()=>{
        alert("me");
    }

    return (
        <>
            <div className="login-container">
                <div className='header  d-flex justify-content-end'>
                    Don't have an account yet?
                </div>
                <div className='title col-4 mx-auto '>
                    Tuu Web
                </div>
                <div className='welcome col-4 mx-auto'>
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
                    <div class="d-grid btn-submit">
                        <button type="button" class="btn btn-primary"
                        onClick={()=> handleLogin()}
                        >Login </button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default Login;