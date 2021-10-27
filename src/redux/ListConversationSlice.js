
import { createSlice } from "@reduxjs/toolkit";

export const ListConversationSlice = createSlice({
    name: "listConversation",
    initialState: {
        list: []
    },
    reducers: {
        listConversationSet: (state, action) => {
            state.list = action.payload;
        }
    }
});


export const { listConversationSet } = ListConversationSlice.actions;

export default ListConversationSlice.reducer;