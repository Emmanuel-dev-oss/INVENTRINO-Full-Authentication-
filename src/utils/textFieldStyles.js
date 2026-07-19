export const textFieldStyles = {
  "& .MuiOutlinedInput-root": {
    color: "#FFFFFF",
    backgroundColor: "rgba(255,255,255,0.03)",
    borderRadius: "16px",

    "& fieldset": {
      borderColor: "rgba(255,255,255,0.08)",
    },

    "&:hover fieldset": {
      borderColor: "#34D399",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#10B981",
      borderWidth: "2px",
    },
  },

  "& .MuiInputLabel-root": {
    color: "#94A3B8",
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: "#34D399",
  },

  "& .MuiOutlinedInput-input::placeholder": {
    color: "#64748B",
    opacity: 1,
  },
};