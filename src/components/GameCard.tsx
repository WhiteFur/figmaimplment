interface GameCardProps {
  name: string;
  image: string;
  gradient: [string, string];
  faded?: boolean;
  onClick?: () => void;
}

export default function GameCard({ name, image, gradient, faded, onClick }: GameCardProps) {
  return (
    <button
      onClick={onClick}
      className={`relative shrink-0 w-[110px] h-[183px] rounded-[10px] overflow-hidden shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer transition-transform duration-150 active:scale-95 group ${
        faded ? 'opacity-30' : ''
      }`}
    >
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Default gradient overlay with game name */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[80px] flex items-center justify-center px-1 py-[2px] rounded-b-[8px] transition-opacity group-hover:opacity-0"
        style={{
          background: `linear-gradient(to bottom, ${gradient[0]} 0%, ${gradient[1]}80 50%, ${gradient[1]} 100%)`,
        }}
      >
        <p className="font-['Oswald'] font-medium text-[20px] leading-[1.14] text-white text-center drop-shadow-[0px_1px_3px_rgba(0,0,0,0.3)]">
          {name}
        </p>
      </div>
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[var(--bg-card-hover)] rounded-[10px] flex flex-col items-center justify-between p-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-[12px] text-white leading-normal w-full">{name}</p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M8 5v14l11-7z" />
        </svg>
        <p className="text-[12px] text-white/70 leading-normal w-full">Play Now</p>
      </div>
    </button>
  );
}
