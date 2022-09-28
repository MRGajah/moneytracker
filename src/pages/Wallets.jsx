import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Headbar from '../component/headbar/Headbar'
import WalletItems from '../component/content/WalletItems'
import {Link} from "react-router-dom";

function Wallets() {
  return (
    <div className='body'>
        <Headbar/>

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
                <Link to="/WalletDetail" className="link-text">
                    <div className="card">
                        <WalletItems/>
                    </div>
                </Link>
                <Link to="/WalletDetail" className="link-text">
                    <div className="card">
                        <WalletItems/>
                    </div>
                </Link>
                <Link to="/WalletDetail" className="link-text">
                    <div className="card">
                        <WalletItems/>
                    </div>
                </Link>
            </div>
          </div>
        </div>

        <Navbar/> 
    </div>
  )
}

export default Wallets