import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Modal from './components/Modal';
import Profile from './pages/Profile';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="modal" element={<Modal/>} />
      <Route path="profile" element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
