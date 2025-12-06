import React, { useState } from 'react';
import '../styles/auth.css';

export function SignupModal({ isOpen, onClose, onSignup, onOpenLogin }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    gender: '',
    hobbies: [],
    religion: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, options } = e.target;

    if (type === 'select-multiple') {
      const selected = Array.from(options).filter(o => o.selected).map(o => o.value);
      setFormData(prev => ({ ...prev, [name]: selected }));
      return;
    }

    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.firstName) errs.firstName = 'First name is required';
    if (!formData.email) errs.email = 'Email is required';
    if (!formData.password) errs.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) errs.confirmPassword = 'Passwords must match';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (onSignup) onSignup(formData);
    onClose && onClose();
  };

  return (
    <div style={{ position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10000 }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }}></div>

      <div className="formsign" style={{ position: 'relative', zIndex: 10001, maxWidth: '1200px', width: '95%' }}>
        <form className="signup" onSubmit={handleSubmit}>
          <div className="leftformsign"></div>

          <div className="rightformsign" id="react-rightformsignup">
            <span className="exitxx" onClick={onClose}>
              <i className="fas fa-times-circle fa-rotate-90 fa-sm"></i>
            </span>
            <h1>Sign up</h1>

            <div className="fname">
              <label>FirstName :</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              {errors.firstName && <span className="error">{errors.firstName}</span>}
            </div>

            <div className="lname">
              <label>LastName :</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              {errors.lastName && <span className="error">{errors.lastName}</span>}
            </div>

            <div className="emailsecsign">
              <label>Email Id :</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="dob">
              <label>Date of birth :</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
              {errors.dob && <span className="error">{errors.dob}</span>}
            </div>

            <div className="gend">
              <label>Gender :</label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="trans"
                  checked={formData.gender === 'trans'}
                  onChange={handleChange}
                />
                Trans
              </label>
              {errors.gender && <span className="error">{errors.gender}</span>}
            </div>

            <div className="hobb">
              <label>Hobbies :</label>
              <select
                name="hobbies"
                multiple
                value={formData.hobbies}
                onChange={handleChange}
              >
                <option value="cricket">Cricket</option>
                <option value="football">Football</option>
                <option value="swimming">Swimming</option>
                <option value="reading">Reading</option>
                <option value="painting">Painting</option>
                <option value="cooking">Cooking</option>
                <option value="gardening">Gardening</option>
                <option value="traveling">Traveling</option>
              </select>
            </div>

            <div className="reli">
              <label>Religion :</label>
              <select
                name="religion"
                value={formData.religion}
                onChange={handleChange}
                required
              >
                <option value="">----select religion----</option>
                <option value="hindu">Hindu</option>
                <option value="christian">Christian</option>
                <option value="islam">Islam</option>
                <option value="buddhism">Buddhism</option>
                <option value="jainism">Jainism</option>
                <option value="roman">Roman imperial cult</option>
                <option value="shinto">Shinto</option>
              </select>
              {errors.religion && <span className="error">{errors.religion}</span>}
            </div>

            <div className="passsecsign">
              <label>Password :</label>
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
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>

            <div className="cpasssecsign">
              <label>Confirm Password :</label>
              <button
                type="button"
                className="showhide"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <i className="far fa-eye"></i>
                {showConfirmPassword ? 'Hide' : 'Show'}
              </button>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
            </div>

            <button type="submit" className="subbtns">submit</button>
            <p>If you already have account click &#8594; <a href="#login" className="loginbtnsignup" onClick={(e) => { e.preventDefault(); onClose && onClose(); onOpenLogin && onOpenLogin(); }}>Log in</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}
