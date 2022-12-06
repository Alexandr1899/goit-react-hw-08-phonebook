import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = {
        set(token) {
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
        unset() {
            axios.defaults.headers.common.Authorization = '';
    },
};

export const signup = createAsyncThunk("users/signup", async (user, thunkAPI) => {
    try {
        const {data} = await axios.post("/users/signup", user);
        token.set(data.token)
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const login = createAsyncThunk("users/login", async (user, thunkAPI) => {
    try {
        const {data} = await axios.post("/users/login", user);
        token.set(data.token)
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const logout = createAsyncThunk("users/logout", async (_, thunkAPI) => {
    try {
        const {data} = await axios.post("/users/logout");
        token.unset()
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const current = createAsyncThunk("users/current", async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        if (persistedToken === null) {
            return thunkAPI.rejectWithValue();
        }
        token.set(persistedToken)
        try {
            const {data} = await axios.get('/users/current');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    })
