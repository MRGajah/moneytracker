import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Headbar from '../../component/headbar/Headbar'
import WalletItems from '../../component/content/WalletItems'
function home() {
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

            <div className="card content">
              <div className="context-body">
                <div className="title-box">
                  <p className='title'>My Wallets</p>
                  <p className='link-text'>See all</p>
                </div>
                <div className="dash-line"></div>
                <div className="context-items">
                  <WalletItems/>
                  <WalletItems/>
                  <WalletItems/>
                </div>
              </div>
            </div>

          </div>
        <Navbar/>
    </div>
  )
}

export default home