import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, name: "ganjar pranowo" },
  { id: 1, name: "anis baswedan" },
  { id: 2, name: "jokowidodo" },
  { id: 3, name: "gibran rakabuming" },
  { id: 4, name: "prabowo subianto" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default userSlice.reducer;
