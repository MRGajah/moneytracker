import React from 'react'
import {useNavigate} from "react-router-dom";

function TransactionItems(props) {
  const navigate = useNavigate();
  return (
    <div className='items' onClick={()=>navigate(`/Transaction/` + props.id)}>
        <div className="icon"></div>
        <div className="transaction-title">
            <p className="title">Category Title</p>
            <p className="date">31 December 2099</p>
        </div>
        <p className='amount'>Rp. 999,999,999</p>
    </div>
  )
}

export default TransactionItems