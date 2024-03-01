import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute"; // Import your ProtectedRoute component

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/* Use ProtectedRoute like a regular Route */}
      <ProtectedRoute path="/dashboard" element={<Dashboard />} />
      <ProtectedRoute path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default App;
