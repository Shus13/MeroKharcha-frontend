import { useState, type BaseSyntheticEvent } from "react";
import { Link } from "react-router";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const pageTitle = "Login";
  const pageSubtitle = "Sign in to continue to your account";

  const handleInputChange = (e: BaseSyntheticEvent) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLoginSubmit = async (e: BaseSyntheticEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      console.log("Login Data:", formData);

      // Add your login API call here
      // Example:
      // const response = await axios.post("/api/auth/login", formData);
    } catch (error) {
      console.error("Login Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      username: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 p-5">
      <div className="w-full max-w-md bg-gray-200 rounded-xl shadow-lg p-8">
        <div className="flex justify-center items-center">
          <img src="/Kharcha_logo.png" alt="" className=" size-25 flex justify-center items-center"/>
        </div>
        {/* Page Header */}
        <div className="flex flex-col gap-4 justify-center items-center w-full mb-6">
          <h1 className="text-3xl font-semibold text-blue-950">{pageTitle}</h1>

          <p className="text-xs italic font-light">{pageSubtitle}</p>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleLoginSubmit}
          className="w-full flex flex-col gap-5 py-5"
        >
          {/* Username */}
          <div className="w-full flex items-center">
            <label htmlFor="username" className="w-1/4 font-semibold text-lg">
              Username:
            </label>

            <div className="w-3/4 flex flex-col">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          {/* Password */}
          <div className="w-full flex items-center">
            <label htmlFor="password" className="w-1/4 font-semibold text-lg">
              Password:
            </label>

            <div className="w-3/4 flex flex-col">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          {/* Privacy + Forgot Password */}
          <div className="w-full flex items-center justify-between gap-4">
            <div className="w-full">
              <p className="text-xs text-gray-600">
                By signing in, you agree with{" "}
                <Link to="/privacy-policy" className="text-teal-600 underline">
                  Privacy Policy
                </Link>{" "}
                &{" "}
                <Link
                  to="/terms-and-conditions"
                  className="text-teal-600 underline"
                >
                  Terms and Conditions
                </Link>
              </p>
            </div>

            <Link
              to="/forget-password"
              className="text-sm italic text-teal-600 underline hover:scale-103 transition duration-300 whitespace-nowrap"
            >
              Forgot Password
            </Link>
          </div>

          {/* Buttons */}
          <div className="w-full flex justify-center mt-2">

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white transition duration-300 disabled:opacity-50"
            >
              {isSubmitting ? "Signing In..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
