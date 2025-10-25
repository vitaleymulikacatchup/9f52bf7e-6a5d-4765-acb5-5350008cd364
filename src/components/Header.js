import React from 'react';
import { Menu } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white border-b border-google-border">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-4">
          <span className="text-google-text-secondary text-sm">Om</span>
          <span className="text-google-text-secondary text-sm">Store</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="text-google-text-secondary text-sm hover:underline cursor-pointer">Gmail</span>
          <span className="text-google-text-secondary text-sm hover:underline cursor-pointer">Bilder</span>
          <Menu className="w-6 h-6 text-google-text-secondary cursor-pointer" />
          <button className="google-button google-button-primary">
            Logga in
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;