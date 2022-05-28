import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import FavoriteList from './components/FavoriteList';
import Add from './components/Add';

function App() {
  return (
    <div className="app__container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<FavoriteList />} />
        <Route path="/" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
