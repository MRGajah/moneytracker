import { Route, Routes } from "react-router-dom"
import Home from './pages/home/Home';
import Navbar from './component/navbar/Navbar'
import './styles/style.css';
import Wallets from "./pages/Wallets";
import Reports from "./pages/Reports";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<Home/>}/>
      <Route path='/Wallets' element={<Wallets/>}/>
      <Route path='/Reports' element={<Reports/>}/>
      {/* <Navbar/> */}
    </Routes>
  );
}

export default App;
