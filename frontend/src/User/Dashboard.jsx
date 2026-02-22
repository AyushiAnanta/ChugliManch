import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../api/auth";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios";

const Dashboard = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      // 🔥 WAIT for cookies to be written to browser
      await new Promise((resolve) => setTimeout(resolve, 200));

      try {
        const res = await getCurrentUser();
        setUser(res.data.data); // correct APIResponse structure
        localStorage.setItem("user", JSON.stringify(res.data.data));
      } catch (err) {
        navigate("/login"); // not authenticated
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [navigate]);

  const handleLogout = async () => {
    await axiosInstance.post("/auth/logout");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-xl font-semibold text-gray-600">
        Loading Dashboard...
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-xl border border-gray-200">

        <h1 className="text-3xl font-bold text-gray-800">
          Welcome, {user?.name || user?.username}! 👋
        </h1>

        <p className="text-gray-500 mt-2">You are successfully logged in.</p>

        <div className="mt-6 p-6 rounded-xl bg-gray-50 border border-gray-200 shadow-md flex gap-4 items-center">
          <img
            src={user?.avatar || "https://i.pravatar.cc/100"}
            alt="avatar"
            className="w-20 h-20 rounded-full border"
          />

          <div>
            <h2 className="text-xl font-semibold text-gray-700">
              {user?.name}
            </h2>
            <p className="text-gray-500">{user?.email}</p>
            <p className="text-sm text-gray-400 mt-1">
              Logged in using {user?.oauthProvider || "password"} login
            </p>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <button
            onClick={() => navigate("/profile")}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            View Profile
          </button>

          <button
            onClick={handleLogout}
            className="px-6 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
