import { createSlice } from "@reduxjs/toolkit";

const ChatStoreSlice = createSlice({
    name: "ChatStoreSlice",
    initialState: {
        ChatsList: [],
        RecentList: [],
    },
    reducers: {
        AddChats: (state, action) => {
            state.ChatsList.push(action.payload.Chat);
        },
        AddRecentChats: (state, action) => {
            state.RecentList.push(action.payload.Chat);
        },

        UpdateChat:(state,action)=>{
            state.ChatsList=state.ChatsList.map((each)=>each.id===action.payload.id? {response:action.payload.response,isResponseCompleted:action.payload.isResponseCompleted,...each}:each)
        },

        SetChatsList:(state,action)=>{
            state.ChatsList=[action.payload.c];
        }
        

    },
});

export const { AddChats,UpdateChat,AddRecentChats,SetChatsList } = ChatStoreSlice.actions;
export default ChatStoreSlice.reducer;
