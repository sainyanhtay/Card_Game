import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import challenge from './challengeSlice';

export const store = configureStore({
  reducer: combineReducers({challenge}),
});
