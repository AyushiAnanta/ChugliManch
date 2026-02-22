import { BrowserRouter, Routes, Route } from "react-router-dom";

import Authentication from "./Authentication/Authenticate";
import Dashboard from "./User/Dashboard";
import Profile from "./User/Profile";
import Status from "./User/Status";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🔐 Login / Signup */}
        <Route path="/" element={<Authentication />} />
        <Route path="/login" element={<Authentication />} />
        <Route path="/signup" element={<Authentication />} />

        {/* 🔒 Dashboard (Protected inside component) */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* 🔒 Nested Dashboard Pages */}
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/status" element={<Status />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
