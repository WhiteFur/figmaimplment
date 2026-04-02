import { useState, type ReactNode } from 'react';

const navItems: { name: string; icon: ReactNode; isCenter?: boolean }[] = [
  {
    name: 'Home',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3l9 8v10a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1V11l9-8z" />
      </svg>
    ),
  },
  {
    name: 'Promos',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 7h-1.68A3 3 0 0 0 12 4.26 3 3 0 0 0 5.68 7H4a2 2 0 0 0-2 2v2h20V9a2 2 0 0 0-2-2zM9 7a1 1 0 1 1 0-2 1 1 0 0 1 1 1c0 .28-.11.53-.3.71A1 1 0 0 1 9 7zm6 0a1 1 0 0 1-.7-.29A1 1 0 0 1 14 6a1 1 0 1 1 1 1zM2 12v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8h-9v1a1 1 0 0 1-2 0v-1H2z" />
      </svg>
    ),
  },
  {
    name: 'Deposit',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
      </svg>
    ),
    isCenter: true,
  },
  {
    name: 'History',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 3a9 9 0 0 0-9 9H1l4 4 4-4H6a7 7 0 1 1 2.05 4.95l-1.41 1.41A9 9 0 1 0 13 3zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
      </svg>
    ),
  },
  {
    name: 'Profile',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z" />
      </svg>
    ),
  },
];

export default function BottomNav() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[375px] h-[60px] bg-[var(--bg-header)] border-t border-white/10 flex items-center justify-around z-50 shadow-[0px_-2px_10px_rgba(0,0,0,0.3)]">
      {navItems.map((item, i) => (
        <button
          key={item.name}
          onClick={() => setActiveIndex(i)}
          className={`flex flex-col items-center justify-center gap-[2px] transition-transform active:scale-90 ${
            item.isCenter ? '-mt-[16px]' : ''
          }`}
        >
          {item.isCenter ? (
            <div className="w-[48px] h-[48px] rounded-full bg-gradient-to-b from-[var(--secondary-01)] to-[var(--secondary-03)] flex items-center justify-center shadow-[0px_2px_8px_rgba(249,184,0,0.4)] text-black">
              {item.icon}
            </div>
          ) : (
            <span className={i === activeIndex ? 'text-[var(--secondary-01)]' : 'text-white/70'}>
              {item.icon}
            </span>
          )}
          <span
            className={`text-[10px] font-semibold ${
              i === activeIndex ? 'text-[var(--secondary-01)]' : 'text-white/70'
            } ${item.isCenter ? 'text-[var(--secondary-01)]' : ''}`}
          >
            {item.name}
          </span>
        </button>
      ))}
    </nav>
  );
}
