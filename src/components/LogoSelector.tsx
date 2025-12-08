import { useState } from 'react';
import { Check } from 'lucide-react';

interface LogoVariantProps {
  selected?: boolean;
  onClick?: () => void;
}

// Variant 1: Sharp Futuristic (no blur)
function Logo1({ selected, onClick }: LogoVariantProps) {
  return (
    <div className={`relative cursor-pointer transition-all ${selected ? 'ring-4 ring-blue-500' : 'hover:scale-105'}`} onClick={onClick}>
      <svg viewBox="0 0 40 40" className="w-20 h-20">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
        </defs>
        {/* Outer frame */}
        <rect x="9" y="9" width="22" height="22" rx="3" fill="none" stroke="#3B82F6" strokeWidth="1" />
        {/* Inner chip */}
        <rect x="12" y="12" width="16" height="16" rx="2" fill="url(#grad1)" />
        {/* Sharp P letter */}
        <text x="20" y="25" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold" fontFamily="Arial, sans-serif">P</text>
        {/* Corner connectors */}
        <circle cx="12" cy="12" r="1.5" fill="#60A5FA" />
        <circle cx="28" cy="12" r="1.5" fill="#60A5FA" />
        <circle cx="12" cy="28" r="1.5" fill="#60A5FA" />
        <circle cx="28" cy="28" r="1.5" fill="#60A5FA" />
        {/* Pins */}
        <rect x="5" y="15" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="5" y="20" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="5" y="25" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="32" y="15" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="32" y="20" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="32" y="25" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
      </svg>
      {selected && <Check className="absolute top-0 right-0 w-6 h-6 text-green-500 bg-white rounded-full" />}
    </div>
  );
}

// Variant 2: Double Frame
function Logo2({ selected, onClick }: LogoVariantProps) {
  return (
    <div className={`relative cursor-pointer transition-all ${selected ? 'ring-4 ring-blue-500' : 'hover:scale-105'}`} onClick={onClick}>
      <svg viewBox="0 0 40 40" className="w-20 h-20">
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
        </defs>
        {/* Outer frame */}
        <rect x="8" y="8" width="24" height="24" rx="3" fill="none" stroke="#3B82F6" strokeWidth="1.2" />
        {/* Middle frame */}
        <rect x="10" y="10" width="20" height="20" rx="2.5" fill="none" stroke="#60A5FA" strokeWidth="0.8" />
        {/* Inner chip */}
        <rect x="12" y="12" width="16" height="16" rx="2" fill="url(#grad2)" />
        {/* P letter */}
        <text x="20" y="25" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold" fontFamily="Arial, sans-serif">P</text>
        {/* Corner connectors */}
        <circle cx="12" cy="12" r="1.5" fill="#60A5FA" />
        <circle cx="28" cy="12" r="1.5" fill="#60A5FA" />
        <circle cx="12" cy="28" r="1.5" fill="#60A5FA" />
        <circle cx="28" cy="28" r="1.5" fill="#60A5FA" />
        {/* Pins */}
        <rect x="4" y="15" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="4" y="20" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="4" y="25" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="33" y="15" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="33" y="20" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="33" y="25" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
      </svg>
      {selected && <Check className="absolute top-0 right-0 w-6 h-6 text-green-500 bg-white rounded-full" />}
    </div>
  );
}

// Variant 3: More Pins (8 per side)
function Logo3({ selected, onClick }: LogoVariantProps) {
  return (
    <div className={`relative cursor-pointer transition-all ${selected ? 'ring-4 ring-blue-500' : 'hover:scale-105'}`} onClick={onClick}>
      <svg viewBox="0 0 40 40" className="w-20 h-20">
        <defs>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
        </defs>
        {/* Outer frame */}
        <rect x="9" y="9" width="22" height="22" rx="3" fill="none" stroke="#3B82F6" strokeWidth="1" />
        {/* Inner chip */}
        <rect x="12" y="12" width="16" height="16" rx="2" fill="url(#grad3)" />
        {/* P letter */}
        <text x="20" y="25" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold" fontFamily="Arial, sans-serif">P</text>
        {/* Corner connectors */}
        <circle cx="12" cy="12" r="1.5" fill="#60A5FA" />
        <circle cx="28" cy="12" r="1.5" fill="#60A5FA" />
        <circle cx="12" cy="28" r="1.5" fill="#60A5FA" />
        <circle cx="28" cy="28" r="1.5" fill="#60A5FA" />
        {/* More pins - 4 per side */}
        <rect x="5" y="13" width="3" height="1" rx="0.3" fill="#60A5FA" />
        <rect x="5" y="17" width="3" height="1" rx="0.3" fill="#60A5FA" />
        <rect x="5" y="21" width="3" height="1" rx="0.3" fill="#60A5FA" />
        <rect x="5" y="25" width="3" height="1" rx="0.3" fill="#60A5FA" />
        <rect x="32" y="13" width="3" height="1" rx="0.3" fill="#60A5FA" />
        <rect x="32" y="17" width="3" height="1" rx="0.3" fill="#60A5FA" />
        <rect x="32" y="21" width="3" height="1" rx="0.3" fill="#60A5FA" />
        <rect x="32" y="25" width="3" height="1" rx="0.3" fill="#60A5FA" />
      </svg>
      {selected && <Check className="absolute top-0 right-0 w-6 h-6 text-green-500 bg-white rounded-full" />}
    </div>
  );
}

// Variant 4: Hexagonal Frame
function Logo4({ selected, onClick }: LogoVariantProps) {
  return (
    <div className={`relative cursor-pointer transition-all ${selected ? 'ring-4 ring-blue-500' : 'hover:scale-105'}`} onClick={onClick}>
      <svg viewBox="0 0 40 40" className="w-20 h-20">
        <defs>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
        </defs>
        {/* Hexagonal outer frame */}
        <path d="M20 7 L30 12 L30 28 L20 33 L10 28 L10 12 Z" fill="none" stroke="#3B82F6" strokeWidth="1.2" />
        {/* Inner chip - square */}
        <rect x="12" y="12" width="16" height="16" rx="2" fill="url(#grad4)" />
        {/* P letter */}
        <text x="20" y="25" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold" fontFamily="Arial, sans-serif">P</text>
        {/* Corner connectors */}
        <circle cx="12" cy="12" r="1.5" fill="#60A5FA" />
        <circle cx="28" cy="12" r="1.5" fill="#60A5FA" />
        <circle cx="12" cy="28" r="1.5" fill="#60A5FA" />
        <circle cx="28" cy="28" r="1.5" fill="#60A5FA" />
        {/* Pins */}
        <rect x="5" y="15" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="5" y="20" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="5" y="25" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="32" y="15" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="32" y="20" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="32" y="25" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
      </svg>
      {selected && <Check className="absolute top-0 right-0 w-6 h-6 text-green-500 bg-white rounded-full" />}
    </div>
  );
}

// Variant 5: Octagonal Frame
function Logo5({ selected, onClick }: LogoVariantProps) {
  return (
    <div className={`relative cursor-pointer transition-all ${selected ? 'ring-4 ring-blue-500' : 'hover:scale-105'}`} onClick={onClick}>
      <svg viewBox="0 0 40 40" className="w-20 h-20">
        <defs>
          <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
        </defs>
        {/* Octagonal outer frame */}
        <path d="M15 8 L25 8 L32 15 L32 25 L25 32 L15 32 L8 25 L8 15 Z" fill="none" stroke="#3B82F6" strokeWidth="1.2" />
        {/* Inner chip */}
        <rect x="12" y="12" width="16" height="16" rx="2" fill="url(#grad5)" />
        {/* P letter */}
        <text x="20" y="25" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold" fontFamily="Arial, sans-serif">P</text>
        {/* Corner connectors */}
        <circle cx="12" cy="12" r="1.5" fill="#60A5FA" />
        <circle cx="28" cy="12" r="1.5" fill="#60A5FA" />
        <circle cx="12" cy="28" r="1.5" fill="#60A5FA" />
        <circle cx="28" cy="28" r="1.5" fill="#60A5FA" />
        {/* Pins */}
        <rect x="5" y="15" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="5" y="20" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="5" y="25" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="32" y="15" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="32" y="20" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="32" y="25" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
      </svg>
      {selected && <Check className="absolute top-0 right-0 w-6 h-6 text-green-500 bg-white rounded-full" />}
    </div>
  );
}

// Variant 6: Thick Border
function Logo6({ selected, onClick }: LogoVariantProps) {
  return (
    <div className={`relative cursor-pointer transition-all ${selected ? 'ring-4 ring-blue-500' : 'hover:scale-105'}`} onClick={onClick}>
      <svg viewBox="0 0 40 40" className="w-20 h-20">
        <defs>
          <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
        </defs>
        {/* Thick outer frame */}
        <rect x="9" y="9" width="22" height="22" rx="3" fill="none" stroke="#3B82F6" strokeWidth="2" />
        {/* Inner chip */}
        <rect x="12" y="12" width="16" height="16" rx="2" fill="url(#grad6)" />
        {/* P letter */}
        <text x="20" y="25" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold" fontFamily="Arial, sans-serif">P</text>
        {/* Corner connectors - larger */}
        <circle cx="12" cy="12" r="2" fill="#60A5FA" />
        <circle cx="28" cy="12" r="2" fill="#60A5FA" />
        <circle cx="12" cy="28" r="2" fill="#60A5FA" />
        <circle cx="28" cy="28" r="2" fill="#60A5FA" />
        {/* Pins */}
        <rect x="4" y="15" width="4" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="4" y="20" width="4" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="4" y="25" width="4" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="32" y="15" width="4" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="32" y="20" width="4" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="32" y="25" width="4" height="1.5" rx="0.5" fill="#60A5FA" />
      </svg>
      {selected && <Check className="absolute top-0 right-0 w-6 h-6 text-green-500 bg-white rounded-full" />}
    </div>
  );
}

// Variant 7: Circular Corners
function Logo7({ selected, onClick }: LogoVariantProps) {
  return (
    <div className={`relative cursor-pointer transition-all ${selected ? 'ring-4 ring-blue-500' : 'hover:scale-105'}`} onClick={onClick}>
      <svg viewBox="0 0 40 40" className="w-20 h-20">
        <defs>
          <linearGradient id="grad7" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
        </defs>
        {/* Outer frame with very round corners */}
        <rect x="9" y="9" width="22" height="22" rx="5" fill="none" stroke="#3B82F6" strokeWidth="1" />
        {/* Inner chip */}
        <rect x="12" y="12" width="16" height="16" rx="3" fill="url(#grad7)" />
        {/* P letter */}
        <text x="20" y="25" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold" fontFamily="Arial, sans-serif">P</text>
        {/* Corner connectors - positioned at rounded corners */}
        <circle cx="13" cy="13" r="1.5" fill="#60A5FA" />
        <circle cx="27" cy="13" r="1.5" fill="#60A5FA" />
        <circle cx="13" cy="27" r="1.5" fill="#60A5FA" />
        <circle cx="27" cy="27" r="1.5" fill="#60A5FA" />
        {/* Pins */}
        <rect x="5" y="15" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="5" y="20" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="5" y="25" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="32" y="15" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="32" y="20" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="32" y="25" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
      </svg>
      {selected && <Check className="absolute top-0 right-0 w-6 h-6 text-green-500 bg-white rounded-full" />}
    </div>
  );
}

// Variant 8: Edge Connectors (top & bottom pins too)
function Logo8({ selected, onClick }: LogoVariantProps) {
  return (
    <div className={`relative cursor-pointer transition-all ${selected ? 'ring-4 ring-blue-500' : 'hover:scale-105'}`} onClick={onClick}>
      <svg viewBox="0 0 40 40" className="w-20 h-20">
        <defs>
          <linearGradient id="grad8" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
        </defs>
        {/* Outer frame */}
        <rect x="9" y="9" width="22" height="22" rx="3" fill="none" stroke="#3B82F6" strokeWidth="1" />
        {/* Inner chip */}
        <rect x="12" y="12" width="16" height="16" rx="2" fill="url(#grad8)" />
        {/* P letter */}
        <text x="20" y="25" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold" fontFamily="Arial, sans-serif">P</text>
        {/* Corner connectors */}
        <circle cx="12" cy="12" r="1.5" fill="#60A5FA" />
        <circle cx="28" cy="12" r="1.5" fill="#60A5FA" />
        <circle cx="12" cy="28" r="1.5" fill="#60A5FA" />
        <circle cx="28" cy="28" r="1.5" fill="#60A5FA" />
        {/* Side pins */}
        <rect x="5" y="15" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="5" y="20" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="5" y="25" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="32" y="15" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="32" y="20" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="32" y="25" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        {/* Top & bottom pins */}
        <rect x="15" y="5" width="1.5" height="3" rx="0.5" fill="#60A5FA" />
        <rect x="20" y="5" width="1.5" height="3" rx="0.5" fill="#60A5FA" />
        <rect x="25" y="5" width="1.5" height="3" rx="0.5" fill="#60A5FA" />
        <rect x="15" y="32" width="1.5" height="3" rx="0.5" fill="#60A5FA" />
        <rect x="20" y="32" width="1.5" height="3" rx="0.5" fill="#60A5FA" />
        <rect x="25" y="32" width="1.5" height="3" rx="0.5" fill="#60A5FA" />
      </svg>
      {selected && <Check className="absolute top-0 right-0 w-6 h-6 text-green-500 bg-white rounded-full" />}
    </div>
  );
}

// Variant 9: Gradient Border
function Logo9({ selected, onClick }: LogoVariantProps) {
  return (
    <div className={`relative cursor-pointer transition-all ${selected ? 'ring-4 ring-blue-500' : 'hover:scale-105'}`} onClick={onClick}>
      <svg viewBox="0 0 40 40" className="w-20 h-20">
        <defs>
          <linearGradient id="grad9" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
          <linearGradient id="borderGrad9" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        {/* Outer frame with gradient stroke */}
        <rect x="9" y="9" width="22" height="22" rx="3" fill="none" stroke="url(#borderGrad9)" strokeWidth="1.5" />
        {/* Inner chip */}
        <rect x="12" y="12" width="16" height="16" rx="2" fill="url(#grad9)" />
        {/* P letter */}
        <text x="20" y="25" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold" fontFamily="Arial, sans-serif">P</text>
        {/* Corner connectors */}
        <circle cx="12" cy="12" r="1.5" fill="#60A5FA" />
        <circle cx="28" cy="12" r="1.5" fill="#60A5FA" />
        <circle cx="12" cy="28" r="1.5" fill="#60A5FA" />
        <circle cx="28" cy="28" r="1.5" fill="#60A5FA" />
        {/* Pins */}
        <rect x="5" y="15" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="5" y="20" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="5" y="25" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="32" y="15" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="32" y="20" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
        <rect x="32" y="25" width="3" height="1.5" rx="0.5" fill="#60A5FA" />
      </svg>
      {selected && <Check className="absolute top-0 right-0 w-6 h-6 text-green-500 bg-white rounded-full" />}
    </div>
  );
}

// Variant 10: Minimal Clean
function Logo10({ selected, onClick }: LogoVariantProps) {
  return (
    <div className={`relative cursor-pointer transition-all ${selected ? 'ring-4 ring-blue-500' : 'hover:scale-105'}`} onClick={onClick}>
      <svg viewBox="0 0 40 40" className="w-20 h-20">
        <defs>
          <linearGradient id="grad10" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
        </defs>
        {/* Simple thin outer frame */}
        <rect x="10" y="10" width="20" height="20" rx="3" fill="none" stroke="#3B82F6" strokeWidth="0.8" />
        {/* Inner chip */}
        <rect x="12" y="12" width="16" height="16" rx="2" fill="url(#grad10)" />
        {/* P letter */}
        <text x="20" y="25" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold" fontFamily="Arial, sans-serif">P</text>
        {/* Minimal corner dots */}
        <circle cx="12" cy="12" r="1" fill="#60A5FA" />
        <circle cx="28" cy="12" r="1" fill="#60A5FA" />
        <circle cx="12" cy="28" r="1" fill="#60A5FA" />
        <circle cx="28" cy="28" r="1" fill="#60A5FA" />
        {/* Minimal pins - only 2 per side */}
        <rect x="6" y="17" width="3" height="1.2" rx="0.5" fill="#60A5FA" />
        <rect x="6" y="23" width="3" height="1.2" rx="0.5" fill="#60A5FA" />
        <rect x="31" y="17" width="3" height="1.2" rx="0.5" fill="#60A5FA" />
        <rect x="31" y="23" width="3" height="1.2" rx="0.5" fill="#60A5FA" />
      </svg>
      {selected && <Check className="absolute top-0 right-0 w-6 h-6 text-green-500 bg-white rounded-full" />}
    </div>
  );
}

const logos = [
  { id: 1, component: Logo1, name: 'Sharp Futuristic', desc: 'Clean without blur effect' },
  { id: 2, component: Logo2, name: 'Double Frame', desc: 'Two-layer border design' },
  { id: 3, component: Logo3, name: 'More Pins', desc: '4 pins per side (8 total)' },
  { id: 4, component: Logo4, name: 'Hexagonal', desc: 'Hexagon outer frame' },
  { id: 5, component: Logo5, name: 'Octagonal', desc: 'Octagon shape frame' },
  { id: 6, component: Logo6, name: 'Thick Border', desc: 'Bold frame & connectors' },
  { id: 7, component: Logo7, name: 'Circular Corners', desc: 'Very rounded corners' },
  { id: 8, component: Logo8, name: 'Full Pins', desc: 'Pins on all 4 sides' },
  { id: 9, component: Logo9, name: 'Gradient Border', desc: 'Gradient stroke frame' },
  { id: 10, component: Logo10, name: 'Minimal Clean', desc: 'Ultra-minimal design' },
];

export function LogoSelector() {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (id: number) => {
    setSelected(id);
    console.log(`Selected logo variant: ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl text-gray-900 mb-4">
            Выберите логотип для PremVPS
          </h1>
          <p className="text-lg text-gray-600">
            Кликните на понравившийся вариант
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {logos.map((logo) => {
            const LogoComponent = logo.component;
            return (
              <div key={logo.id} className="flex flex-col items-center gap-3">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <LogoComponent 
                    selected={selected === logo.id} 
                    onClick={() => handleSelect(logo.id)}
                  />
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-900">{logo.name}</div>
                  <div className="text-xs text-gray-500">{logo.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

        {selected && (
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center">
            <p className="text-lg text-gray-700">
              ✅ Вы выбрали вариант <span className="font-bold">#{selected}</span> - {logos[selected - 1].name}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Сообщите мне номер, и я обновлю логотип на всём сайте
            </p>
          </div>
        )}
      </div>
    </div>
  );
}