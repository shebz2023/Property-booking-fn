import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export const RootLayout: React.FC = () => {
  return (
    <div>
       <main>
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
};
