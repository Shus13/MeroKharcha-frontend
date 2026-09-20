import { BrowserRouter } from "react-router";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";

export default function App () {
  return (
      <>
      <BrowserRouter>
      <LoginPage />
      <SignupPage />
      </BrowserRouter>
      </>
  )
}