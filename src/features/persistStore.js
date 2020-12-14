import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {createBlacklistFilter} from 'redux-persist-transform-filter';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './rootReducer';

const blacklistFilter = createBlacklistFilter('user', ['users']);

const rootPersistConfig = {
  key: 'root',
  version: 1,
  storage: storage,
  stateReconciler: autoMergeLevel2,
  whitelist: [
    'account',
    'cart',
    'language',
    'location'
  ],
  transform: [blacklistFilter]
}

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)


// đóng gói reducer gốc trong app
export const store = createStore(persistedReducer);
// đảm bảo redux state sẽ được lưu vào storage mỗi khi nó thay đổi
export const persistor = persistStore(store);

// export default persistedReducer;