import React from 'react';
import Navigaion from './components/Navigation';
import { ReactNode } from './types';
import { navItem } from './types';

function App({ navItems, children }: { navItems: navItem[], children: ReactNode }) {
  return (
    <div className="app">
      <Navigaion navItems={navItems} />
      {children}
    </div>
  );
}

export default App;

