import React from 'react'

const InfoPanel = ({ info, turn, xMoves, oMoves }) => {
    return (
        <div className="info">

            <h3>Track Moves</h3>

            <p><b>X Moves:</b> { xMoves.join(" - ") }</p>
            <p><b>O Moves:</b> { oMoves.join(" - ") }</p>

            <hr />

            <p>{ info }</p>
            <p>Next Turn: { turn }</p>

        </div>
    )
}

export default InfoPanel