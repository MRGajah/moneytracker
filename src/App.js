import logo from './logo.svg';
import { Route, Routes } from "react-router-dom"
import Home from './pages/home/Home';
import './styles/style.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<Home/>}/>
    </Routes>
  );
}

export default App;
