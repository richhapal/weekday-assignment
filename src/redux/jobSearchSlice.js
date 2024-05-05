import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobsList: [],
  jobFilters: {},
};

const jobSearchSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    updateJobList(state, action) {
      state.jobsList = action.payload.value;
    },
  },
});

export const { updateJobList } = jobSearchSlice.actions;
export default jobSearchSlice.reducer;
