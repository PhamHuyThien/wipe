import { configureStore } from "@reduxjs/toolkit";
import LoadingSlice from "./LoadingSlice";
const ConfigureStore = configureStore({
    reducer: {
        loading: LoadingSlice,
    }
});

export default ConfigureStore;