import Header from './components/Header';
import PromoBanner from './components/PromoBanner';
import CategoryTabs from './components/CategoryTabs';
import ProviderIcons from './components/ProviderIcons';
import GameSection from './components/GameSection';
import WinList from './components/WinList';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import { gameCards, topPickGames, iconFire } from './assets';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--primary-06)]">
      <Header />
      <PromoBanner />
      <CategoryTabs />
      <ProviderIcons />
      <GameSection title="Top Picks" games={topPickGames} icon={iconFire} />
      <GameSection title="Popular Games" games={gameCards} />
      <WinList />
      <Footer />
      <BottomNav />
    </div>
  );
}
