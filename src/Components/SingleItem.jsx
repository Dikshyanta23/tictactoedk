import React from 'react'

const SingleItem = ({index,value, handleClick}) => {
 
  return (
    <button className={value==="X"?'btn red':'btn blue'} onClick = {()=> value===null && handleClick(index)}>{value}</button>
  );
}

export default SingleItem
