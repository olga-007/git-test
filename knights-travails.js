
function isValid(n) {
    return n >= 0 && n <= 7;
}

function knightMoves(from, to) {
    const chessboard = new Array(8).fill().map(() => new Array(8).fill());
    const queue = [[...from, []]];

    while (queue.length > 0) {
        const [i, j, prevMoves] = queue.shift();
    
        if (isValid(i) && isValid(j) && chessboard[i][j] === undefined) {
            const moves = [...prevMoves]; // make a copy
            moves.push([i, j]);
            chessboard[i][j] = moves.length - 1; 
    
            if (i === to[0] && j === to[1]) {
                console.log(`Got there in ${moves.length - 1} moves!`);
                console.log(JSON.stringify(moves));
                break;
            }
            queue.push([i + 1, j + 2, moves]);
            queue.push([i + 1, j - 2, moves]);
            queue.push([i - 1, j + 2, moves]);
            queue.push([i - 1, j - 2, moves]);
            queue.push([i + 2, j + 1, moves]);
            queue.push([i + 2, j - 1, moves]);
            queue.push([i - 2, j + 1, moves]);
            queue.push([i - 2, j - 1, moves]);
        }
    }
    console.table(chessboard);
}

knightMoves([6,7],[0,0]);