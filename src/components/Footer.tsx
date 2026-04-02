import { providers } from '../assets';

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--bg-04)] px-[10px] py-[20px] pb-[80px]">
      {/* Provider logos grid */}
      <div className="mb-[20px]">
        <h4 className="text-[12px] font-semibold text-white/50 mb-[10px] uppercase tracking-wider">
          Game Providers
        </h4>
        <div className="grid grid-cols-4 gap-2">
          {providers.slice(0, 16).map((src, i) => (
            <button
              key={i}
              onClick={() => console.log(`Provider ${i + 1} clicked`)}
              className="flex items-center justify-center h-[40px] bg-[var(--bg-05)] rounded-lg p-2 cursor-pointer transition-transform active:scale-95 hover:bg-[var(--bg-06)]"
            >
              <img src={src} alt={`Provider ${i + 1}`} className="w-full h-full object-contain opacity-60" />
            </button>
          ))}
        </div>
      </div>

      {/* License info */}
      <div className="border-t border-white/10 pt-[16px]">
        <p className="text-[10px] text-white/30 leading-[1.5] text-center">
          This website is operated by Gaming Corp. and is licensed and regulated by the Government of
          Curacao under the license number 365/JAZ. Gaming Corp. registered address is at Julianaplein 36,
          Willemstad, Curacao.
        </p>

        {/* Responsible gambling icons */}
        <div className="flex items-center justify-center gap-4 mt-[12px]">
          <span className="text-[10px] text-white/30 border border-white/20 rounded px-2 py-1">18+</span>
          <span className="text-[10px] text-white/30 border border-white/20 rounded px-2 py-1">GamCare</span>
          <span className="text-[10px] text-white/30 border border-white/20 rounded px-2 py-1">BeGambleAware</span>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-3 mt-[12px]">
          {['Facebook', 'Twitter', 'Telegram', 'Line'].map((social) => (
            <a
              key={social}
              href="#"
              onClick={(e) => { e.preventDefault(); console.log(`${social} clicked`); }}
              className="w-[32px] h-[32px] rounded-full bg-white/10 flex items-center justify-center cursor-pointer transition-transform active:scale-90 hover:bg-white/20"
            >
              <span className="text-[10px] text-white/50">{social[0]}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
