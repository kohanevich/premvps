export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-14 h-14">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
          </defs>
          {/* Outer frame */}
          <rect x="9" y="9" width="22" height="22" rx="3" fill="none" stroke="#3B82F6" strokeWidth="1" />
          {/* Inner chip */}
          <rect x="12" y="12" width="16" height="16" rx="2" fill="url(#logoGradient)" />
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
      </div>
      
      {/* Brand Name */}
      <div className="flex flex-col leading-tight">
        <span className="text-xl tracking-tight">
          <span className="text-blue-600">Prem</span>
          <span className="text-gray-800">VPS</span>
        </span>
        <span className="text-[10px] text-gray-500 tracking-wider uppercase">Cloud Hosting</span>
      </div>
    </div>
  );
}