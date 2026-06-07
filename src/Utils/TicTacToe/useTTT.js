import { useState } from "react"
import { calculateWinner } from "./winnerLogic";

const useTicTacToe = () => {
   
    const [boxes, setBoxes] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState("X")
    
    const [xMoves, setXMoves] = useState([])
    const [oMoves, setOMoves] = useState([])

    const [info, setInfo] = useState("")

    const [winner, setWinner] = useState(null)
    const [winningLine, setWinningLine] = useState([]);

    const handleClick = (index) => {
        
        if (boxes[index] || winner ) return

        const newBoxes = [...boxes]
        newBoxes[index] = turn
        setBoxes(newBoxes)

        if (turn === "X") {
            setXMoves([...xMoves, index + 1])
        } else {
            setOMoves([...oMoves, index + 1])
        }   
 
        const result = calculateWinner(newBoxes);

        if (result) {
            setWinner(result.winner);
            setWinningLine(result.line);
            setInfo(`${result.winner} Wins 🎉`);
            return;
        }

        setInfo(`${turn} moved to Box ${index + 1}`)
        setTurn(turn === "X" ? "O" : "X")
    }

    const resetGame = () => {
        setBoxes(Array(9).fill(null))
        setTurn("X")
        setInfo("")
        setXMoves([])
        setOMoves([])
        setWinner(null)
        setWinningLine([])
    }

    

    return {
        boxes,
        turn,
        info,
        xMoves,
        oMoves,
        handleClick,
        resetGame,
        winner,
        winningLine
    }
}

export default useTicTacToe