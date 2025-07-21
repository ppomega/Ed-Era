import { useState } from "react";
import axios from "axios";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
const AuthPage = ({ setUser }) => {
  const [authMode, setAuthMode] = useState("login"); // 'login' or 'signup'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // Only for signup
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      let endpoint = authMode === "login" ? "/login" : "/signIn";
      let payload =
        authMode === "login"
          ? { username, password }
          : { username, email, password };

      const response = await axios.get(import.meta.env.VITE_SERVER + endpoint, {
        headers: {
          username: payload.username,
          password: payload.password,
          email: payload.email,
        },
      });

      if (
        response.status != 200 ||
        (authMode == "login" && response.data.length == 0) ||
        (authMode == "signup" && response.data.length != 0)
      ) {
        throw new Error(
          authMode === "login"
            ? "Invalid username or password."
            : "Email Already Taken.Try a different email."
        );
      }

      setUser(response.data);
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black font-bunken flex items-center justify-center">
      <div className="text-yellow-300 font-bunken text-7xl font-extrabold absolute left-32">
        Ed-Era
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
        className="text-bunken absolute right-6 text-3xl text-white"
      >
        Your New way to Knowledge
      </motion.div>
      <div className="bg-neutral-900 p-8 rounded-lg shadow-lg w-80 flex flex-col">
        <div className="flex justify-between mb-6">
          <button
            className={`text-lg font-bold px-3 py-2 transition ${
              authMode === "login"
                ? "text-yellow-300 border-b-2 border-yellow-300"
                : "text-yellow-300"
            }`}
            onClick={() => setAuthMode("login")}
            disabled={authMode === "login"}
          >
            Login
          </button>
          <button
            className={`text-lg font-bold px-3 py-2 transition ${
              authMode === "signup"
                ? "text-yellow-300 border-b-2 border-yellow-300"
                : "text-yellow-300"
            }`}
            onClick={() => setAuthMode("signup")}
            disabled={authMode === "signup"}
          >
            Sign Up
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          {error && (
            <div className="bg-red-600 text-white py-2 px-4 mb-4 rounded">
              {error}
            </div>
          )}
          <input
            type="text"
            placeholder="Username"
            className="mb-4 p-3 text-base rounded bg-neutral-800 text-white placeholder-gray-400 outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            disabled={loading}
          />
          {authMode === "signup" && (
            <input
              type="email"
              placeholder="Email"
              className="mb-4 p-3 text-base rounded bg-neutral-800 text-white placeholder-gray-400 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          )}
          <input
            type="password"
            placeholder="Password"
            className="mb-6 p-3 text-base rounded bg-neutral-800 text-white placeholder-gray-400 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />
          <button
            type="submit"
            className="p-3 bg-yellow-300 text-black font-bold rounded transition hover:bg-gray-200 disabled:opacity-50"
            disabled={loading}
          >
            {loading
              ? authMode === "login"
                ? "Signing In..."
                : "Signing Up..."
              : authMode === "login"
              ? "Log In"
              : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
