import React from 'react';
import Navigaion from './components/Navigation';
import { ReactNode } from './types';
import { NavItem } from './types';

function App({ navItems, children }: { navItems: Array<NavItem>, children: ReactNode }) {
  return (
    <div className="app">
      <Navigaion navItems={navItems} />
      {children}
    </div>
  );
}

export default App;

