export const getScore = (winner) => {
    if (winner === "O") return 10;
    if (winner === "X") return -10;

    return 0;
};

export const minimax = (
    boxes,
    isMaximizing,
    calculateWinner
) => {

    const result = calculateWinner(boxes);

    if (result) {
        return getScore(result.winner);
    }

    // DRAW
    if (!boxes.includes(null)) {
        return 0;
    }

    // AI TURN
    if (isMaximizing) {

        let bestScore = -Infinity;

        boxes.forEach((cell, index) => {

            if (cell === null) {

                boxes[index] = "O";

                const score = minimax(
                    boxes,
                    false,
                    calculateWinner
                );

                boxes[index] = null;

                bestScore = Math.max(score, bestScore);
            }
        });

        return bestScore;

    }

    // PLAYER TURN
    else {

        let bestScore = Infinity;

        boxes.forEach((cell, index) => {

            if (cell === null) {

                boxes[index] = "X";

                const score = minimax(
                    boxes,
                    true,
                    calculateWinner
                );

                boxes[index] = null;

                bestScore = Math.min(score, bestScore);
            }
        });

        return bestScore;
    }
};

export const findBestMove = (
    boxes,
    calculateWinner
) => {

    let bestScore = -Infinity;

    let move = null;

    boxes.forEach((cell, index) => {

        if (cell === null) {

            boxes[index] = "O";

            const score = minimax(
                boxes,
                false,
                calculateWinner
            );

            boxes[index] = null;

            if (score > bestScore) {

                bestScore = score;

                move = index;
            }
        }
    });

    return move;
  };