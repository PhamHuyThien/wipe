import { createSlice } from "@reduxjs/toolkit";

export const UserInfoSlice = createSlice({
    name: "userInfo",
    initialState: {
        userInfo: {
            username: "",
            email: "",
            id: -1,
            profile: {
                firstName: "",
                lastName: "",
                address: "",
                cover: {
                    id: null,
                    url: null,
                    name: null,
                    type: null,
                    size: 0
                },
                avatar: {
                    id: null,
                    url: null,
                    name: null,
                    type: null,
                    size: 0

                },
            }
        }
    },
    reducers: {
        userInfoSet: (state, action) => {
            state.userInfo = action.payload;
        }
    }
});


export const { userInfoSet } = UserInfoSlice.actions;

export default UserInfoSlice.reducer;