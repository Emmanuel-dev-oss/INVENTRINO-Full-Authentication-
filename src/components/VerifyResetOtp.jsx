import { useState } from "react";
import { verifyResetOtp } from "../services/authApi.js";

export default function VerifyResetOtp({email, goToReset,}) {

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        setLoading(true);
        setError("");

        const data = await verifyResetOtp({
            email,
            otp,
        });

        goToReset(
          data.resetToken
        );

      } catch (error) {
        setError(
          error.message
        );
      } finally {
        setLoading(false);
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
        Verify OTP
      </h1>

      <p
        className="
        text-gray-400
        mb-6
        "
      >
        Enter the verification code sent to your email.
      </p>


      {/* Error Message */}

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

          value={otp}

          onChange={(e) =>
            setOtp(
              e.target.value
            )
          }

          placeholder="Enter OTP"

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

          disabled={loading}

          className="
          w-full
          bg-cyan-400
          text-black
          py-4
          rounded-2xl
          font-bold
          hover:scale-105
          hover:shadow-lg
          disabled:opacity-50
          disabled:cursor-not-allowed
          transition
          "

        >

          {
            loading
              ? "Verifying..."
              : "Verify OTP"
          }

        </button>

      </form>

    </div>

  );

}