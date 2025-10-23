import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home.jsx";
import DashboardPage from "./pages/dashboard.jsx";
import CreateCampaign from "./pages/mailSchedule.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/create" element={<CreateCampaign />} />
      </Routes>
    </Router>
  );
}

export default App;
