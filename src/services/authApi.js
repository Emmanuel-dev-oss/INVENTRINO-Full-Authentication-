const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// LOGIN USER
export const loginUser = async (userData) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/auth/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || 'Login failed'
      );
    }

    return data;
  } catch (error) {
    throw error;
  }
};

// SIGNUP USER
export const signupUser = async (userData) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/auth/register`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        credentials: "include",

        body: JSON.stringify(userData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || 'Signup failed'
      );
    }

    return data;
  } catch (error) {
    throw error;
  }
};

// VERIFY OTP
export const verifyOtp = async (otp) => {
  const response = await fetch(
    `${API_BASE_URL}/auth/verify-otp`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      credentials: "include",

      body: JSON.stringify({
        otp,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to verify OTP."
    );
  }

  return data;
};

// GET VERIFICATION SESSION
export const getVerificationSession = async () => {

    const verificationToken = sessionStorage.getItem(
      "verificationToken"
    );

    const response = await fetch(
      `${API_BASE_URL}/auth/verification-session`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${verificationToken}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Unable to load verification session."
      );
    }
    return data;
  };

  
// RESEND OTP
export const resendOtp = async () => {
  const verificationToken = sessionStorage.getItem("verificationToken");

  const response = await fetch(
    `${API_BASE_URL}/auth/resend-otp`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${verificationToken}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to resend OTP"
    );
  }
  return data;
};

// FORGOT PASSWORD
export const forgotPassword = async (email) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/auth/forgot-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email,}),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message
      );
    }
    return data;
  } catch (error) {
    throw error;
  }
};

// VERIFY RESET OTP
export const verifyResetOtp = async (dataInput) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/auth/verify-reset-otp`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataInput),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message
      );
    }

    return data;   
  } catch (error) {
    throw error;
  }
};

export const resetPassword = async (dataInput) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/auth/reset-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataInput),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message
      );
    }

    return data;
  } catch (error) {
    throw error;
  }  
};

// GOOGLE SIGNUP
export const googleSignup = async (googleToken) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/auth/google-signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ token: googleToken }),
      }
    );
 
    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Google signup failed"
      );
    }

    return data;
  } catch (error) {
    throw error;
  }
};