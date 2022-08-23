import React, { useState } from 'react'
import homeOff from '../../asstes/icons/home-off.png'
import homeOn from '../../asstes/icons/home-on.png'
import transactionOff from '../../asstes/icons/transaction-off.png'
import transactionOn from '../../asstes/icons/transaction-on.png'
import addTransactionOff from '../../asstes/icons/add-transaction-off.png'
import addTransactionOn from '../../asstes/icons/add-transaction-on.png'
import profileOff from '../../asstes/icons/profile-off.png'
import profileOn from '../../asstes/icons/profile-on.png'


function Navbar() {

  const [home, setHome] = useState(homeOn)
  const [transaction, setTransaction] = useState(transactionOff)
  const [add, setAdd] = useState(addTransactionOff)
  const [profile, setProfile] = useState(profileOff)

  const navbarButton = (index) => {
    if ( index === 1) {
      setHome(homeOn)
      setTransaction(transactionOff)
      setAdd(addTransactionOff)
      setProfile(profileOff)
    } else if ( index === 2 ) {
      setHome(homeOff)
      setTransaction(transactionOn)
      setAdd(addTransactionOff)
      setProfile(profileOff)
    } else if ( index === 3 ) {
      setHome(homeOff)
      setTransaction(transactionOff)
      setAdd(addTransactionOn)
      setProfile(profileOff)
    } else if ( index === 4 ) {
      setHome(homeOff)
      setTransaction(transactionOff)
      setAdd(addTransactionOff)
      setProfile(profileOn)
    }
  }

  return (
    <div className='navbar'>
        <div 
          className="navbar-btn" 
          onClick={() => navbarButton(1)}>

            <img src={home} alt="" />
            <p>Home</p>

        </div>
        <div 
          className="navbar-btn" 
          onClick={() => navbarButton(2)}>

            <img src={transaction} alt="" />
            <p>Transactions</p>

        </div>
        <div 
          className="navbar-btn" 
          onClick={() => navbarButton(3)}>

            <img src={add} alt="" />
            <p>Add</p>

        </div>
        <div 
          className="navbar-btn" 
          onClick={() => navbarButton(4)}>

            <img src={profile} alt="" />
            <p>Profile</p>

        </div>
    </div>
  )
}

export default Navbar