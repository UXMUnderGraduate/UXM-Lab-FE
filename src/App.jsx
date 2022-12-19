import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Members from './pages/Members';
import Publications from './pages/Publications';
import Notices from './pages/Notices';
import NoticeDetail from './pages/NoticeDetail';
import Gallery from './pages/Gallery';
import GalleryDetail from './pages/GalleryDetail';
import { useEffect } from 'react';
import Research from './pages/Research';
import Bugger from './components/layout/Bugger';

var vh = 0;

function App() {
  useEffect(() => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/research" element={<Research />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/notices/:id" element={<NoticeDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:id" element={<GalleryDetail />} />
        <Route path="/test" element={<Bugger />} />
      </Routes>
    </Layout>
  );
}

export default App;
