import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Headbar from '../component/headbar/Headbar'
import TransactionItemList from '../component/content/TransactionItemList'


function Transaction(props) {
  return (
    <div className='body'>
        <Headbar editTarget="" home="" title="Transaction" edit=""/>

        <div className="container">

          <div className="card content transaction-info">
            <div className="context">

              <div className="flex-container headbar-transaction">
                <div className="">
                  <p className='title' style={{color: props.categoryColor}}>Category Name</p>
                </div>
                <div className="right-content">
                  <p>31 December 9999</p>
                </div> 
              </div>

              <div className="dash-line dash-line-transaction"></div>

              <div className="flex-container">
                <div className="title">
                  <p className='balance-title'>Total income</p>
                  <p className='balance-amount'>Rp. 999,999,999</p>
                </div>
                <div className="right-content">
                  <div className="icon-rounded icon-wallet-detail">
                    {/* <img src={people} className= "icon-wallet-detail" alt="" /> */}
                  </div>  
                </div> 
              </div>

              <div className="card-note">
                <p>Note</p>
              </div>

              <div className="dash-line dash-line-transaction"></div>
              
              <div className="flex-container headbar-transaction">
                <div className="">
                  <p className='title'>Item</p>
                </div>
              </div>

              <div className="transaction-items">
                <TransactionItemList title="Expense title" amount="999,999,999"/>
                <TransactionItemList title="Expense title" amount="999,999,999"/>
              </div>


            </div>
          </div>

        </div>

        <Navbar/> 
    </div>
  )
}

export default Transaction