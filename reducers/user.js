import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    firstname: 'Maxime',
    username: 'maximetenon',
    token: 'N-7bQJkhjOODJ7M3xV1hX6qgcuCmNA8J',
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

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;