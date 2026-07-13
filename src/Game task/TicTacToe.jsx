import React, { useState } from "react";
import "./TicTacToe.css";


export default function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(""));
    const [player, setPlayer] = useState("X");
    const [winner, setWinner] = useState(null);
    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
    ];

    const handleClick = (index) => {
        if (board[index] !== "" || winner) {
            return;
        }
        const newBoard = [...board];
        newBoard[index] = player;
        setBoard(newBoard);
        checkWinner(newBoard);
        setPlayer(player === "X" ? "O" : "X");
    }

    const checkWinner = (currentBoard) => {
        for (let pattern of winningPatterns) {
            const [a, b, c] = pattern;
            if (
                currentBoard[a] &&
                currentBoard[a] === currentBoard[b] &&
                currentBoard[a] === currentBoard[c]
            ) {
                setWinner(currentBoard[a]);
                return;
            }
        }
    }
    return (
        <div className="game">
            <h1>Tic Tac Toe</h1>
            <div className="board">
                {
                    board.map((value, index) => (
                        <button
                            key={index}
                            onClick={() => handleClick(index)}
                        >
                            {value}
                        </button>
                    ))
                }
            </div>
            {
                winner &&
                <h2>{winner} Wins 🎉</h2>
            }
        </div>
    )
}
