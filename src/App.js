import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import SearchPage from './SearchPage';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="app">

      <Router>
        <Header />
        <div className="app_page">
          <Sidebar />

          <Routes>
            <Route path='/' element={<RecommendedVideos />} />
            <Route path='/search/:searchTerm' element={<SearchPage />} />
          </Routes>
        </div>
      </Router>



    </div>
  );
}

export default App;
