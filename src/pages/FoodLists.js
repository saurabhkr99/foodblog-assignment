import React from 'react'
import FoodCard from '../Components/FoodCard';
import Records from '../OFF_subset17.json';


function FoodLists() {
  return (
    <div>
        {
            Records && Records.map((foodList) => {
                return (
                    <FoodCard key={foodList.code} foodList={foodList} />
                )
            })
        }
    </div>
)
}

export default FoodLists