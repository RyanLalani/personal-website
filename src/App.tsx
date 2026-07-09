import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import SidequestsPage from './pages/SidequestsPage';
import PlayPage from './pages/PlayPage';

export default function App() {
  return (
    <div className="bg-white text-neutral-900">
      <Nav />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/sidequests" element={<SidequestsPage />} />
        <Route path="/play" element={<PlayPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
