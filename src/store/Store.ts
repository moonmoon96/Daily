import { configureStore } from "@reduxjs/toolkit";
import ocidSlice from "./OcidSlice";
import basicSlice from "./BasicSlice";

const store = configureStore({
    reducer: {
        ocid : ocidSlice.reducer,
        basic : basicSlice.reducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;