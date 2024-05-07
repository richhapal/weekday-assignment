import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobsList: [],
  jobFilters: {
    minExp: null,
    jobRole: null,
    minJdSalary: null,
  },
};

const jobSearchSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    updateJobList(state, action) {
      state.jobsList = action.payload.value;
    },
    updateJobFilters(state, action) {
      state.jobFilters = action.payload.value;
    },
  },
});

export const { updateJobList, updateJobFilters } = jobSearchSlice.actions;
export default jobSearchSlice.reducer;
