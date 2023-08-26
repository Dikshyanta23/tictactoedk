import React from 'react'
import { useState } from 'react';
import SingleItem from './SingleItem';

const Board = ({board, handleClick}) => {
  return (
    <section className='board'>
      {board.map((value, index) => {
        return < SingleItem key ={index} value = {value} index = {index} handleClick = {handleClick}/>
      })}
    </section>
  )
}

export default Board
