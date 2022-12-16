import { Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import Home from './pages/Home';
import Members from './pages/Members';
import Studies from './pages/Studies';
import Publications from './pages/Publications';
import News from './pages/News';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/members' element={<Members />} />
        <Route path='/studies' element={<Studies />} />
        <Route path='/publications' element={<Publications />} />
        <Route path='/news' element={<News />} />
      </Routes>
    </Layout>
  );
}

export default App;
