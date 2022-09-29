import { Route, Routes } from "react-router-dom"
import Home from './pages/home/Home';
import './styles/style.css';
import Wallets from "./pages/Wallets";
import Reports from "./pages/Reports";
import WalletDetail from "./pages/WalletDetail";
import Transaction from "./pages/Transaction";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<Home/>}/>
      <Route path='/Wallets' element={<Wallets/>}/>
      <Route path='/Reports' element={<Reports/>}/>
      <Route path='/WalletDetail' element={<WalletDetail/>}/>
      <Route path='/Transaction' element={<Transaction/>}/>
    </Routes>
  );
}

export default App;
