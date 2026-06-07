const Board = ({ boxes, handleClick, winningLine }) => {

    const isWinnerCell = (index) => {
        return (
            index === winningLine[0] ||
            index === winningLine[1] ||
            index === winningLine[2]
        );
    };

    return (
        <div className="container">

            { boxes.map((box, index) => {

                if (isWinnerCell(index)) {
                    return (
                        <button
                            key={ index }
                            onClick={ () => handleClick(index) }
                            className="winner"
                        >
                            { box }
                        </button>
                    );
                } else {
                    return (
                        <button
                            key={ index }
                            onClick={ () => handleClick(index) }
                        >
                            { box }
                        </button>
                    );
                }
            }) }

        </div>
    );
};

export default Board;