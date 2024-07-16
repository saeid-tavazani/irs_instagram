import { Routes, Route } from "react-router-dom";
import SignInForm from "./page/auth/forms/signinForm";
import SignUpForm from "./page/auth/forms/signUpForm";
import { Home } from "./page/_root/page";
import AuthLayout from "./page/auth/authLayout";
import RootLayout from "./page/_root/rootLayout";
import { Toaster } from "@/components/ui/toaster";
const App = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />
      </Route>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Toaster />
    </Routes>
  );
};
export default App;
