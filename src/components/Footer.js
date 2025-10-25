import React from 'react';

function Footer() {
  return (
    <footer className="bg-google-light-gray border-t border-google-border">
      <div className="px-4 py-3">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-google-text-secondary">Sverige</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center sm:justify-end space-x-4 text-sm text-google-text-secondary">
            <button className="hover:underline">Annonsering</button>
            <button className="hover:underline">Företagslösningar</button>
            <button className="hover:underline">Så fungerar Sök</button>
            <span className="text-green-600">🍃 Koldioxidneutralt sedan 2007</span>
            <button className="hover:underline">Integritet</button>
            <button className="hover:underline">Villkor</button>
            <button className="hover:underline">Inställningar</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;