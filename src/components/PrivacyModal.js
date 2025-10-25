import React from 'react';
import { Globe, Settings, Eye, Shield, Target, TrendingUp } from 'lucide-react';

function PrivacyModal() {
  return (
    <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full mx-4">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-google-border">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-google-blue rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">G</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4 text-google-text-secondary" />
            <span className="text-sm text-google-text-secondary">SV</span>
          </div>
          <button className="text-google-blue text-sm hover:underline">
            Logga in
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h1 className="text-2xl font-normal text-google-text mb-6">
          Innan du fortsätter till Google
        </h1>
        
        <div className="space-y-4 mb-6">
          <p className="text-sm text-google-text-secondary">
            Vi använder cookies och data för att
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Settings className="w-4 h-4 text-google-text-secondary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-google-text-secondary">
                leverera och underhålla Googles tjänster
              </span>
            </div>
            
            <div className="flex items-start space-x-3">
              <Shield className="w-4 h-4 text-google-text-secondary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-google-text-secondary">
                spåra avbrott och skydda mot spam, bedrägerier och otillåten användning
              </span>
            </div>
            
            <div className="flex items-start space-x-3">
              <TrendingUp className="w-4 h-4 text-google-text-secondary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-google-text-secondary">
                mäta målgruppsengagemang och webbplatsstatistik så att vi kan analysera hur våra tjänster används och förbättra tjänsternas kvalitet.
              </span>
            </div>
          </div>
        </div>
        
        <div className="space-y-4 mb-6">
          <p className="text-sm text-google-text-secondary">
            Om du väljer knappen Godkänn alla använder vi även cookies och data för att
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Target className="w-4 h-4 text-google-text-secondary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-google-text-secondary">
                utveckla och förbättra nya tjänster
              </span>
            </div>
            
            <div className="flex items-start space-x-3">
              <TrendingUp className="w-4 h-4 text-google-text-secondary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-google-text-secondary">
                leverera annonser och mäta hur effektiva de är
              </span>
            </div>
            
            <div className="flex items-start space-x-3">
              <Eye className="w-4 h-4 text-google-text-secondary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-google-text-secondary">
                visa anpassat innehåll utifrån dina inställningar
              </span>
            </div>
            
            <div className="flex items-start space-x-3">
              <Target className="w-4 h-4 text-google-text-secondary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-google-text-secondary">
                visa anpassade annonser utifrån dina inställningar
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-google-text-secondary mb-4">
          Om du väljer knappen Avvisa alla använder vi inte cookies i dessa ytterligare syften.
        </p>
        
        <p className="text-sm text-google-text-secondary mb-6">
          Innehåll utan anpassning påverkas bland annat av vad du tittar på för tillfället, aktivitet i din aktiva söksession och din plats. Innehåll utan anpassning påverkas bland annat av vad du tittar på för tillfället och din ungefärliga plats. Innehåll och annonser med anpassning kan även omfatta mer relevanta resultat, rekommendationer och anpassade annonser utifrån tidigare aktivitet i webbläsaren, till exempel tidigare sökningar på Google. Vi använder även cookies och data för att anpassa upplevelsen efter lämplighet för din målgrupp, om tillämpligt.
        </p>
        
        <p className="text-sm text-google-text-secondary mb-6">
          Välj knappen Fler alternativ för mer information, till exempel om hur du hanterar dina integritetsinstallningar. Du kan även besöka g.co/privacytools när som helst.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <button className="google-button google-button-secondary flex-1">
            Avvisa alla
          </button>
          <button className="google-button google-button-primary flex-1">
            Godkänn alla
          </button>
        </div>
        
        <div className="text-center">
          <button className="google-link text-sm">
            Fler alternativ
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <div className="flex justify-center space-x-6 py-4 border-t border-google-border">
        <button className="google-link text-sm">
          Integritet
        </button>
        <button className="google-link text-sm">
          Villkor
        </button>
      </div>
    </div>
  );
}

export default PrivacyModal;