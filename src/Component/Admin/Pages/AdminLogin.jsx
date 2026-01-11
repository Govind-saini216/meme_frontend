import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ SAME LOGIN LOGIC
    if (email === "Admin123" && password === "Admin123") {
      localStorage.setItem("isAdminLoggedIn", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid Username or Password ❌");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center 
      bg-gradient-to-br from-white/90 to-blue-100/70 font-[Poppins]">

      {/* Card */}
      <div className="w-[350px] px-[30px] py-[40px] rounded-[20px]
        backdrop-blur-[12px] bg-white/65 shadow-[0_8px_25px_rgba(0,0,0,0.1)]
        text-center">

        {/* Title */}
        <h2 className="mb-[25px] text-[#333] font-semibold text-[26px]">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleSubmit}>
          
          {/* Username */}
          <div className="mb-[20px] text-left">
            <label className="block mb-[6px] text-[14px] text-[#555] font-medium">
              Username
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your username"
              className="w-full p-[12px] rounded-[10px] border border-[#ddd]
                text-[14px] bg-white/70 outline-none
                shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]
                focus:border-[#7AA9FF]"
            />
          </div>

          {/* Password */}
          <div className="mb-[20px] text-left">
            <label className="block mb-[6px] text-[14px] text-[#555] font-medium">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="w-full p-[12px] rounded-[10px] border border-[#ddd]
                text-[14px] bg-white/70 outline-none
                shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]
                focus:border-[#7AA9FF]"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-[13px] mb-[15px] text-center">
              {error}
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full p-[12px] rounded-[10px] text-white
              text-[15px] font-semibold
              bg-gradient-to-br from-[#7AA9FF] to-[#A7C8FF]
              shadow-[0_4px_10px_rgba(122,169,255,0.3)]
              transition-all duration-300
              hover:shadow-[0_6px_15px_rgba(122,169,255,0.5)]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
