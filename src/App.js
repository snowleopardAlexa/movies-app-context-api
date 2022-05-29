import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import FavoriteList from './components/FavoriteList';
import Add from './components/Add/Add';
import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <div className="app__container">
      <GlobalProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritelist" element={<FavoriteList />} />
        <Route path="/add" element={<Add />} />
      </Routes>
      </GlobalProvider>
    </div>
  );
}

export default App;
