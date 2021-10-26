
import { createSlice } from "@reduxjs/toolkit";

export const ListFriendSlice = createSlice({
    name: "listFriend",
    initialState: {
        list: []
    },
    reducers: {
        listFriendSet: (state, action) => {
            state.list = action.payload;
        }
    }
});


export const { listFriendSet } = ListFriendSlice.actions;

export default ListFriendSlice.reducer;