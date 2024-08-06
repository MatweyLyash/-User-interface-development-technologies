// В файле actions.ts

import { ActionTypes, AppActions, CellValue } from './types';

export const setBoard = (board: CellValue[][]): AppActions => ({
  type: ActionTypes.SET_BOARD,
  payload: board,
});

export const setErrorRows = (errorRows: number[]): AppActions => ({
  type: ActionTypes.SET_ERROR_ROWS,
  payload: errorRows, 
});

export const setErrorCols = (errorCols: number[]): AppActions => ({
  type: ActionTypes.SET_ERROR_COLS,
  payload: errorCols, 
});


export const setErrorBlocks = (errorBlocks: number[]): AppActions => ({
  type: ActionTypes.SET_ERROR_BLOCKS,
  payload: errorBlocks, 
});

export const setIsChecking = (isChecking: boolean): AppActions => ({
  type: ActionTypes.SET_IS_CHECKING,
  payload: isChecking,
});

export type setBoardType = ReturnType<typeof setBoard>;
export type setErrorRowsType = ReturnType<typeof setErrorRows>;
export type setErrorColsType = ReturnType<typeof setErrorCols>;
export type setErrorBlocksType = ReturnType<typeof setErrorBlocks>;
export type setIsCheckingType = ReturnType<typeof setIsChecking>;

