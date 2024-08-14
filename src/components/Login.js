import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';
import Logo from '../logo.png'; 
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false); 
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://touchmarsapi2024.azurewebsites.net/api/Logindetails/login', {
        UserName: username,
        Password: password,  
      });
    
      console.log('Login successful:', response.data);
      setMessage('Login successful!'); 
      setIsError(false);
      
      switch (response.data.role) {
        case 'ExecutiveAdmin':          
          navigate('/AppRequester'); 
          break;
        case 'Family':          
          navigate('/AppRequester'); 
          break;       
        default:          
          navigate('/'); 
          break;
      }
    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response.data);
        console.error('Error status:', error.response.status);
        console.error('Error headers:', error.response.headers);
        setMessage(error.response.data.message || 'Invalid credentials');
      } else if (error.request) {
        console.error('Error request:', error.request);
        setMessage('No response from server');
      } else {
        console.error('Error message:', error.message);
        setMessage('Error in request setup');
      }
      setIsError(true); 
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <div className="input-box">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-box">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          {message && (
            <p className={isError ? 'error-message' : 'success-message'}>{message}</p>
          )}
          <button className="loginBtn" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
