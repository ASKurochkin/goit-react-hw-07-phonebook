import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { initialState } from './inittialState';

export const formReducer = (state = initialState.contacts, action) => {
  switch (action.type) {
    case 'addContact':
      return { ...state, contacts: [...state.contacts, action.payload] };
    case 'delAll':
      return { ...state, contacts: [] };
    case 'deleteContact':
      return { ...state, contacts: [...action.payload] };
    default:
      return state;
  }
};

const filterReducer = (state = initialState.filter, action) => {
  switch (action.type) {
    case 'changeFilter':
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contacts: formReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
