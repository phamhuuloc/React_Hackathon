import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const voucherSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});
// dispatch(setUser(user))
// const user = userSelector(state => state.user)

// Action creators are generated for each case reducer function
export const { setCategory } = voucherSlice.actions;

export default voucherSlice.reducer;
