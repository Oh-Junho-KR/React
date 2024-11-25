import { useState } from 'react';
import '../css/Login.css';
import ReactLogo from '../../../css/images/react.ico';
import NodeJSLogo from '../../../css/images/free-icon-nodejs-919825.png';

const Login = (props) => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const handleSubmitLogin = async (event) => {
        event.preventDefault();

        // login logic
    }

    const fnChangeID = (event) => {
        setId(event.target.value);
    }

    const fnChangePW = (event) => {
        setPw(event.target.value);
    }

    return (
        <div className='login_wrap'>
            <div className='sec_img'>
                <img src={ReactLogo}></img>
                <img src={NodeJSLogo}></img>
            </div>
            <form>
                <div className='sec_login'>
                    <div className='sec_id_info'>
                        <label>ID : </label>
                        <input placeholder='Input ID or Email' onChange={fnChangeID}></input>
                    </div>
                    <div className='sec_pw_info'>
                        <label>PW : </label>
                        <input type='password' placeholder='Input Password' onChange={fnChangePW}></input>
                    </div>
                    <div className='sec_btn'>
                        <button type='submit' id='btnLogin' onClick={handleSubmitLogin}>LOG IN</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login