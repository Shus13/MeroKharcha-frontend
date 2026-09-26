export default function ResetPassword() {
  const pageTitle = "Reset Password";
  const pageSubTitle = "Please enter your passwords.";
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="w-full max-w-md bg-gray-200 rounded-md shadow-lg p-4">
          <div className="flex justify-center items-center">
            <img src="/Kharcha_logo.png" alt="" className="size-25" />
          </div>

          <div className="flex flex-col items-center gap-4 w-full mb-6">
            <h1 className="font-semibold text-4xl">{pageTitle}</h1>
            <p className="italic text-sm">{pageSubTitle}</p>
          </div>

          <form action="" className="w-full flex flex-col p-5 gap-5">
            <div className="w-full flex items-center">
              <label htmlFor="name" className="w-3/5 font-semibold text-lg">
                Old Password:
              </label>
              <div className="w-3/4 flex flex-col">
                <input
                  type="text"
                  name="oldPassword"
                  id="oldPassword"
                  className="w-full border border-gray-400 rounded-lg p-2 focus:ring-2 focus:ring-teal-600 outline-none"
                />
              </div>
            </div>

            <div className="w-full flex items-center">
              <label htmlFor="name" className="w-3/5 font-semibold text-lg">
                New Password:
              </label>
              <div className="w-3/4 flex flex-col">
                <input
                  type="text"
                  name="newPassword"
                  id="newPassword"
                  className="w-full border border-gray-400 rounded-lg p-2 focus:ring-2 focus:ring-teal-600 outline-none"
                />
              </div>
            </div>

            <div className="w-full flex items-center">
              <label htmlFor="name" className="w-3/5 font-semibold text-lg">
                Confirm Password:
              </label>
              <div className="w-3/4 flex flex-col">
                <input
                  type="text"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="w-full border border-gray-400 rounded-lg p-2 focus:ring-2 focus:ring-teal-600 outline-none"
                />
              </div>
            </div>

            
            <div className="flex justify-center  mt-2">
              <button
                type="submit"
                className="px-5 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white cursor-pointer transition duration-300"
              >
                Submit
              </button>
            </div>

            
          </form>
        </div>
      </div>
    </>
  );
}
