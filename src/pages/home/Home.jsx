import React, { useEffect } from 'react'
import Navbar from '../../component/navbar/Navbar'
import Headbar from '../../component/headbar/Headbar'
import WalletItems from '../../component/content/WalletItems'
import TransactionItems from '../../component/content/TransactionItems'
import {useNavigate} from "react-router-dom";
function Home() {

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Home";  
    backButton();
  }, []);

  const backButton = () => {
  }

  return (
    <div className='body'>
        <Headbar editTarget="" home="none" title="Home" edit="none"/>

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
                <p onClick={()=>navigate(`/Wallets`)} className="link-text">See all</p> 
              </div>
              <div className="dash-line"></div>
              <div className="context-items home">
                <WalletItems id="1"/>
                <WalletItems id="2"/>
                <WalletItems id="3"/>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="card-title-box">
              <p className="title">Last transaction</p>
            </div>
            <div className="card">
              <TransactionItems/>
            </div>
          </div>

          <div className="content">
            <div className="card-title-box">
              <p className="title">Trail Report</p>
              <p onClick={()=>navigate(`/Reports`)} className="link-text">See detaill</p>
              {/* <p className="link-text">See detail</p> */}
            </div>
            <div className="card">
              <div className="context-body">
                <div className="group">
                  <div className="items-group">
                    <div className="rounded-icon active"></div>
                    <div className="rounded-icon"></div>
                    <div className="rounded-icon"></div>
                    <div className="rounded-icon"></div>
                    <div className="rounded-icon"></div>
                    <div className="rounded-icon"></div>
                    <div className="rounded-icon"></div>
                    <div className="rounded-icon"></div>
                    <div className="rounded-icon"></div>
                    <div className="rounded-icon"></div>
                    <div className="rounded-icon"></div>
                    <div className="rounded-icon"></div>
                    <div className="rounded-icon"></div>
                    <div className="rounded-icon"></div>
                    <div className="rounded-icon"></div>
                    <div className="rounded-icon"></div>
                  </div>
                </div>
                <div className="title-box">
                  <p className='title'>My Wallets</p>
                  {/* <p className='link-text'>See all</p> */}
                </div>
                <div className="graph-content">
                  <div className="graph-legend">
                    <div className="income">
                      <p className='title'>Income</p>
                      <p>Rp. 999,999,999</p>
                    </div>
                    <div className="expense">
                      <p className='title'>Expense</p>
                      <p>Rp. 999,999,999</p>
                    </div>
                  </div>
                  <div className="graph-box">
                    <div className="graph">
                      <div className="graph-group">
                        <div className="graph-bar-shadow">
                          <div className="graph-bar income-color">
                          </div>
                          <span className='graph-value'>Rp. 999,999,999</span>
                        </div>
                        <div className="graph-bar-shadow">
                          <div className="graph-bar expense-color">
                          </div>
                          <span className='graph-value'>Rp. 999,999,999</span>
                        </div>
                      </div>
                      <div className="graph-group">
                        <div className="graph-bar-shadow">
                          <div className="graph-bar income-color">
                          </div>
                          <span className='graph-value'>Rp. 999,999,999</span>
                        </div>
                        <div className="graph-bar-shadow">
                          <div className="graph-bar expense-color">
                          </div>
                          <span className='graph-value'>Rp. 999,999,999</span>
                        </div>
                      </div>
                    </div>
                    <div className="dash-line"></div>
                    <div className="graph-label">
                      <p>Last Month</p>
                      <p>This Month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <Navbar/> 
    </div>
  )
}

export default Home