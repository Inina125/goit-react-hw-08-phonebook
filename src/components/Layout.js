import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import TopBar from './topBar/TopBar';

export const Layout = () => {
  return (
    <>
      <TopBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
