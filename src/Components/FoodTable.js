import React from 'react'
// import {Table} from 'react-bootstrap'
import "../css/FoodTable.css"



function FoodTable(props) {
  const { foodList } = props
  return (
  
      <div className='container'>
          <table className='t_main'>
              <tbody className='tb'>
                  <tr className='t_row'>
                      <td className='t1'>URL</td>
                      <td className='t2'>
                          <a className='t3' href={foodList.url}>Link</a>
                      </td>
                  </tr>
                  <tr className='t_row'>
                      <td className='t1'>Creator</td>
                      <td className='t2'>{foodList.creator}</td>
                  </tr>
                  <tr className='t_row'>
                      <td className='t1'>Quantity</td>
                      <td className='t2'>{foodList.quantity}</td>
                  </tr>
                  <tr className='t_row'>
                      <td className='t1'>packaging</td>
                      <td className='t2'>{foodList.packaging}</td>
                  </tr>
                  <tr className='t_row'>
                      <td className='t1'>Serving Size</td>
                      <td className='t2'>{foodList.serving_size}</td>
                  </tr>
                  <tr className='t_row'>
                      <td className='t1'>Energy/100g</td>
                      <td className='t2'>{foodList.energy_100g}</td>
                  </tr>
                  <tr className='t_row'>
                      <td className='t1'>Energy_From_Fat/100g</td>
                      <td className='t2'>
                          {(foodList.energy_from_fat_100g != null) ? foodList.energy_from_fat_100g : '-'}
                      </td>
                  </tr>
                  <tr className='t_row'>
                      <td className='t1'>Fat/100g</td>
                      <td className='t2'>{foodList.fat_100g}</td>
                  </tr>
                  <tr className='t_row'>
                      <td className='t1'>Saturated_Fat/100g</td>
                      <td className='t2'>{foodList.saturated_fat_100g}</td>
                  </tr>
                  <tr className='t_row'>
                      <td className='t1'>Monounsaturated_Fat/100g</td>
                      <td className='t2'>{foodList.monounsaturated_fat_100g}</td>
                  </tr>
                  <tr className='t_row'>
                      <td className='t1'>Polyunsaturated_Fat/100g</td>
                      <td className='t2'>{foodList.polyunsaturated_fat_100g}</td>
                  </tr>
                  <tr className='t_row'>
                      <td className='t1'>Omega_3_Fat/100g</td>
                      <td className='t2'>{foodList.omega_3_fat_100g}</td>
                  </tr>
                  <tr className='t_row'>
                      <td className='t1'>Omega_6_Fat/100g</td>
                      <td className='t2'>{foodList.omega_6_fat_100g}</td>
                  </tr>
                  <tr className='t_row'>
                      <td className='t1'>Trans_Fat/100g</td>
                      <td className='t2'>{foodList.trans_fat_100g}</td>
                  </tr>
                  <tr className='t_row'>
                      <td className='t1'>Cholesterol/100g</td>
                      <td className='t2'>{foodList.cholesterol_100g}</td>
                  </tr>
                  <tr className='t_row'>
                      <td className='t1'>Carbohydrates/100g</td>
                      <td className='t2'>{foodList.carbohydrates_100g}</td>
                  </tr>
                  <tr className='t_row'>
                      <td className='t1'>Sugars/100g</td>
                      <td className='t2'>{foodList.sugars_100g}</td>
                  </tr>
                  <tr className='t_row'>
                      <td className='t1'>Fiber/100g</td>
                      <td className='t2'>{foodList.fiber_100g}</td>
                  </tr>
                  <tr className='t_row'>
                      <td className='t1'>Proteins/100g</td>
                      <td className='t2'>{foodList.proteins_100g}</td>
                  </tr>
                  <tr className='t_row'>
                      <td className='t1'>Salt/100g</td>
                      <td className='t2'>{foodList.salt_100g}</td>
                  </tr>
                  <tr className='t_row'>
                      <td className='t1'>Sodium/100g</td>
                      <td className='t2'>{foodList.sodium_100g}</td>
                  </tr>
              </tbody>
          </table>
      </div>
  )
}

export default FoodTable;
    