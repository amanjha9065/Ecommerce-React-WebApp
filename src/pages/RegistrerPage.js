import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginPage from './LoginPage'

function RegisterPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')
  const [flagr,setFlagr]=useState(false);
  const [passType1, setPassType1] = useState(true)

  var auth = JSON.parse(localStorage.getItem('auth'));
	
	const handleRegister=()=>{

		if(auth===null){
			auth=[{'username':'aaa','password':'aaa'},];
		}
			
		if(password===cpassword){
			
			const same = auth.filter(d=>d.username===username);

			if(same.length===0){
				auth = [...auth,{'username':username,'password':password}];
				localStorage.setItem('auth',JSON.stringify(auth));
				setFlagr(!flagr);
				setUsername('');
				setPassword('');
				//props.afterSignup(username);
			}else{
				alert(username+' exist!')
			}
		}else{
			alert('Passwords are not matching')
		}
	}
  
  return (
    
    <>
    {flagr? <LoginPage/>:
    <div className='register-parent'>
      <div className='register-top'>

      </div>
      <div className='row justify-content-center'>
        <div className='col-md-5'>
          <lottie-player
            src="https://assets5.lottiefiles.com/packages/lf20_yqyt4zdn.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>

        </div>
        <div className='col-md-4 z1'>
          <div className='register-form'>
            <h2>Register</h2>
            <hr />
            <input type="text" className='form-control' placeholder='email' value={username}
              onChange={(e) => { setUsername(e.target.value) }}
            />
            <input type={passType1 ? 'password' : 'text'} className='form-control' placeholder='password' value={password}
              onChange={(e) => { setPassword(e.target.value) }}
            />
            <input type={passType1 ? 'password' : 'text'} className='form-control' placeholder='confirm password' value={cpassword}
              onChange={(e) => { setCpassword(e.target.value) }}
            />
            <button onClick={() => { setPassType1(!passType1) }} className='my-3'>{passType1 ? 'show' : 'hide'}</button>

            <button onClick={handleRegister} className='my-3'>Register</button>
            <hr />
            <Link to='/login'>Click Here To Login</Link>

          </div>
        </div>
      </div>
    </div>
    }
    </>
    

  )
}

export default RegisterPage