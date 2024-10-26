import { motion } from "framer-motion";
import { Loader, Lock, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import ToastNotification from "../components/ToastNotification";
import { useAuthStore } from "../store/AuthStore";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Login, error, isLoading, resetError } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    resetError();
    try {
      await Login(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return () => {
      resetError();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800
       bg-opacity-50 backdrop-filter
        backdrop-blur-xl rounded-2xl 
        shadow-xl overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          Welcome Back
        </h2>
        <form>
          <Input
            icon={Mail}
            type="email"
            placeholder="Enter you email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={Lock}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center mb-6">
            <Link
              to="/forgot-password"
              className="text-sm text-green-400 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
        </form>
        {error && <ToastNotification error={error} />}

        <Button
          type="submit"
          disabled={isLoading}
          onClick={handleLogin}
          text={
            isLoading ? <Loader className="animate-spin mx-auto" /> : "Login"
          }
        />
      </div>
      <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
        <p className="text-sm text-gray-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-400 hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Login;
