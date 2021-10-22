import { configureStore } from "@reduxjs/toolkit";
import NavigationSlide from "./NavigationSlide";

const ConfigureStore = configureStore({
    reducer: {
        navigation: NavigationSlide
    }
});

export default ConfigureStore;