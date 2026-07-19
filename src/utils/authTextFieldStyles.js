export const authTextFieldStyles = {
  "& .MuiOutlinedInput-root": {
    color: "#0F172A", // Dark text
    backgroundColor: "#FFFFFF",
    borderRadius: "14px",

    "& fieldset": {
      borderColor: "#E2E8F0",
      borderWidth: "1px",
    },

    "&:hover fieldset": {
      borderColor: "#34D399",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#10B981",
      borderWidth: "2px",
    },

    "&.Mui-focused": {
      boxShadow: "0 0 0 4px rgba(16, 185, 129, 0.12)",
    },
  },

  "& .MuiInputLabel-root": {
    color: "#64748B",
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: "#10B981",
  },

  "& .MuiOutlinedInput-input::placeholder": {
    color: "#94A3B8",
    opacity: 1,
  },
};