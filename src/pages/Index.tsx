
import React from 'react';
import HomePage from './HomePage';
import { useLocation } from 'react-router-dom';

const Index = () => {
  const location = useLocation();
  
  // If we're at exactly /, render the HomePage
  if (location.pathname === '/') {
    return <HomePage />;
  }
  
  // For any other paths, let the router in App.tsx handle it
  return null;
};

export default Index;
