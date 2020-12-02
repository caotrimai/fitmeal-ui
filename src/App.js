import React from 'react';
import RootRouter from './RootRouter';
import {store, persistor} from './features/persistStore'
import { PersistGate } from 'redux-persist/integration/react'

import './App.scss';
import './common/config/i18n';

function App() {
  return (
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
    <div className="App" style={{ background: '#E5E5E5' }}>
      <RootRouter />
    </div>
    </PersistGate>
  );
}

export default App;
