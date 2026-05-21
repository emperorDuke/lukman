import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import AdminPage from "@/react-app/pages/Admin";
import BookPage from "@/react-app/pages/Book";
import SponsorPage from "@/react-app/pages/Sponsor";
import ServicesPage from "@/react-app/pages/Services";
import ArticlesPage from "@/react-app/pages/Articles";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/sponsor" element={<SponsorPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
      </Routes>
    </Router>
  );
}
