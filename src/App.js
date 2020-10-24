import React from 'react';
import RootRouter from './RootRouter';

import './App.scss';
import './common/config/i18n';

function App() {
  return (
    <div className="App" style={{ background: '#E5E5E5' }}>
      <RootRouter />
    </div>
  );
}

export default App;
