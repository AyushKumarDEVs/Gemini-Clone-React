import { createSlice } from "@reduxjs/toolkit";

const ChatStoreSlice = createSlice({
    name: "ChatStoreSlice",
    initialState: {
        ChatsList: [],
    },
    reducers: {
        AddChats: (state, action) => {
            state.ChatsList.push(action.payload.Chat);
        },

        UpdateChat:(state,action)=>{
            state.ChatsList=state.ChatsList.map((each)=>each.id===action.payload.id? {response:action.payload.response,isResponseCompleted:action.payload.isResponseCompleted,...each}:each)
        }
        

    },
});

export const { AddChats,UpdateChat } = ChatStoreSlice.actions;
export default ChatStoreSlice.reducer;
