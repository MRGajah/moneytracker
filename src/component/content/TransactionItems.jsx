import React from 'react'

function TransactionItems() {
  return (
    <div className='items'>
        <div className="icon"></div>
        <div className="transaction-title">
            <p className="title">Category Title <span>(Plant Title)</span></p>
            <p className="date">31 December 2099</p>
        </div>
        <p className='amount'>Rp. 999,999,999</p>
    </div>
  )
}

export default TransactionItems