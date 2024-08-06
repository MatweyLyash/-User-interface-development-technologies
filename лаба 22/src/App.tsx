// В файле App.tsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBoard, setErrorRows, setErrorCols, setErrorBlocks, setIsChecking } from './actions';
import Cell from './Cell';
import './App.css';
import { AppState, CellValue, BOARD_SIZE } from './types';

const App: React.FC = () => {
    const dispatch = useDispatch();
    const { board, errorRows, errorCols, errorBlocks, isChecking } = useSelector((state: AppState) => state);
  
    const getRandomValue = (board: CellValue[][], row: number, col: number): CellValue => {
        const possibleValues: CellValue[] = Array.from({ length: BOARD_SIZE }, (_, index) => index + 1).filter(
          (value) => isValidValue(board, value, row, col)
        );
      
        if (possibleValues.length === 0) return '';
        const randomIndex = Math.floor(Math.random() * possibleValues.length);
        return possibleValues[randomIndex];
      };
      const isValidValue = (board: CellValue[][], value: CellValue, row: number, col: number): boolean => {

        if (board[row].some((cell) => cell === value)) return false;
      
        if (board.some((rowValues) => rowValues[col] === value)) return false;
      
        const blockSize = Math.sqrt(BOARD_SIZE);
        const blockRowStart = Math.floor(row / blockSize) * blockSize;
        const blockColStart = Math.floor(col / blockSize) * blockSize;
      
        for (let i = blockRowStart; i < blockRowStart + blockSize; i++) {
          for (let j = blockColStart; j < blockColStart + blockSize; j++) {
            if (board[i][j] === value && (i !== row || j !== col)) return false;
          }
        }
      
        return true;
      };
      
  const generateNewGame = () => {
    const newBoard: CellValue[][] = Array.from({ length: BOARD_SIZE }, () => Array.from({ length: BOARD_SIZE }, () => ''));
    const totalCells = BOARD_SIZE * BOARD_SIZE;
    const cellsToFill = Math.floor(0.3 * totalCells);
    let filledCells = 0;
  
    while (filledCells < cellsToFill) {
      const randomRow = Math.floor(Math.random() * BOARD_SIZE);
      const randomCol = Math.floor(Math.random() * BOARD_SIZE);
  
      if (newBoard[randomRow][randomCol] === '') {
        const value = getRandomValue(newBoard, randomRow, randomCol);
        newBoard[randomRow][randomCol] = value;
        filledCells++;
      }
    }
    dispatch(setBoard(newBoard));
    dispatch(setIsChecking(false))
    dispatch(setErrorRows([]));
    dispatch(setErrorCols([]));
    dispatch(setErrorBlocks([]));
    checkBoard();
  };

  const checkBoard = () => {
    const tempErrorRows: number[] = [];
    const tempErrorCols: number[] = [];
    const tempErrorBlocks: Set<number> = new Set();
  
    for (let i = 0; i < BOARD_SIZE; i++) {
      const rowValues = new Set(board[i].filter((cell) => cell !== ''));
      if (rowValues.size !== board[i].filter((cell) => cell !== '').length) {
        tempErrorRows.push(i);
      }
    }
  
    for (let j = 0; j < BOARD_SIZE; j++) {
      const columnValues = new Set(board.map((row) => row[j]).filter((cell) => cell !== ''));
      if (columnValues.size !== board.map((row) => row[j]).filter((cell) => cell !== '').length) {
        tempErrorCols.push(j);
      }
    }
  
    if (isChecking) {
      const blockSize = Math.sqrt(BOARD_SIZE);
      for (let blockRow = 0; blockRow < blockSize; blockRow++) {
        for (let blockCol = 0; blockCol < blockSize; blockCol++) {
          const blockValues = new Set<CellValue>();
          let hasError = false;
          for (let i = blockRow * blockSize; i < (blockRow + 1) * blockSize; i++) {
            for (let j = blockCol * blockSize; j < (blockCol + 1) * blockSize; j++) {
              const cellValue = board[i][j];
              if (cellValue !== '') {
                if (blockValues.has(cellValue)) {
                  hasError = true;
                  break;
                } else {
                  blockValues.add(cellValue);
                }
              }
            }
            if (hasError) break;
          }
          if (hasError) {

            for (let i = blockRow * blockSize; i < (blockRow + 1) * blockSize; i++) {
              for (let j = blockCol * blockSize; j < (blockCol + 1) * blockSize; j++) {
                tempErrorBlocks.add(i * BOARD_SIZE + j);
              }
            }
          }
        }
      }
    }
  
    dispatch(setIsChecking(true));
    dispatch(setErrorRows(tempErrorRows));
    dispatch(setErrorCols(tempErrorCols));
    dispatch(setErrorBlocks(Array.from(tempErrorBlocks)));
  };

  const handleCellChange = (newValue: CellValue, row: number, col: number) => {
    const newBoard = [...board];
    newBoard[row][col] = newValue;
    dispatch(setBoard(newBoard))
  };

  return (
    <div className="App">
      <h1>Судоку</h1>
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <Cell
                key={colIndex}
                value={cell}
                onChange={(newValue) => handleCellChange(newValue, rowIndex, colIndex)}
                isError={
                  errorRows.includes(rowIndex) || errorCols.includes(colIndex) || errorBlocks.includes(rowIndex * BOARD_SIZE + colIndex)
                }
                isChecking={isChecking}
              />
            ))}
          </div>
        ))}
      </div>
      <button onClick={generateNewGame}>Новая игра</button>
      <button onClick={checkBoard}>Проверить</button>
    </div>
  );
};

export default App;