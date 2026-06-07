import Board from './Board'
import InfoPanel from './InfoPanel'
import useTicTacToe from '../utilities/useTTT'

const GameBox = ({ user }) => {

    const {
        boxes,
        turn,
        info,
        xMoves,
        oMoves,
        handleClick,
        resetGame,
        winner,
        winningLine
    } = useTicTacToe()

    return (
        <div className="gameArea">

            {/* USER DISPLAY (OPTIONAL) */ }
            <h3 style={ { textAlign: "center" } }>
                All the best baby { user }
            </h3>

            {/* DIM BACKGROUND */ }
            { winner && <div className="dim"></div> }

            {/* WIN POPUP */ }
            { winner && (
                <div className="winPopup">
                    { winner } Wins 🎉
                </div>
            ) }

            <div className="main">

                <Board
                    boxes={ boxes }
                    handleClick={ handleClick }
                    winningLine={ winningLine }
                />

                <InfoPanel
                    info={ info }
                    turn={ turn }
                    xMoves={ xMoves }
                    oMoves={ oMoves }
                />

            </div>

            <div className="resetWrap">
                <button className="resetBtn" onClick={ resetGame }>
                    Restart Game
                </button>
            </div>

        </div>
    )
}

export default GameBox