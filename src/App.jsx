import {  useEffect, useState } from "react";
import { Routes, Route, useNavigate,  useLocation } from "react-router-dom";

import LandingPage from "./pages/LandingPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";

import LoginForm from "./components/SigninForm.jsx";
import SignupForm from "./components/SignupForm.jsx";
import OtpVerification from "./components/OtpVerification.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx"
import VerifyResetOtp from "./components/VerifyResetOtp.jsx";
import ResetPassword from "./components/ResetPassword.jsx";
import Workspaceactivated from "./components/Workspaceactivated.jsx";

import ProtectedRoute from './components/ProtectedRoute.jsx';

export default function App() {
  const [activeForm, setActiveForm] = useState(null);
  const [otpEmail, setOtpEmail] = useState("");
  const [resetEmail, setResetEmail] = useState('');
  const [resetToken, setResetToken] = useState('');

  const [authMessage, setAuthMessage] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (
      location.state?.openLogin
    ) {
      setActiveForm(
        'login'
      );
      setAuthMessage(
        location.state.message
      );
    }
  }, [location]);


  const closeModal = () => {
    setActiveForm(null);
    setOtpEmail("");
  };

  return (
    <>
      {/* ROUTES SECTION */}
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              onLoginClick={() => setActiveForm("login")}
              onSignupClick={() => setActiveForm("signup")}
              authMessage = {authMessage}
            />
          }
        />

        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/verify-reset-otp" element={<VerifyResetOtp />} />
        <Route path="/workspace-activated" element={<Workspaceactivated />} />

        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
          } />
        </Routes>

      {/* MODAL (outside Routes) */}
      {activeForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-md rounded-3xl bg-white shadow-2xl p-6 animate-scaleIn">

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition text-xl"
            >
              ✕
            </button>

            {activeForm === "login" && (
              <LoginForm
                message = {authMessage}
                switchToSignup={() => setActiveForm("signup")}
                onOtpRequired={(email) => {
                  setOtpEmail(email);
                  setActiveForm("otp");
                }}
              />
            )}

            {activeForm === "signup" && (
              <SignupForm switchToLogin={() => setActiveForm("login")} />
            )}

            {activeForm === "otp" && (
              <OtpVerification email={otpEmail} />
            )}

            {/* Forgot Password */}
            {activeForm === "forgot" && (
              <ForgotPassword
                goToOtp = {(email) => {
                  setResetEmail(
                    email
                  );

                  setActiveForm(
                    "verify-reset"
                  );
                }}
              />
            )}

            {/* Verify Reset OTP */}
            {activeForm === "verify-reset" && (
              <VerifyResetOtp
                email = {
                 resetEmail
                }
                goToReset = {(token) => {
                  setResetToken(
                    token
                  );

                  setActiveForm(
                    "reset-password"
                  );
                }}
              />
            )}

            {/* Reset Password */}
            {activeForm === "reset-password" && (
              <ResetPassword

                resetToken = {
                  resetToken
                }
              />
            )}

          </div>
        </div>
      )}
    </>
  );
}