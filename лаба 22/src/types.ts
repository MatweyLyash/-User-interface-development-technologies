// В файле types.ts

import { setBoardType, setErrorBlocksType, setErrorColsType, setErrorRowsType, setIsCheckingType } from "./actions";

export const BOARD_SIZE = 9;

export const ActionTypes = {
    SET_BOARD: 'SET_BOARD',
    SET_ERROR_ROWS: 'SET_ERROR_ROWS',
    SET_ERROR_COLS: 'SET_ERROR_COLS',
    SET_ERROR_BLOCKS: 'SET_ERROR_BLOCKS',
    SET_IS_CHECKING: 'SET_IS_CHECKING',
  };

export type CellValue = number | '';

export interface AppState {
  board: CellValue[][];
  errorRows: number[];
  errorCols: number[];
  errorBlocks: number[];
  isChecking: boolean;
}

export interface SetBoardAction {
  type: typeof ActionTypes.SET_BOARD;
  payload: CellValue[][];
}


export interface SetErrorRowsAction {
    type: typeof ActionTypes.SET_ERROR_ROWS;
    payload: number[]; 
  }
  
  export interface SetErrorColsAction {
    type: typeof ActionTypes.SET_ERROR_COLS;
    payload: number[];
  }
  
  export interface SetErrorBlocksAction {
    type: typeof ActionTypes.SET_ERROR_BLOCKS;
    payload: number[]; 
  }
  

export interface SetIsCheckingAction {
  type: typeof ActionTypes.SET_IS_CHECKING;
  payload: boolean;
}

export type AppProps = 
| setBoardType
| setErrorRowsType
| setErrorColsType
| setErrorBlocksType
| setIsCheckingType;

export type AppActions = 
  | SetBoardAction
  | SetErrorRowsAction
  | SetErrorColsAction
  | SetErrorBlocksAction
  | SetIsCheckingAction
    |any;
