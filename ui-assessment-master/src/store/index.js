import { configureStore } from '@reduxjs/toolkit';
import accountOverviewReducer from './AccountOverview';

export default configureStore({
  reducer: {
    accountOverview: accountOverviewReducer,
  },
});
