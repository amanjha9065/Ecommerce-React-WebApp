import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HomePage from './HomePage'
function LoginPage() {
  const [username, setUsername]=useState('')
  const [password, setPassword]=useState('')
  const [flag,setFlag]=useState(false)
  var auth = JSON.parse(localStorage.getItem('auth'));
	
	const handleLogin=()=>{

		if(auth===null){
			alert('no user found!');
		}
			
			
		const same = auth.filter(d=>d.username===username);

		if(same.length!==0){

			if (same[0].password===password){

				localStorage.setItem('userlogined',username);
        alert(username + " Logged in succesfully")
        setFlag(!flag)
				setUsername('');
				setPassword('');
			}
			else{
				alert('wrong password.');
			}
		}else{
			alert(username+'user not exist!')
		}
	}

  return (
    
    <>
    { flag?<HomePage/>:
      <div className='login-parent'>
        
        
        <div className='row justify-content-center'>
          
          <div className='col-md-4 z1'>
            <div className='login-form'>
                <h2>Login</h2>
                <hr/>
                <input type="text" className='form-control' placeholder='email' value={username} 
                onChange={(e)=>{setUsername(e.target.value)}}
                />
                <input type="text" className='form-control' placeholder='password' value={password} 
                onChange={(e)=>{setPassword(e.target.value)}}
                />
                
                <button className='my-3' onClick={handleLogin}>Login</button>
                <hr/>
                <Link to='/register'>Click Here To Register</Link>
            </div>
            
          </div>
          <div className='col-md-5 z1'>
            <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_jcikwtux.json"  background="transparent"  speed="1"    loop  autoplay></lottie-player>


          </div>
          
        </div>
        <div className='login-bottom'>

        </div>
        
      </div>
}
      </>
    
  )
}

export default LoginPage