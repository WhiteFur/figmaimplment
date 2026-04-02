import { logo, iconCoins } from '../assets';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-[60px] items-center justify-between bg-[var(--bg-header)] px-[14px] py-[5px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.2),0px_2px_4px_-1px_rgba(0,0,0,0.12)]">
      <img src={logo} alt="Logo" className="h-[44px] w-[70px] object-contain" />

      <div className="flex flex-1 items-center justify-center ml-2">
        {/* Wallet balance */}
        <div className="flex flex-1 h-[46px] items-center bg-[var(--bg-05)] rounded-l px-[10px]">
          <span className="font-semibold text-[12px] text-white font-['Inter']">
            ฿ 000,000.000000
          </span>
        </div>

        {/* Deposit button */}
        <button
          onClick={() => console.log('Deposit clicked')}
          className="flex items-center justify-center h-[46px] px-4 rounded-r bg-gradient-to-b from-[var(--secondary-01)] to-[var(--secondary-03)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.2),0px_1px_2px_0px_rgba(0,0,0,0.12)] transition-transform active:scale-95"
        >
          <img src={iconCoins} alt="Deposit" className="w-[14px] h-[14px]" />
        </button>
      </div>
    </header>
  );
}
