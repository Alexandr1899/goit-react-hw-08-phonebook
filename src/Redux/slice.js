import { createSlice } from '@reduxjs/toolkit'
import { fetchContacts, addContacts, removeContacts } from './operations'

// export const contactsSlice = createSlice({
//     name: 'contacts',
//     initialState: [],
//     reducers: {
//         addContacts: (state, action) => {
//             return [...state, action.payload]
//         },
//         removeContacts: (state, action) => {
//             return state.filter(contact => contact.id !== action.payload)
//         }
//     }
// })
// export const { addContacts, removeContacts } = contactsSlice.actions

export const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled,(state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
            })
            .addCase(fetchContacts.rejected,(state, action) => {
        state.isLoading = false;
        state.error = action.payload;
            })
            
            .addCase(addContacts.pending, (state) => {
        state.isLoading = true;
        }) 
            .addCase(addContacts.fulfilled,(state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
        })
            .addCase(addContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        })
            .addCase(removeContacts.pending, (state) => {
        state.isLoading = true;
        })
            .addCase(removeContacts.fulfilled,(state, action) => {
        state.isLoading = false;
        state.error = null;
                const index = state.items.findIndex(item => item.id === action.payload.id)
                state.items.splice(index, 1)
        })
            .addCase(removeContacts.rejected,(state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        })
    },
    });
    export const contactsReducer = contactsSlice.reducer;



export const filterSlice = createSlice({
    name: `filter`,
    initialState: '',
    reducers: {
        findContacts: (state, action) => {
            return state = action.payload
        }
    }
})
export const { findContacts } = filterSlice.actions