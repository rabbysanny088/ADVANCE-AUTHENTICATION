import { motion } from "framer-motion";

const Button = ({ text, disabled, ...props }) => {
  return (
    <motion.button
      type="submit"
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`mt-5 w-full py-3 px-4 bg-gradient-to-r 
       from-green-500 to-emerald-600 text-white
        font-bold rounded-lg shadow-lg hover:from-green-600
         hover:to-emerald-700 focus:outline-none focus:ring-2
          focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-500
           transition duration-200 text-center cursor-pointer ${
             disabled ? "opacity-50 cursor-not-allowed" : ""
           }`}
      {...props}
    >
      {text}
    </motion.button>
  );
};

export default Button;
