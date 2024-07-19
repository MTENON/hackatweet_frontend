import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    firstname: 'Maxime',
    username: 'maximetenon',
    token: '5_FFFhdNEh5HJnLO8ZLsFeEmchhR9nsu',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        login: (state, action) => {
            state.firstname = action.payload.firstname
            state.username = action.payload.username;
            state.token = action.payload.token;
        },

        logout: (state) => {
            state.firstname = null;
            state.username = null;
            state.token = null;
        }

    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;