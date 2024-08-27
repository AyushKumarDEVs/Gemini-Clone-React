import { configureStore } from "@reduxjs/toolkit";
import ChatStoreSlice from "../slices/ChatStoreSlice";

const Store=configureStore({
    reducer:ChatStoreSlice
})

export default Store;