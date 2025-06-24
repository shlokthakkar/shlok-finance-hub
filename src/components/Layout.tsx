
import React from 'react';
import { TooltipProvider } from "@/components/ui/tooltip";
import { useScrollToTop } from '@/hooks/useScrollToTop';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useScrollToTop();

  return (
    <div className="flex flex-col min-h-screen">
      <TooltipProvider>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </TooltipProvider>
    </div>
  );
};

export default Layout;
