import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Add your login validation logic here
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email= localStorage.getItem('email');
  const password=  localStorage.getItem('password');
    
    if (validateForm()) {
      // Simulating authentication (replace with actual authentication logic)
      const mockUser = { email: email, password: password };

      if (
        formData.email === mockUser.email &&
        formData.password === mockUser.password
      ) {
        // Successful login
        console.log('Login successful');
        window.location.href = '/dashboard';
        setErrors({});
      } else {
        // Invalid credentials
        setErrors({ general: 'Invalid email or password' });
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        {errors.general && <p>{errors.general}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
