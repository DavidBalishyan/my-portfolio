import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Notification {
  id: number;
  message: string;
}

const initialState: Notification[] = [];

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<string>) => {
      state.push({ id: Date.now(), message: action.payload });
    },
    removeNotification: (state, action: PayloadAction<number>) => {
      return state.filter(notification => notification.id !== action.payload);
    }
  }
});

export const { addNotification, removeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
