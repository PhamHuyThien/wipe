import { configureStore } from "@reduxjs/toolkit";
import ListFriendRequestSlice from "./ListFriendRequestSlice";
import ListFriendSlice from "./ListFriendSlice";
import LoadingSlice from "./LoadingSlice";
import UserInfoSlice from "./UserInfoSlice";
import ListMessagesSlice from "./ListMessagesSlice";
import ListConversationSlice from "./ListConversationSlice";
const ConfigureStore = configureStore({
    reducer: {
        loading: LoadingSlice,
        userInfo: UserInfoSlice,
        listFriend: ListFriendSlice,
        listFriendRequest: ListFriendRequestSlice,
        listConversation: ListConversationSlice,
        listMessages: ListMessagesSlice
    }
});

export default ConfigureStore;