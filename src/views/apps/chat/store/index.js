// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

export const getUserProfile = createAsyncThunk('appChat/getTasks', async () => {
  const response = await axios.get('/apps/chat/users/profile-user')
  return response.data
})

export const getChatContacts = createAsyncThunk('appChat/getChatContacts', async () => {
  const response = await axios.get('/apps/chat/chats-and-contacts')
  //console.log(response)
  return response.data
})

export const selectChat = createAsyncThunk('appChat/selectChat', async (id, { dispatch }) => {
  const response = await axios.get('/apps/chat/get-chat', { id })
  await dispatch(getChatContacts())
  return response.data
})

export const sendMsg = createAsyncThunk('appChat/sendMsg', async (obj, { dispatch }) => {
  const response = await axios.post('/apps/chat/send-msg', { obj })
  await dispatch(selectChat(obj.contact.id))
  return response.data
})

export const starMsg = createAsyncThunk('appChat/starMsg', async (obj, { dispatch}) => {
  const response = await axios.post('/apps/chat/star-msg', { obj })
  await dispatch(selectChat(obj.contact.id))
  return response.data
})

export const editMsg = createAsyncThunk('appChat/editMsg', async (obj, { dispatch}) => {
  const response = await axios.post('/apps/chat/edit-msg', { obj })
  await dispatch(selectChat(obj.contact.id))
  //console.log(response)
  return response.data
})

export const deleteMsg = createAsyncThunk('appChat/deleteMsg', async (obj, { dispatch}) => {
  const response = await axios.post('/apps/chat/delete-msg', { obj })
  await dispatch(selectChat(obj.contact.id))
  return response.data
})

export const appChatSlice = createSlice({
  name: 'appChat',
  initialState: {
    chats: [],
    contacts: [],
    userProfile: {},
    selectedUser: {}
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.userProfile = action.payload
      })
      .addCase(getChatContacts.fulfilled, (state, action) => {
        state.chats = action.payload.chatsContacts
        state.contacts = action.payload.contacts
      })
      .addCase(selectChat.fulfilled, (state, action) => {
        state.selectedUser = action.payload
      })
  }
})

export default appChatSlice.reducer
