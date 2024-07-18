import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    firstname: 'John Cena',
    username: 'theTimeIsNow',
    token: null,
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