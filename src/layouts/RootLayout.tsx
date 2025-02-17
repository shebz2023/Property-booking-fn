import React from 'react';
import { Outlet } from 'react-router-dom';

export const RootLayout: React.FC = () => {
  return (
    <div>
       <main>
        <Outlet />
      </main>
    </div>
  );
};
