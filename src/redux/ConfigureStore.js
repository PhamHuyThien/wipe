import { configureStore } from "@reduxjs/toolkit";
import ListFriendRequestSlice from "./ListFriendRequestSlice";
import ListFriendSlice from "./ListFriendSlice";
import LoadingSlice from "./LoadingSlice";
import UserInfoSlice from "./UserInfoSlice";
const ConfigureStore = configureStore({
    reducer: {
        loading: LoadingSlice,
        userInfo: UserInfoSlice,
        listFriend: ListFriendSlice,
        listFriendRequest: ListFriendRequestSlice
    }
});

export default ConfigureStore;