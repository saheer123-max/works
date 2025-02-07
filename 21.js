import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
const navigate=useNavigate()

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // Fetch user data from JSON Server
    let response = await fetch(`http://localhost:3000/user/?email=${email}&password=${password}`)

    let json = await response.json(); // Correct variable usage

    if (json.length > 0) {
      alert("Login successful!");
      navigate("/"); // ✅ Navigate to Home Page
    } else {
      alert("Invalid email or password");
    }

  } catch (error) {
    alert("Something went wrong! Please try again.");
    console.error("Login Error:", error);
  }
};

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl text-center mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md">
          Login
        </button>
      </form>
      
      <div className="mt-4 text-center">
        <p className="text-sm">Don't have an account?</p>
        <Link to={"/regester"}>
       <p>sign</p>
      </Link>
      </div>
    </div>
  );
}

export default Login;

