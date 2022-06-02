import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Watched from './components/Watched/Watched';
import FavoriteList from './components/FavoriteList/FavoriteList';
import Add from './components/Add/Add';
import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <div className="app__container">
      <GlobalProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<FavoriteList />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/add" element={<Add />} />
      </Routes>
      </GlobalProvider>
    </div>
  );
}

export default App;
