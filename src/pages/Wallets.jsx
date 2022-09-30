import React, { useEffect } from 'react'
import Navbar from '../component/navbar/Navbar'
import Headbar from '../component/headbar/Headbar'
import WalletItems from '../component/content/WalletItems'

function Wallets() {
  useEffect(() => {
    document.title = "Wallet";  
  }, []);
  
  return (
    <div className='body'>
        <Headbar editTarget="" home="" title="Wallet" edit="none"/>

        <div className="container">

          <div className="card banner content">
            <div className="">
              <p className='title'> My total income</p>
              <p className='amount'>Rp. 999,999,9999</p>
              <div className="mini-info">
                asdasdadasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
              </div>
            </div>
          </div>

          <div className="content">
            <div className="card-title-box">
              <p className="title bold">My wallets</p>
              <select name="" id="" className='dropdown'>
                <option value="Default">Default</option>
              </select>
            </div>
            <div className="items-content">
              <div className="card">
                  <WalletItems id="1"/>
              </div>
              <div className="card">
                  <WalletItems id="2"/>
              </div>
              <div className="card">
                  <WalletItems id="3"/>
              </div>
            </div>
          </div>
        </div>

        <Navbar/> 
    </div>
  )
}

export default Wallets