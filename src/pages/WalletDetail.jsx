import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Headbar from '../component/headbar/Headbar'
import TransactionItems from '../component/content/TransactionItems'


import people from '../asstes/icons/people.png'
import arrow from '../asstes/icons/arrow.png'

function WalletDetail() {
  return (
    <div className='body'>
        <Headbar editTarget="" home="" title="Wallet detail" edit=""/>

        <div className="container">

          <div className="card content banner-wallet-info">
            <div className="context">
              <div className="flex-container">
                <div className="title">
                  <p className='balance-title'>Balance</p>
                  <p className='balance-amount'>Rp. 999,999,999</p>
                </div>
                <div className="right-content">
                  <div className="icon icon-wallet-detail">
                    {/* <img src={people} className= "icon-wallet-detail" alt="" /> */}
                  </div>  
                </div> 
              </div>
              <p className='info-title'>Total</p>
              <div className="flex-container">
                <div className="content">
                  <div className="flex-container">
                    <div className="icon-rounded icon-category">
                      <img src={arrow} className= "icon-category" alt="" />
                    </div>
                    <div className="category-value">
                      <p>Income</p>
                      <p className='income-amount'>Rp. 999,999,999</p>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <div className="flex-container">
                    <div className="icon-rounded icon-category">
                      <img src={arrow} className= "icon-category up" alt="" />
                    </div>
                    <div className="category-value">
                      <p>Income</p>
                      <p className='expense-amount'>Rp. 999,999,999</p>
                    </div>
                  </div> 
                </div> 
              </div>
            </div>
          </div>

          <div className="content">
            <div className="flex-container gap8">
              <div className="card-info text"> Description </div>
              <div className="card-info fit-content icon-card-info"> 
                <div className="icon icon-info">
                  <img src={people} className= "icon-info" alt="" />
                </div>
              </div>
            </div>

            <div className="flex-container gap8" style={{marginTop : "8px"}}>
              <div className="card-info text"> Saving </div>
              <div className="card-info fit-content text"> 
                <select name="" id="" className='dropdown'>
                  <option value="Januari">Januari</option>
                  <option value="Febuary">Febuary</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </div>
              <div className="card-info fit-content text"> 
                <select name="" id="" className='dropdown'>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                </select>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="card-title-box">
              <p className="title bold">My wallets</p>
              <select name="" id="" className='dropdown'>
                <option value="Default">Default</option>
                <option value="Oldest Transaction">Oldest Transaction</option>
                <option value="Lowest Amount">Lowest Amount</option>
                <option value="Highest Amount">Highest Amount</option>
                <option value="Category">Category</option>
              </select>
            </div>
            <div className="items-content">
              <div className="card">
                  <TransactionItems id="1" categoryColor="#38B9A9"/>
              </div>
              <div className="card">
                  <TransactionItems id="2" categoryColor="#38B9A9"/>
              </div>
              <div className="card">
                  <TransactionItems id="3" categoryColor="#38B9A9"/>
              </div>
            </div>
          </div>
        </div>

        <Navbar/> 
    </div>
  )
}

export default WalletDetail