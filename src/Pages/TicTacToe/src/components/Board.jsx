const Board = ({ boxes, handleClick, winningLine }) => {

    const isWinnerCell = (index) => {
        return (
            winningLine &&
            (index === winningLine[0] ||
                index === winningLine[1] ||
                index === winningLine[2])
        );
    };

    return (
        <div className="boardGrid">

            { boxes.map((box, index) => {
                return (
                    <button
                        key={ index }
                        onClick={ () => handleClick(index) }
                        className={ isWinnerCell(index) ? "cell winner" : "cell" }
                    >
                        { box }
                    </button>
                );
            }) }

        </div>
    );
};

export default Board;