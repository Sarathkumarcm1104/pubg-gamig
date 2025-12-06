import React, { useState } from 'react';
import '../styles/auth.css';

export function LoginModal({ isOpen, onClose, onLogin, onOpenSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');

    let isValid = true;
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    }
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (isValid) {
      onLogin({ email, password });
      setEmail('');
      setPassword('');
    }
  };

  if (!isOpen) return null;

  return (
    <section id="signlogform" style={{ display: 'block' }}>
      <div className="formlog" id="formlogin">
        <form className="login" onSubmit={handleSubmit}>
          <div className="leftformlog" id="leftformlogin">
            <span className="exitx" onClick={onClose}>
              <i className="fas fa-times-circle fa-rotate-90 fa-sm"></i>
            </span>
            <h1>Log in</h1>
            
            <div className="emailseclog">
              <label>Email Id : </label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              {emailError && <span className="emailoginerror">{emailError}</span>}
            </div>
            
            <div className="passseclog">
              <label className="passlablog">Password :</label>
              <button 
                type="button"
                className="showhide" 
                onClick={() => setShowPassword(!showPassword)}
              >
                <i className="far fa-eye"></i>
                {showPassword ? 'Hide' : 'Show'}
              </button>
              <input 
                type={showPassword ? 'text' : 'password'} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="ilpasslog" 
                required 
              />
              {passwordError && <span className="passloginerror">{passwordError}</span>}
            </div>
            
            <button type="submit" className="subbtnl">submit</button>
            <p className="forget">Forget Password?</p>
            <p>If you don't have account click &#8594; <a href="#signup" className="signupbtnlogin" onClick={(e) => { e.preventDefault(); onClose(); onOpenSignup && onOpenSignup(); }}>Sign up</a></p>
          </div>
          
          <div className="rightformlog" id="rightformlogin">
            <div className="imgisitecon">
              <h2>Ranked</h2>
              <i className="fas fa-headset"></i>
              <p>
                You play ranked to raise up within the leaderboards to see who has the highest total ELO,
                concurrent wins in a session and/or the highest kills during a match.
              </p>
            </div>
          </div>
        </form>
      </div>
      <div onClick={onClose} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000 }}></div>
    </section>
  );
}
