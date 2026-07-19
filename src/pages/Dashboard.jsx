// import { useEffect } from "react";

import { useNavigate } from 'react-router-dom';

import { isAuthenticated, logout } from '../utils/auth.js';

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  // Authentication check on app load
  // useEffect(() => {
  //   const checkAuth = () => {
  //     if (!isAuthenticated()) {
  //       logout();
  //       navigate("/", { replace: true });
  //     }
  //   };

  //   checkAuth();
  // }, [navigate]);

  const handleLogout = () => { 
    logout (); 
    navigate('/');
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-6 md:p-10">

      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-cyan-400 tracking-tight">
          INVENTRINO
        </h1>

        <p className="text-slate-400 mt-2">
          Inventory Management Dashboard
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* User Card */}
        <div className="md:col-span-2 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">

          <h2 className="text-xl font-semibold text-white mb-6">
            User Profile
          </h2>

          <button onClick = { handleLogout } className="bg-red-500 px-5 py-3 rounded-xl mb-8"> Logout </button>

          <div className="space-y-4 text-slate-300">

            <div className="flex justify-between border-b border-white/5 pb-3">
              <span className="text-slate-400">Name</span>
              <span className="font-medium text-white">
                {user?.fullName || "N/A"}
              </span>
            </div>

            <div className="flex justify-between border-b border-white/5 pb-3">
              <span className="text-slate-400">Email</span>
              <span className="font-medium text-white">
                {user?.email || "N/A"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">Role</span>
              <span className="inline-flex px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium">
                {user?.role || "User"}
              </span>
            </div>

          </div>
        </div>

        {/* Stats Card */}
        <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">

          <h3 className="text-lg font-semibold mb-4">
            Quick Stats
          </h3>

          <div className="space-y-4">

            <div className="p-4 rounded-2xl bg-white/5">
              <p className="text-slate-400 text-sm">Status</p>
              <p className="text-green-400 font-semibold">
                Active
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5">
              <p className="text-slate-400 text-sm">Access Level</p>
              <p className="text-cyan-400 font-semibold">
                {user?.role === "admin" ? "Full Access" : "Limited Access"}
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}