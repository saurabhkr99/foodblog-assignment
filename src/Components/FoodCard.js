
import React from 'react';
import image from '../images/icon.png';
import { useNavigate } from 'react-router-dom';
import "../css/FoodCard.css"



function FoodCard(props) {

  const navigate = useNavigate()

  const { foodList } = props

  const handleClick = () => {
    let foodListId = foodList.code
    navigate(`/${foodListId}`, { state: { foodList } })
  }


  return (
    <div className='card'>
      <div className='card_img'>
        <img className='' src={image} alt='' />
      </div>
      <div className='card_product'>
        <h4 className='p'>
          {foodList.product_name}
        </h4>
        <h4 className='p'>
          ({foodList.generic_name})
        </h4>
        <button type='button' className='card_button'
          onClick={handleClick}
        >
          Food Details
        </button>
      </div>
    </div>
  )
}

export default FoodCard;