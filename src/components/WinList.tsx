import { useState } from 'react';
import { winListData } from '../assets';

function WinListRows() {
  return (
    <>
      {winListData.map((item, i) => (
        <div
          key={i}
          className={`flex items-center justify-between h-[60px] shrink-0 ${
            i % 2 === 1 ? 'bg-[var(--bg-04)]' : ''
          }`}
        >
          <div className="flex items-center gap-[6px] px-[10px] w-[220px]">
            <span className="text-[12px] text-white font-normal w-[24px]">
              {String(item.rank).padStart(2, '0')}.
            </span>
            <div className="w-[40px] h-[40px] flex items-center justify-center shrink-0">
              <img
                src={item.gameImg}
                alt={item.game}
                className="w-[34px] h-[34px] rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[12px] font-semibold text-white leading-[14px]">
                {item.username}
              </span>
              <span className="text-[12px] text-[var(--text-accent-01)] underline leading-[14px] truncate">
                {item.game}
              </span>
            </div>
          </div>
          <div className="px-[10px]">
            <span className="text-[14px] text-[var(--text-heading5)] whitespace-nowrap">
              {item.amount}
            </span>
          </div>
        </div>
      ))}
    </>
  );
}

export default function WinList() {
  const [activeTab, setActiveTab] = useState<'win' | 'ranking'>('win');

  return (
    <div className="w-full px-[10px] py-[20px] bg-[var(--bg-06)]">
      {/* Tab switcher */}
      <div className="bg-[var(--bg-05)] rounded-[48px] p-[6px] mb-[10px]">
        <div className="flex">
          <button
            onClick={() => setActiveTab('win')}
            className={`flex-1 h-[42px] rounded-[64px] flex items-center justify-center text-[12px] font-semibold transition-all ${
              activeTab === 'win'
                ? 'bg-gradient-to-b from-[var(--secondary-01)] to-[var(--secondary-03)] text-black'
                : 'text-white'
            }`}
          >
            Win list
          </button>
          <button
            onClick={() => setActiveTab('ranking')}
            className={`flex-1 h-[42px] rounded-[64px] flex items-center justify-center text-[12px] font-semibold transition-all ${
              activeTab === 'ranking'
                ? 'bg-gradient-to-b from-[var(--secondary-01)] to-[var(--secondary-03)] text-black'
                : 'text-white'
            }`}
          >
            Ranking D&T
          </button>
        </div>
      </div>

      {/* Auto-scrolling win list */}
      <div className="bg-[var(--bg-06)] overflow-hidden h-[300px] relative group">
        <div className="animate-scroll-up group-hover:[animation-play-state:paused] flex flex-col">
          <WinListRows />
          <WinListRows />
        </div>
      </div>
    </div>
  );
}
