import { useState } from 'react';
import { providers } from '../assets';

export default function ProviderIcons() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-full bg-[var(--bg-06)] px-[10px] py-[10px]">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {providers.map((src, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveIndex(i);
              console.log(`Provider ${i + 1} selected`);
            }}
            className={`shrink-0 flex items-center justify-center w-[50px] h-[50px] rounded-lg p-1 cursor-pointer transition-all active:scale-95 ${
              i === activeIndex
                ? 'border-2 border-[var(--secondary-01)] bg-[var(--bg-04)] opacity-100'
                : 'bg-[var(--bg-05)] opacity-60 hover:opacity-80'
            }`}
          >
            <img src={src} alt={`Provider ${i + 1}`} className="w-full h-full object-contain" />
          </button>
        ))}
      </div>
    </div>
  );
}
