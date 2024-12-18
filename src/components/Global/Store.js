// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import emailReducer from './Slice';
import templateReducer from './TemplateSlice';

const store = configureStore({
  reducer: {
    emails: emailReducer,
    templates: templateReducer,
  },
});

export default store;
