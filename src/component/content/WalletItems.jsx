import React from 'react'
import {useNavigate} from "react-router-dom";

function WalletItems(props) {
  const navigate = useNavigate();
  return (
    <div className='items'onClick={()=>navigate(`/WalletDetail/` + props.id)}>
        <div className="icon"></div>
        <p className="wallet-title">Wallet Title</p>
        <p className='amount'>Rp. 999,999,999</p>
    </div>
  )
}

export default WalletItems