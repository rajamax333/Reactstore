// 1. Define your initial state type
import type { AnyAction, Reducer } from 'redux';
type Range = { min: number; max: number };

export interface FilterState {
  searchText: string;
  range: Range;
  categories: string[];  // array of strings
  keywords: string[];    // array of strings
}

// 2. Define action types (better to use string literal types)
// export type ActionWithType = { type: string;[key: string]: any };

// 3. Initial state must match FilterState type
const initialState: FilterState = {
  searchText: '',
  range: { min: 0, max: 1000 },
  categories: [],
  keywords: [],
};

// 4. The reducer with proper typings and switch cases
export const filterReducer: Reducer<FilterState, AnyAction> = (
  state = initialState,
  action
): FilterState => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return { ...state, searchText: action.value };

    case 'SET_RANGE':
      return { ...state, range: action.value };

    case 'SET_CATEGORIES':
      return { ...state, categories: action.value };

    case 'SET_KEYWORDS':
      return { ...state, keywords: action.value };

    case 'RESET_FILTERS':
      return initialState;

    default:
      return state;
  }
};
