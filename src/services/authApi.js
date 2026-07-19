const BASE_URL = 'http://localhost:5000/api/users';

// LOGIN USER
export const loginUser = async (userData) => {
  try {
    const response = await fetch(
      `${BASE_URL}/login`,
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
      `${BASE_URL}/register`,
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
        data.message || 'Signup failed'
      );
    }

    return data;
  } catch (error) {
    throw error;
  }
};

// VERIFY OTP
export const verifyOtp = async (otpData) => {
  try {
    const response = await fetch(
      `${BASE_URL}/verify-otp`,
      {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(otpData)
      }
    )

    const data = await response.json()

    if (!response.ok) {
      throw new Error(
        data.message || 'OTP failed'
      )
    }
    return data
  } catch (error) {
    throw error;
  }
}

// FORGOT PASSWORD
export const forgotPassword = async (email) => {
  try {
    const response = await fetch(
      `${BASE_URL}/forgot-password`,
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
      `${BASE_URL}/verify-reset-otp`,
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
      `${BASE_URL}/reset-password`,
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