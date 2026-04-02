// Logos
export const logo = '/assets/logo.png';

// Promo
export const promoBanner = '/assets/promo-banner.png';

// Icons
export const iconCoins = '/assets/icon-coins.svg';
export const iconPlay = '/assets/icon-play.svg';
export const iconArrowDown = '/assets/icon-arrow-down.svg';
export const iconSearch = '/assets/icon-search.svg';
export const iconFire = '/assets/icon-fire.svg';
export const iconRecent = '/assets/icon-recent.svg';

// Category icons
export const catIcon1 = '/assets/cat-icon-1.png';
export const catIcon2 = '/assets/cat-icon-2.png';
export const catIcon3 = '/assets/cat-icon-3.png';

// Nav icons
export const navIconHome = '/assets/nav-icon-home.svg';
export const navIconPromo = '/assets/nav-icon-promo.svg';
export const navIconDeposit = '/assets/nav-icon-deposit.svg';
export const navIconHistory = '/assets/nav-icon-history.svg';
export const navIconProfile = '/assets/nav-icon-profile.svg';

// Provider logos
export const providers = Array.from({ length: 16 }, (_, i) => `/assets/provider-${i + 1}.svg`);

// Game card placeholders using picsum
export const gameCards: { name: string; image: string; gradient: [string, string] }[] = [
  { name: 'Pyramid Raider', image: 'https://picsum.photos/seed/pyramid/110/183', gradient: ['rgba(244,191,0,0)', '#f4bf00'] },
  { name: 'Baccarat Live', image: 'https://picsum.photos/seed/baccarat/110/183', gradient: ['rgba(150,47,20,0)', '#962f14'] },
  { name: 'Three Card Poker', image: 'https://picsum.photos/seed/poker/110/183', gradient: ['rgba(219,105,0,0)', '#db6900'] },
  { name: 'Darts Championship', image: 'https://picsum.photos/seed/darts/110/183', gradient: ['rgba(41,149,255,0)', '#2995ff'] },
  { name: 'WIN WIN NEKO', image: 'https://picsum.photos/seed/neko/110/183', gradient: ['rgba(255,168,63,0)', '#ffa83f'] },
  { name: 'Wild Bandito', image: 'https://picsum.photos/seed/bandito/110/183', gradient: ['rgba(158,80,216,0)', '#9e50d8'] },
  { name: 'Money Bingo', image: 'https://picsum.photos/seed/bingo/110/183', gradient: ['rgba(219,105,0,0)', '#db6900'] },
  { name: "Extreme Texas Hold'em", image: 'https://picsum.photos/seed/texas/110/183', gradient: ['rgba(41,149,255,0)', '#2995ff'] },
  { name: 'MinerBabe', image: 'https://picsum.photos/seed/miner/110/183', gradient: ['rgba(146,60,3,0)', '#923c03'] },
];

export const topPickGames: { name: string; image: string; gradient: [string, string] }[] = [
  { name: 'Red Tiger Slot', image: 'https://picsum.photos/seed/redtiger/110/183', gradient: ['rgba(200,50,50,0)', '#c83232'] },
  { name: 'Fortune Gems', image: 'https://picsum.photos/seed/fortune/110/183', gradient: ['rgba(0,180,100,0)', '#00b464'] },
  { name: 'Lucky Koi', image: 'https://picsum.photos/seed/koi/110/183', gradient: ['rgba(200,150,0,0)', '#c89600'] },
  { name: 'Dragon Legend', image: 'https://picsum.photos/seed/dragon/110/183', gradient: ['rgba(180,30,30,0)', '#b41e1e'] },
  { name: 'Gold Rush', image: 'https://picsum.photos/seed/goldrush/110/183', gradient: ['rgba(218,165,32,0)', '#daa520'] },
  { name: 'Ocean King', image: 'https://picsum.photos/seed/ocean/110/183', gradient: ['rgba(0,100,200,0)', '#0064c8'] },
];

// Win list data
export const winListData = [
  { rank: 1, username: 'J****', game: 'Formosa Bear', amount: '₹12,345,678.00', gameImg: 'https://picsum.photos/seed/formosa/34/34' },
  { rank: 2, username: 'D*r***', game: 'Champion of the Un...', amount: '₹2,345,678.00', gameImg: 'https://picsum.photos/seed/champion/34/34' },
  { rank: 3, username: 'J****', game: 'Formosa Bear', amount: '₹345,678.00', gameImg: 'https://picsum.photos/seed/formosa2/34/34' },
  { rank: 4, username: 'D*r***', game: 'Formosa Bear', amount: '₹45,678.00', gameImg: 'https://picsum.photos/seed/formosa3/34/34' },
  { rank: 5, username: 'A***n', game: 'Wild Bandito', amount: '₹5,678.00', gameImg: 'https://picsum.photos/seed/wild/34/34' },
  { rank: 6, username: 'K**e', game: 'Dragon Legend', amount: '₹4,321.00', gameImg: 'https://picsum.photos/seed/dragon2/34/34' },
  { rank: 7, username: 'M***k', game: 'Lucky Koi', amount: '₹3,210.00', gameImg: 'https://picsum.photos/seed/koi2/34/34' },
  { rank: 8, username: 'S****', game: 'Pyramid Raider', amount: '₹2,890.00', gameImg: 'https://picsum.photos/seed/pyramid2/34/34' },
  { rank: 9, username: 'T**a', game: 'Gold Rush', amount: '₹2,100.00', gameImg: 'https://picsum.photos/seed/gold2/34/34' },
  { rank: 10, username: 'R****', game: 'Ocean King', amount: '₹1,980.00', gameImg: 'https://picsum.photos/seed/ocean2/34/34' },
  { rank: 11, username: 'L**i', game: 'Three Card Poker', amount: '₹1,500.00', gameImg: 'https://picsum.photos/seed/poker2/34/34' },
  { rank: 12, username: 'W***g', game: 'Baccarat Live', amount: '₹1,234.00', gameImg: 'https://picsum.photos/seed/baccarat2/34/34' },
  { rank: 13, username: 'P****', game: 'Money Bingo', amount: '₹987.00', gameImg: 'https://picsum.photos/seed/bingo2/34/34' },
  { rank: 14, username: 'H**n', game: 'WIN WIN NEKO', amount: '₹876.00', gameImg: 'https://picsum.photos/seed/neko2/34/34' },
  { rank: 15, username: 'C***s', game: 'Fortune Gems', amount: '₹654.00', gameImg: 'https://picsum.photos/seed/fortune2/34/34' },
];
