import { BrowserRouter } from "react-router";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import ForgetPassword from "./pages/auth/ForgetPasswordPage";
import ResetPassword from "./pages/auth/ResetPassword";

export default function App () {
  return (
      <>
      <BrowserRouter>
      <LoginPage />
      <SignupPage />
      <ForgetPassword />
      <ResetPassword />
      </BrowserRouter>
      </>
  )
}