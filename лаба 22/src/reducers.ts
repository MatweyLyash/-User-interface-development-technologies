import {BOARD_SIZE, ActionTypes, AppActions, AppState, AppProps } from './types';
import { SetBoardAction, SetErrorBlocksAction, SetErrorColsAction, SetErrorRowsAction, SetIsCheckingAction } from './types';

const initialState: AppState = {
  board: Array.from({ length: BOARD_SIZE }, () => Array.from({ length: BOARD_SIZE }, () => '')),
  errorRows: [],
  errorCols: [],
  errorBlocks: [],
  isChecking: false,
};

const rootReducer = (state = initialState, action: AppActions): AppState => {
  switch (action.type) {
    case ActionTypes.SET_BOARD:
      return {
        ...state,
        board: (action as SetBoardAction).payload,
      };
    case ActionTypes.SET_ERROR_ROWS:
      return {
        ...state,
        errorRows: (action as SetErrorRowsAction).payload,
      };
    case ActionTypes.SET_ERROR_COLS:
      return {
        ...state,
        errorCols: (action as SetErrorColsAction).payload,
      };
    case ActionTypes.SET_ERROR_BLOCKS:
      return {
        ...state,
        errorBlocks: (action as SetErrorBlocksAction).payload,
      };
    case ActionTypes.SET_IS_CHECKING:
      return {
        ...state,
        isChecking: (action as SetIsCheckingAction).payload,
      };
    default:
      return state;
  }
};

export default rootReducer;