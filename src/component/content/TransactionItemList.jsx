import React from 'react'

function TransactionItemList(props) {
  return (
    <div className='items'>
      <div className="flex-container">
        <p style={{marginRight : "8px"}}>&#9900;</p>
        <p className="title">{props.title}</p>
        <p className="amount right-content">Rp. {props.amount}</p>
      </div>
    </div>
  )
}

export default TransactionItemList