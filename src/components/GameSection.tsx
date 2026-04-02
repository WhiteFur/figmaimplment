import GameCard from './GameCard';

interface Game {
  name: string;
  image: string;
  gradient: [string, string];
}

interface GameSectionProps {
  title: string;
  games: Game[];
  icon?: string;
}

export default function GameSection({ title, games, icon }: GameSectionProps) {
  return (
    <div className="w-full bg-[var(--bg-06)] py-[10px]">
      {/* Section header */}
      <div className="flex items-center justify-between px-[10px] mb-[10px]">
        <div className="flex items-center gap-2">
          {icon && <img src={icon} alt="" className="w-[20px] h-[20px]" />}
          <h3 className="font-semibold text-[14px] text-white">{title}</h3>
        </div>
        <button
          onClick={() => console.log(`See All: ${title}`)}
          className="text-[12px] text-[var(--text-accent-01)] font-semibold transition-transform active:scale-95"
        >
          See All
        </button>
      </div>

      {/* Horizontal scrolling game cards */}
      <div className="flex gap-[10px] overflow-x-auto scrollbar-hide px-[10px]">
        {games.map((game, i) => (
          <GameCard
            key={i}
            name={game.name}
            image={game.image}
            gradient={game.gradient}
            faded={i >= games.length - 2}
            onClick={() => console.log(`Play: ${game.name}`)}
          />
        ))}
      </div>
    </div>
  );
}
