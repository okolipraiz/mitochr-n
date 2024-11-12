import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Dashboard from "./pages/dashboard";
import BudgetRoom from "./pages/dashboard/budget";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/budget" element={<BudgetRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
