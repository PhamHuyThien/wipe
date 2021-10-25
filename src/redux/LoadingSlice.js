import { createSlice } from "@reduxjs/toolkit";

export const LoadingSlice = createSlice({
    name: "loading",
    initialState: {
        open: false
    },
    reducers: {
        loadingOpen: (state, action) => {
            state.open = action.payload;
        }
    }
});

export const loadingAuto = (timeout = 1000, callback = () => { }) => dispatch => {
    dispatch(loadingOpen(true));
    setTimeout(() => {
        dispatch(loadingOpen(false));
        callback();
    }, timeout);
}


export const { loadingOpen } = LoadingSlice.actions;

export default LoadingSlice.reducer;