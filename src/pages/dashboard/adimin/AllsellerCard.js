import React from 'react'

const AllsellerCard = ({ seller,index ,handleDelete}) => {
    const { name,email,Title,_id} = seller;
  return (
    <tr >
    <th>{index +1}</th>
    
    <td className='font-semibold'>{name}</td>
          <td className='font-semibold'>{email}</td>
          <td className='font-semibold'>{Title}</td>

  <td>
  <label htmlFor="confirmation-modal"   className="btn btn-sm btn-success text-white  mx-2">verify</label>

  </td>
    <td>


        <button onClick={()=>handleDelete(_id)} className="btn btn-sm text-white btn-error">Delete</button>
  </td>
  
</tr>
  )
}

export default AllsellerCard