/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"; // For dispatching login action
import { login } from "../../Store/userSlice"; // Import the login action
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./RegisterForm.css"; // Reuse the same CSS file

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch(); // For dispatching actions to Redux

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check if username already exists
      const userResponse = await fetch(
        `http://localhost:3000/users?username=${username}`
      );
      const users = await userResponse.json();

      if (users.length > 0) {
        setError("Username already exists.");
      } else {
        // Add new user to the database
        const response = await fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
            Wishlist: [],
            Cart: [],
          }),
        });

        if (response.ok) {
          setSuccess("Registration successful!");

          // Log the user in automatically after registration
          const userData = { username: username };
          dispatch(login(userData));

          // Show success toast
          toast.success("Registered successfully!", {
            position: "top-right",
          });

          // Redirect to homepage after a brief delay
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          setError("Failed to register. Please try again.");
        }
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-background">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className="icon" />
          </div>
          <button type="submit">Register</button>
          <div className="login-link">
            <p>
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </form>
      </div>
      {/* Include the ToastContainer */}
      <ToastContainer />
    </div>
  );
};

export default RegisterForm;
