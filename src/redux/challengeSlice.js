import {createSlice} from '@reduxjs/toolkit';
import helper from '../utils/helper';

export const challengeSlice = createSlice({
  name: 'challenge',
  initialState: {
    CARD_PAIRS_VALUE: [],
  },
  reducers: {
    generateRandomNumbers: (state, action) => {
      let pairNumbers = helper.generatePairNumbers(6);

      state.CARD_PAIRS_VALUE = helper.shuffle(pairNumbers);
    },
  },
});

export const {generateRandomNumbers} = challengeSlice.actions;

export const selectchallenges = state => state.CARD_PAIRS_VALUE;

export default challengeSlice.reducer;
