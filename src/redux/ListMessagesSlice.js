
import { createSlice } from "@reduxjs/toolkit";

export const ListMessagesSlice = createSlice({
    name: "listMessages",
    initialState: {
        conversation: {},
        list: [],
        subcribe: null,
    },
    reducers: {
        listMessagesSetList: (state, action) => {
            state.list = action.payload;
        },
        listMessagesSetConversation: (state, action) => {
            state.conversation = action.payload;
        },
        listMessagesSetSubcribe: (state, action) => {
            state.subcribe = action.payload;
        }
    }
});


export const { listMessagesSetList, listMessagesSetConversation, listMessagesSetSubcribe } = ListMessagesSlice.actions;

export default ListMessagesSlice.reducer;