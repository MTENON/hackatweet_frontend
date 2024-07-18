import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: { username: null, token: null },
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
});

export const { } = userSlice.actions;
export default userSlice.reducer;