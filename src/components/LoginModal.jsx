import React, { useState } from 'react';
import '../styles/auth.css';

export function LoginModal({ isOpen, onClose, onLogin, onOpenSignup }) {
  if (!isOpen) return null;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validate = () => {
    let ok = true;
    setEmailError('');
    setPasswordError('');
    if (!email) { setEmailError('Email required'); ok = false; }
    if (!password) { setPasswordError('Password required'); ok = false; }
    return ok;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (onLogin) onLogin({ email, password });
    onClose && onClose();
  };

  return (
    <div style={{ position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10000 }}>
      {/* backdrop */}
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }}></div>

      {/* centered modal content */}
  <div className="formlog" id="react-formlogin" style={{ position: 'relative', zIndex: 10001, maxWidth: '1100px', width: '95%' }}>
        <form className="login" onSubmit={handleSubmit}>
          <div className="leftformlog" id="react-leftformlogin">
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
            <p>If you don't have account click &#8594; <a href="#signup" className="signupbtnlogin" onClick={(e) => { e.preventDefault(); onClose && onClose(); onOpenSignup && onOpenSignup(); }}>Sign up</a></p>
          </div>

          <div className="rightformlog" id="react-rightformlogin">
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
    </div>
  );
}
