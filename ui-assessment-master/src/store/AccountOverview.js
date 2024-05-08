import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  supportContact: {
    name: 'John Smith',
    email: 'john.smith@feefo.com',
    phone: '020 3362 4208',
  },
  salesOverview: {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4,
    lastUploadDate: 1605001226079,
  },
};

const accountOverview = createSlice({
  name: 'accountOverview',
  initialState,
  reducers: {},
});

export const {} = accountOverview.actions;

export default accountOverview.reducer;
