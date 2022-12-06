import { createSlice } from "@reduxjs/toolkit";
import { current, login,logout, signup } from "./operations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isFetchingCurrentUser: false,
}

export const authSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: (builder) => {builder
        .addCase(signup.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(logout.fulfilled, (state) => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        })
        .addCase(current.pending, (state) => {
            state.isFetchingCurrentUser = true;
        })
        .addCase(current.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isFetchingCurrentUser = false;
        })
        .addCase(current.rejected, (state) => {
            state.isFetchingCurrentUser = false;
        })
    }
})

export default authSlice.reducer