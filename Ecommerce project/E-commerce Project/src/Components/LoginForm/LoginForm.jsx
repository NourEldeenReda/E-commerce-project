/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice"; // Redux action to log in
import { useNavigate } from "react-router-dom"; // to navigate after successful login
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS
import "./LoginForm.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // State for "Remember Me"
  const [error, setError] = useState(""); // For displaying errors
  const dispatch = useDispatch(); // Use Redux to dispatch actions

  const navigate = useNavigate(); // For navigation after login

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch user data from the API
      const response = await fetch(
        `http://localhost:3000/users?username=${username}`
      );
      const users = await response.json();

      console.log(users); // Debug: Check if the users array is being returned correctly

      // Check if the user exists and the password matches
      if (users.length > 0 && users[0].password === password) {
        // Show success toast
        toast.success("Logged in successfully!", {
          position: "top-right",
        });

        const userData = { username: users[0].username };

        // Dispatch login action to Redux
        dispatch(login(userData));

        // If "Remember Me" is checked, store user data in localStorage
        if (rememberMe) {
          localStorage.setItem("user", JSON.stringify(userData));
        }

        // Redirect to homepage after a brief delay
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setError("Invalid username or password.");
      }
    } catch (error) {
      console.error("Error fetching users:", error); // Log any error
      setError("Error logging in. Please try again.");
    }
  };

  return (
    <div className="login-background">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
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
          {error && (
            <p className="error" style={{ color: "red" }}>
              {error}
            </p>
          )}
          <div className="remget">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)} // Handle checkbox change
              />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              Don't have an account? <a href="register">Register</a>
            </p>
          </div>
        </form>
      </div>
      {/* Include the ToastContainer */}
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
