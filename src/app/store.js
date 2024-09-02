import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';

export default configureStore({
  reducer: {
    [cryptoApi.reducer]: cryptoApi.reducer,
    [cryptoNewsApi.reducer]: cryptoNewsApi.reducer,
  },
});