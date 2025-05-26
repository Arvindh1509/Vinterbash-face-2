import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
//import axios from './axios';
//import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
//import { useStateValue } from './Stateprovider';
//import AnimatedPage from './AnimatedPage';


function Login() {
    //const history=useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [{user},dispatch]=useStateValue();

    function signin(e) {
         e.preventDefault();
        
    //     axios.post('/login',{email,password})
    //     .then((data)=>{
    //         setEmail("");
    //         setPassword("");
    //         alert("Logged In");
    //         console.log(data.data.isbns);
    //         const favArr=[]
    //         data.data.isbns.map(items=>(
    //             items.map(item=>{
    //               favArr.push(item)
    //             })
    //         ))
    //         dispatch({
    //             type:'favArr',
    //             favArr:favArr
    //         })
    //         {console.log(favArr)}
    //         dispatch({
    //             type:'login',
    //             user:data.data.userName,
    //             userLastname:data.data.lastName,
    //             userAddress:data.data.userAddress,
    //             userEmail:data.data.userEmail,
    //             userContact:data.data.userContact
    //         })
    //         // console.log(data.data.userName);
    //         history.push('/');
    //     })
    //     .catch((error)=>alert(error.response.data));
    alert('Logged in');
     }
    return (
       // <AnimatedPage>

        <div className='login'>
            <Link to='/'>
                <img className='login_logo' src='https://srivageesha.com/assets/images/logo/logo.png' alt="Logo"/>
            </Link>

            <div className='login_container'>
                <h1> Sign In </h1>

                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button className='login_signin' type='submit' onClick={signin}> Sign In</button>
                    {/* <button className='login_signin' type='submit' onClick={signin}> Sign In</button> */}
                </form>

                <p>
                    By Signing in here you accept to all our term and conditions
                </p>
                <Link to='/register'>
                    <button  className='login_register'>Not having an Account? Create Your Account</button>
                </Link>
            </div>
        </div>
        //</AnimatedPage>
    );
}

export default Login;
