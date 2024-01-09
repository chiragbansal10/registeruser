import React, { useState, useEffect } from 'react';

const Register = ({handleLogin}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    type: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [isEmailUnique, setIsEmailUnique] = useState(true);

  useEffect(() => {
    // Check email uniqueness (you may need to implement this logic)
    // For example, you can use an API call or check against existing data
    // For now, I'm using a simple timeout to simulate an asynchronous check
    const emailCheckTimeout = setTimeout(() => {
      // Simulating email uniqueness check
      const isUnique = true; // Replace with actual check result
      setIsEmailUnique(isUnique);
    }, 1000);

    return () => clearTimeout(emailCheckTimeout);
  }, [formData.email]);

//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = {};

//     // Add your validation logic here
//     if (!formData.firstName.trim()) {
//       newErrors.firstName = 'First Name is required';
//       isValid = false;
//     }

//     if (!formData.lastName.trim()) {
//       newErrors.lastName = 'Last Name is required';
//       isValid = false;
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//       isValid = false;
//     } else if (!isEmailUnique) {
//       newErrors.email = 'Email is not unique';
//       isValid = false;
//     }

//     if (!formData.type.trim()) {
//       newErrors.type = 'Type is required';
//       isValid = false;
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = 'Phone is required';
//       isValid = false;
//     }

//     if (!formData.password.trim()) {
//       newErrors.password = 'Password is required';
//       isValid = false;
//     } else if (formData.password.trim().length < 6) {
//       newErrors.password = 'Password must be at least 6 characters long';
//       isValid = false;
//     }

//     if (formData.confirmPassword !== formData.password) {
//       newErrors.confirmPassword = 'Passwords do not match';
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };
const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Add your validation logic here
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
      isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(formData.firstName.trim())) {
      newErrors.firstName = 'Please enter alphabet characters only';
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
      isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(formData.lastName.trim())) {
      newErrors.lastName = 'Please enter alphabet characters only';
      isValid = false;
    }
    if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
        isValid = false;
      } else if (
        !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(
          formData.email.trim()
        )
      ) {
        newErrors.email = 'Please enter a valid email address';
        isValid = false;
      } else if (!isEmailUnique) {
        newErrors.email = 'Email is not unique';
        isValid = false;
      }

    if (!formData.type.trim()) {
      newErrors.type = 'Type is required';
      isValid = false;
    }

    if (!formData.phone.trim()) {
        newErrors.phone = 'Phone is required';
        isValid = false;
      } else if (!/^\d{10}$/.test(formData.phone.trim())) {
        newErrors.phone = 'Please enter a valid 10-digit phone number';
        isValid = false;
      }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.trim().length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       // Form submission logic goes here
//       console.log('Form submitted:', formData);
//     }
//   };
const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate user registration (replace with actual registration logic)
      // For demonstration, consider the user is registered immediately
      const registeredUser = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        type: formData.type,
        phone: formData.phone,
        // You may want to hash the password before storing it in a real application
        password: formData.password,
      };

      // Simulate successful registration
      console.log('User registered:', registeredUser);
      localStorage.setItem('email', formData.email);
      localStorage.setItem('password', formData.password);
     // localStorage.getItem('myKey');

      // Trigger login after successful registration
      handleLogin({
        email: formData.email,
        password: formData.password,
      });
      
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>

        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>

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
          <label>Type:</label>
          <select name="type" value={formData.type} onChange={handleChange}>
            <option value="">Select Type</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
          {errors.type && <p>{errors.type}</p>}
        </div>

        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p>{errors.phone}</p>}
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

        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
