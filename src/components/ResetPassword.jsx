import { useState } from "react";
import { resetPassword } from "../services/authApi.js";
import { useNavigate } from "react-router-dom";

export default function ResetPassword({resetToken,}) {

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        setError("");

        if (
          newPassword !==
          confirmPassword
        ) {
          throw new Error(
            "Passwords do not match"
          );
        }

        await resetPassword({
          resetToken,
          newPassword,
        });

        alert(
          "Password Updated"
        );

        navigate("/");

      } catch (error) {
        setError(
          error.message
        );
      }
    };


  return (

    <div
      className="
      bg-slate-900
      rounded-3xl
      p-8
      shadow-2xl
      border
      border-cyan-500/20
      backdrop-blur-md
      "
    >

      {/* Header */}

      <h1
        className="
        text-3xl
        font-bold
        text-cyan-400
        mb-2
        "
      >
        Create New Password
      </h1>

      <p
        className="
        text-gray-400
        mb-6
        "
      >
        Create and confirm your new password.
      </p>


      {/* Error */}

      {error && (

        <div
          className="
          bg-red-500/20
          border
          border-red-500/30
          text-red-300
          p-4
          rounded-xl
          mb-5
          "
        >
          {error}
        </div>

      )}


      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="
        space-y-5
        "
      >

        <input

          type="password"

          placeholder="New Password"

          value={
            newPassword
          }

          onChange={(e) =>
            setNewPassword(
              e.target.value
            )
          }

          className="
          w-full
          p-4
          rounded-2xl
          bg-black/30
          border
          border-white/10
          focus:outline-none
          focus:border-cyan-400
          focus:ring-2
          focus:ring-cyan-400/20
          transition
          "
        />


        <input

          type="password"

          placeholder="Confirm Password"

          value={
            confirmPassword
          }

          onChange={(e) =>
            setConfirmPassword(
              e.target.value
            )
          }

          className="
          w-full
          p-4
          rounded-2xl
          bg-black/30
          border
          border-white/10
          focus:outline-none
          focus:border-cyan-400
          focus:ring-2
          focus:ring-cyan-400/20
          transition
          "
        />


        <button

          type="submit"

          className="
          w-full
          bg-cyan-400
          text-black
          py-4
          rounded-2xl
          font-bold
          hover:scale-105
          hover:shadow-lg
          transition
          "

        >

          Reset Password

        </button>

      </form>

    </div>

  );

}