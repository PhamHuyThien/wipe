import { createSlice } from "@reduxjs/toolkit";
import Contacts from "../components/chat/side/side-item/Contacts";

export const NavigationSlide = createSlice({
    name: "navigation",
    initialState: {
        show: ""
    },
    reducers: {
        setShow: (state, action) => {
            state.show = action.payload;
        }
    }
});

export const { setShow } = NavigationSlide.actions;

export default NavigationSlide.reducer;