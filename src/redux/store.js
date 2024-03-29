import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux"; //INFO: We basically imported cartSlice.reducer value
import userReducer from "./userRedux";
import { 
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'; //INFO: How to import persistance.
  import storage from 'redux-persist/lib/storage'



const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers({user:userReducer, cart:cartReducer}); //INFO: How to combine reducers.

const persistedReducer = persistReducer(persistConfig, rootReducer); //TIP: persist userReducer, in this way user info in the userRedux does not go away.

export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


export const persistor = persistStore(store);  //INFO: How to export persistStores, after this go to index.js and provide PersistGate