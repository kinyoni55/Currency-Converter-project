import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ConverterPage from "./pages/ConverterPage";
import ChartPage from "./pages/ChartPage";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/converter" element={<ConverterPage />} />
        <Route path="/chart" element={<ChartPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

