import { useState, type ReactNode } from 'react';

const categories: { name: string; icon: ReactNode }[] = [
  {
    name: 'Search',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    name: 'Hot',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 23c-3.6 0-8-2.4-8-7.5 0-4 3-7.5 4-9.5.2-.4.7-.5 1-.2.2.1.3.3.3.5 0 1.8 1 3.2 2 4.5C12.3 9.2 13 7.5 13 5c0-.4.3-.8.7-.9.4-.1.8 0 1 .3C17 7.5 20 11.5 20 15.5 20 20.6 15.6 23 12 23z" />
      </svg>
    ),
  },
  {
    name: 'Recent',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    name: 'Slots',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="4" width="20" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M8 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
        <line x1="12" y1="4" x2="12" y2="20" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'Live Casino',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2z" />
      </svg>
    ),
  },
  {
    name: 'Sports',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2c3 3 4 7 4 10s-1 7-4 10M12 2c-3 3-4 7-4 10s1 7 4 10M2 12h20" />
      </svg>
    ),
  },
  {
    name: 'Fishing',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2l-4 4m0 0l4 4m-4-4h8" />
        <path d="M14 6v10c0 2-2 4-4 4s-4-2-4-4" />
        <circle cx="6" cy="18" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Lottery',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 9l10-7 10 7v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9z" fill="none" />
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'Cockfight',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 8c-.55 0-1-.45-1-1 0-.28.11-.53.3-.71.04-.04-.01-.14-.1-.12C18.13 6.4 17 7.1 17 8c0 .55-.45 1-1 1h-1.58c-.28 0-.55.06-.8.17L9.43 11.2a2 2 0 0 0-1.12 1.61L8 16l-4 4h5l2-3 5-1c1.1 0 2-.9 2-2v-1h1c1.1 0 2-.9 2-2s-.9-3-1-3z" />
      </svg>
    ),
  },
];

export default function CategoryTabs() {
  const [activeIndex, setActiveIndex] = useState(3); // Slots is default active

  return (
    <div className="w-full bg-[var(--bg-05)] py-2">
      <div className="flex gap-1 overflow-x-auto scrollbar-hide px-2">
        {categories.map((cat, i) => (
          <button
            key={cat.name}
            onClick={() => setActiveIndex(i)}
            className={`flex flex-col items-center justify-center shrink-0 w-[60px] h-[60px] rounded-lg gap-1 text-[10px] font-semibold transition-all active:scale-90 ${
              i === activeIndex
                ? 'bg-gradient-to-b from-[var(--secondary-01)] to-[var(--secondary-03)] text-black'
                : 'text-white/70 hover:text-white'
            }`}
          >
            {cat.icon}
            <span>{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
