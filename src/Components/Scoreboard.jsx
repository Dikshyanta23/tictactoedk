import React from 'react'

const Scoreboard = ({scores, xturn}) => {
    const {oScore, xScore} = scores
  return (
    <article className='scoreboard'>
      <h3 className={xturn && 'red'}>Player X: {xScore} wins</h3>
      <h3 className={!xturn && 'blue'}>Player O: {oScore} wins</h3>
    </article>
  )
}

export default Scoreboard
