// src/redux/emailSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Email slice to manage emails
const emailSlice = createSlice({
  name: 'emails',
  initialState: {
    emails: [],  // Store emails in an array
    token : "",
    allSelected: false,  // Keep track of whether all emails are selected
  },
  reducers: {
    addEmail: (state, action) => {
      state.emails.push({ value: action.payload, checked: false });
    },
    Addtoken : (state, {payload}) =>{
        state.token.push(payload)
    },
    removeEmail: (state, action) => {
      state.emails = state.emails.filter(email => email.value !== action.payload);
    },
    toggleEmail: (state, action) => {
      const email = state.emails.find(e => e.value === action.payload);
      if (email) email.checked = !email.checked;
    },
    selectAllEmails: (state) => {
      const allSelected = !state.allSelected;
      state.allSelected = allSelected;
      state.emails.forEach(email => email.checked = allSelected);
    },
    deselectAllEmails: (state) => {
      state.allSelected = false;
      state.emails.forEach(email => email.checked = false);
    },
  },
});

export const { addEmail, removeEmail, toggleEmail, selectAllEmails, deselectAllEmails, Addtoken } = emailSlice.actions;
export default emailSlice.reducer;
