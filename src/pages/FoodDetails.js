import React from 'react';
import FoodTable from '../Components/FoodTable';
import image from '../images/icon.png';
import { useLocation, useNavigate } from 'react-router-dom';
import "../css/FoodDetails.css"


const FoodDetails = () => {

    const { state } = useLocation()

    const { foodList } = state

    const navigate = useNavigate()

    return (
        <>
            <div className='detail'>

                <div className='detail_c'>
                    <div className='detail_img'>
                        <img className='' src={image} alt='icon' />
                    </div>
                    <div className='detail_pg'>
                        <h4 className='detail_p'>
                            {foodList.product_name}
                        </h4>
                        <h4 className='detail_g'>
                            ({foodList.generic_name})
                        </h4>
                    </div>
                </div>

                <FoodTable foodList={foodList} />

                <button className='btn' type='button'
                    onClick={() => navigate('/')}
                >
                    Back
              
                </button>

            </div>
        </>
    )
}

export default FoodDetails;