
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../../types/types';


const initialState: UserState = {
  name: '',
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { setName, setEmail } = userSlice.actions;

export default userSlice.reducer;
