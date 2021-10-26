
import { createSlice } from "@reduxjs/toolkit";

export const ListFriendRequestSlice = createSlice({
    name: "listFriendRequest",
    initialState: {
        list: []
    },
    reducers: {
        listFriendRequestSet: (state, action) => {
            state.list = action.payload;
        }
    }
});


export const { listFriendRequestSet } = ListFriendRequestSlice.actions;

export default ListFriendRequestSlice.reducer;