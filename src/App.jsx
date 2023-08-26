import { useState } from 'react'
import './index.css'
import Board from './Components/Board'
import Scoreboard from './Components/Scoreboard';

function App() {

  const win_conditions = [[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
];
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xturn, setXturn] = useState(true)
  const [scores, setScores] = useState({xScore:0, oScore: 0})
  const [winner, setWinner] = useState(null)

  const checkWinner = (board) => {
    for (let i = 0; i<win_conditions.length;i++) {
      const [x, y, z] = win_conditions[i]

      if (board[x] && board[x]=== board[y] && board[y] === board[z]) {
        console.log(board[x]);
        return board[x]
      }
    }
  }

  const checkDraw = (board) => {
    const newBoard = board.filter((boardItem)=> boardItem === "")
    if (newBoard.length === 0) {
      return true;
    }
    return false;
  }
  
  const handleClick = (id) => {
    const newBoard = board.map((value, index)=> {
      if (id === index) {
        return xturn?"X":"O";
      }
      return value;
    })
   
    const winner = checkWinner(newBoard)

    if(winner) {
      if (winner === "O") {
        let {oScore} = scores;
        oScore+=1
        setScores({...scores, oScore})
        setWinner('Player O');

      }
      else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
        setWinner('Player X');
      }
      setBoard(newBoard);

      setTimeout(()=> {setBoard(Array(9).fill(null))
                      setWinner(null)}, 500)
    }
    setBoard(newBoard);
    setXturn(!xturn)
  }


  return (
    <main>
      <h1>Tic Tac Toe</h1>
      <Scoreboard scores={scores} xturn={xturn} />
      <Board board={board} handleClick={handleClick} />

      <h3 className={!xturn ? 'red' : 'blue'} style={{ textAlign: 'center', marginBottom: '1rem' }}>
        {winner && `${winner} wins`}
      </h3>
      <h3>{}</h3>
      <div className="btn-container">
        <button className="reset" onClick={() => setBoard(Array(9).fill(null))}>
          Reset
        </button>
      </div>
    </main>
  );
}

export default App
