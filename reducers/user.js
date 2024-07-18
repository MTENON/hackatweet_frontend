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

        logoutUser: (state) => {
            state.firstname = null;
            state.username = null;
            state.token = null;
        }

    },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;