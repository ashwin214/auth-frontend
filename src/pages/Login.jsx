import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl grid md:grid-cols-2 bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="hidden md:flex flex-col justify-center bg-blue-50 p-12">
          <div className="text-blue-600 text-5xl mb-6">🔐</div>

          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Welcome
            <br />
            Back
          </h1>

          <div className="w-16 h-1 bg-blue-600 my-6"></div>

          <p className="text-gray-600 text-lg leading-8 max-w-sm">
            Login to your account and continue where you left off.
          </p>
        </div>

        <div className="p-8 md:p-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Login</h2>

            <p className="text-gray-500 mt-2">
              Enter your details to access your account
            </p>
          </div>

          <form className="space-y-5">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 outline-none focus:border-blue-600"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            <div className="text-right">
              <button
                type="button"
                className="text-blue-600 text-sm font-medium hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Login
            </button>
          </form>

          <div className="flex items-center gap-4 my-7">
            <div className="flex-1 h-px bg-gray-300"></div>

            <span className="text-gray-500">or</span>

            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <p className="text-center text-gray-600">
            Don't have an account?
            <Link
              to="/register"
              className="ml-2 text-blue-600 font-semibold hover:underline"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
