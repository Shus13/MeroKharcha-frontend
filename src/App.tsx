import { BrowserRouter } from "react-router";
import LoginPage from "./pages/auth/LoginPage";

export default function App () {
  return (
      <>
      <BrowserRouter>
      <LoginPage />
      </BrowserRouter>
      </>
  )
}