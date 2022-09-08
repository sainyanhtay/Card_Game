import {createSlice} from '@reduxjs/toolkit';

export const challengeSlice = createSlice({
  name: 'challenge',
  initialState: {
    random_numbers: [],
  },
  reducers: {
    generateRandomNumbers: (state, action) => {
      let arr = [];
      while (arr.length < 6) {
        var r = Math.floor(Math.random() * 100) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
      }
      state.random_numbers = [...arr, ...arr];
    },
  },
});

export const {generateRandomNumbers} = challengeSlice.actions;

export const selectchallenges = state => state.random_numbers;

export default challengeSlice.reducer;
