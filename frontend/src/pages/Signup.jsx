import { motion } from "framer-motion";
import { Loader, Lock, Mail, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import ToastNotification from "../components/ToastNotification";
import { useAuthStore } from "../store/AuthStore";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { signup, error, isLoading, resetError } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetError(); // Clear any existing errors
    try {
      const response = await signup(email, password, name);
      if (response) return navigate("/email-verify");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return () => {
      resetError();
    };
  }, [resetError]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          Create Account
        </h2>
        <form>
          <Input
            icon={User}
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            icon={Mail}
            type="email"
            placeholder="Enter your email address"
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

          {error && <ToastNotification error={error} />}

          <PasswordStrengthMeter password={password} />
          <Button
            type="submit"
            disabled={isLoading}
            onClick={handleSubmit}
            text={
              isLoading ? (
                <Loader className="animate-spin mx-auto" />
              ) : (
                "Sign Up"
              )
            }
          />
        </form>
      </div>
      <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
        <p className="text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-green-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Signup;
