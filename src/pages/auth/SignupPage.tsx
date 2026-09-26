export default function SignupPage() {
  const pageTitle = "Signup";
  const pageSubTitle = "Please enter the details below.";
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="w-full max-w-md bg-gray-200 rounded-md shadow-lg p-4">
          <div className="flex justify-center items-center">
            <img src="/Kharcha_logo.png" alt="" className="size-25" />
          </div>

          <div className="flex flex-col items-center gap-4 w-full mb-6">
            <h1 className="font-semibold text-5xl">{pageTitle}</h1>
            <p className="italic text-sm">{pageSubTitle}</p>
          </div>

          <form action="" className="w-full flex flex-col py-5 gap-5">
            <div className="w-full flex items-center">
              <label htmlFor="name" className="w-1/4 font-semibold text-lg">
                Name:
              </label>
              <div className="w-3/4 flex flex-col">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full border border-gray-400 rounded-lg p-2 focus:ring-2 focus:ring-teal-600 outline-none"
                />
              </div>
            </div>

            <div className="w-full flex items-center">
              <label htmlFor="email" className="w-1/4 font-semibold text-lg">
                Email:
              </label>
              <div className="w-3/4 flex flex-col">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full border border-gray-400 rounded-lg focus:ring-2 focus:ring-teal-600 p-2 outline-none"
                />
              </div>
            </div>

            <div className="w-full flex items-center">
              <label htmlFor="phone" className="w-1/4 font-semibold text-lg">
                Phone:
              </label>
              <div className="w-3/4 flex flex-col">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="w-full border border-gray-400 rounded-lg focus:ring-2 focus:ring-teal-600 p-2 outline-none"
                />
              </div>
            </div>

            <div className="w-full flex items-center">
              <label htmlFor="password" className="w-1/4 font-semibold text-lg">
                Password:
              </label>
              <div className="w-3/4 flex flex-col">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full border border-gray-400 rounded-lg focus:ring-2 focus:ring-teal-600 p-2 outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <div className="w-full">
                <p className="text-gray-600 italic text-sm">
                  By signing up, you are agree with
                  <a href="privacy-policy" className="text-teal-600 underline">
                    {" "}
                    Privacy Policy
                  </a>{" "}
                  and
                  <a
                    href="terms-and-conditions"
                    className="text-teal-600 underline"
                  >
                    {" "}
                    Terms and Conditions
                  </a>
                </p>
              </div>
            </div>

            <div className="flex justify-center  mt-2">
              <button
                type="submit"
                className="px-5 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white cursor-pointer transition duration-300"
              >
                SignUp
              </button>
            </div>

            <div className="flex justify-center">
              <p className="text-sm italic">
                Already have an account?
                <a href="/login" className="text-teal-600 underline">
                  {" "}
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
