import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import ConverterPage from "./pages/ConverterPage";
import ChartPage from "./pages/ChartPage";
import NewsPage from "./pages/NewsPage";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import NewsDetails from "./pages/NewsDetails";

function App() {
  return (
    <div className="flex-grow">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/converter" element={<ConverterPage />} />
        <Route path="/chart" element={<ChartPage />} />
        <Route path="/newspage" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
