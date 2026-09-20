import { useState, type BaseSyntheticEvent } from "react"



export default function LoginPage () {

  const [formData, setFormData] = useState({
    username: '', password: ''
  })

  const [isSubmitting, SetIsSubmitting] = useState(false)

  const handleLoginSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault()
    SetIsSubmitting(true)
  }

  const handleInputChange = (e: BaseSyntheticEvent) => {
    const {name, value} = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const pageTitle = "Login"
  const pageSubTitle = "Enter the registered email and password below."
  return (
    <>
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md bg-gray-200 rounded-lg shadow-lg p-4">
        <div className="flex justify-center items-center">
          <img src="/Kharcha_logo.png" alt="" className="size-25"/>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-full mb-6">
          <h1 className="font-semibold text-5xl">{pageTitle}</h1>
          <p className="italic text-sm">{pageSubTitle}</p>
        </div>
        <form onSubmit={handleLoginSubmit} className="w-full flex flex-col py-5 gap-5">
          <div className="w-full flex items-center">
            <label htmlFor="username" className="w-1/4 font-semibold text-lg">
            Username:
            </label>
            <div className="flex flex-col w-3/4">
              <input type="text" name="username" id="username" value={formData.username} onChange={handleInputChange} className="w-full border border-gray-400 focus:ring-2 focus:ring-teal-500 rounded-lg p-2 outline-none "/>
            </div>
          </div>

          <div className="w-full flex items-center">
            <label htmlFor="password" className="w-1/4 font-semibold text-lg">
            Password:
            </label>
            <div className="w-3/4 flex flex-col ">
              <input type="password" name="password" id="password" value={formData.password} onChange={handleInputChange} className="w-full border border-gray-400 focus:ring-2 focus:ring-teal-500 rounded-lg p-2 outline-none"/>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="w-full">
              <p className="text-gray-600 italic text-sm">
                By signing in, you are agree with 
                <a href="privacy-policy" className="text-teal-600 underline"> Privacy Policy</a> and 
                <a href="terms-and-conditions" className="text-teal-600 underline"> Terms and Conditions</a>
              </p>
            </div>
            <a href="" className="text-sm italic text-teal-600 underline hover:text-green-700 hover:scale-103 whitespace-nowrap transition  duration-300">Forget-Password</a>
          </div>
          
          <div className="flex justify-center  mt-2">
            <button type="submit" disabled={isSubmitting} className="px-5 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white cursor-pointer transition duration-300" >Submit</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}