import React  from 'react'
import {useNavigate} from "react-router-dom"

import backArrow from '../../asstes/icons/Back-arow.png'

function Headbar(props) {

  const navigate = useNavigate();


  return (
    <div className='headbar'>
        <div className="container">

          <div className="flex-container">

            <div className="icon-back" style={{display: props.home}}>
              <img src={backArrow}  onClick={()=>navigate(-1)} alt="back navigate" />
            </div>

            <p>{props.title}</p>

            <p 
              className='right-content headbar-right-content'  
              style={{display: props.edit}}
              onClick={()=>navigate(props.editTarget + '/:' + props.id)}>
                Edit
            </p>
          </div>

        </div>
    </div>
  )
}

export default Headbar