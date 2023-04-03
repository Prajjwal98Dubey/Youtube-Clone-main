import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "Chat",
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            // when we use push the new element is pused in the last but if we use unshift then the new element will be pushed in the front that's what happens in the live chat.

            /// for maintaining any specifice number of the chats in the live chat for managing the space and not letting the page to freeze we can restrict the message count to a specific number or example 250 messages will be displayed at time other oler messages will be deleted like the older messages will be deleted first this can be done through the help of the function called splice in js. 
            
            // state.messages.splice(5,1)----> not working for some reason try to figur it out.

            state.messages.push(action.payload)
        }
    }
})
export const { addMessage } = chatSlice.actions
export default chatSlice.reducer