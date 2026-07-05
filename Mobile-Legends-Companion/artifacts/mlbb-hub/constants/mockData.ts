export interface Update {
  id: string;
  version: string;
  date: string;
  title: string;
  type: 'patch' | 'hero' | 'meta' | 'event';
  summary: string;
  details: string[];
  heroChanges?: { hero: string; change: string; icon: string }[];
  isNew?: boolean;
}

export interface Tournament {
  id: string;
  name: string;
  status: 'live' | 'upcoming' | 'completed';
  date: string;
  prize: string;
  region: string;
  teams: string[];
  matches: Match[];
  logo: string;
}

export interface Match {
  id: string;
  team1: string;
  team2: string;
  score1: number;
  score2: number;
  time: string;
  isLive: boolean;
}

export interface Player {
  id: string;
  username: string;
  playerId: string;
  rank: string;
  mainHero: string;
  winRate: string;
  region: string;
  status: 'online' | 'in-game' | 'offline';
  avatar: string;
}

export interface Highlight {
  id: string;
  user: string;
  avatar: string;
  title: string;
  hero: string;
  likes: number;
  comments: number;
  time: string;
  thumbnail: string;
  stickers: string[];
}

export const UPDATES: Update[] = [
  {
    id: '1',
    version: '1.9.16',
    date: '2026-06-20',
    title: 'Patch 1.9.16 — Fredrinn & Beatrix Revamp',
    type: 'patch',
    summary: 'Fredrinn önemli buff aldı, Beatrix silah mekaniklerine yeni animasyonlar eklendi.',
    isNew: true,
    details: [
      'Fredrinn S2 hasarı %15 artırıldı',
      'Beatrix Renner yeniden yükleme süresi azaltıldı',
      'Faramis ultimate süresi uzatıldı',
      'Esmeralda kalkan değeri nerflandı',
      'Yeni eşya: Küresel Taş eklendi',
      'Ranked sezon ödülleri güncellendi',
    ],
    heroChanges: [
      { hero: 'Fredrinn', change: 'Buff', icon: '⚔️' },
      { hero: 'Beatrix', change: 'Revamp', icon: '🔫' },
      { hero: 'Esmeralda', change: 'Nerf', icon: '🛡️' },
      { hero: 'Faramis', change: 'Buff', icon: '💀' },
    ],
  },
  {
    id: '2',
    version: '1.9.14',
    date: '2026-06-06',
    title: 'Patch 1.9.14 — Yeni Kahraman: Suyou',
    type: 'hero',
    summary: 'Yeni su elementali kahraman Suyou eklendi. Marksman/Mage hibrit rolü.',
    isNew: true,
    details: [
      'Yeni kahraman Suyou: Su elementali tetikçi',
      'Suyou pasif: Su akımıyla ateş hızı artışı',
      'Suyou S1: Su mermisi salvosu',
      'Suyou S2: Gel dalgası kontrolü',
      'Suyou Ultimate: Tsunami dalgası (geniş alan hasarı)',
      'Yeni kostüm: Fredrinn "Kral Efendi" eklendi',
    ],
    heroChanges: [
      { hero: 'Suyou', change: 'Yeni', icon: '💧' },
    ],
  },
  {
    id: '3',
    version: '1.9.12',
    date: '2026-05-23',
    title: 'Patch 1.9.12 — Meta Dengesi',
    type: 'meta',
    summary: 'Tank meta değişiklikleri ve orman kahramanlarına büyük düzenlemeler yapıldı.',
    details: [
      'Kasal & Arlott zayıflatıldı (yüksek seçilme oranı)',
      'Yin S1 hasar aralığı artırıldı',
      'Chang\'e pasif mana kullanımı azaltıldı',
      'Jungle monstır HP azaltıldı (daha hızlı çiftlik)',
      'Turtle spawn süresi 3 dakikaya indirildi',
      'Lord hasar kalkan mekanik güncellemesi',
    ],
    heroChanges: [
      { hero: 'Kasal', change: 'Nerf', icon: '⚔️' },
      { hero: 'Arlott', change: 'Nerf', icon: '🥊' },
      { hero: 'Yin', change: 'Buff', icon: '🥋' },
      { hero: "Chang'e", change: 'Buff', icon: '🌙' },
    ],
  },
  {
    id: '4',
    version: '1.9.10',
    date: '2026-05-09',
    title: 'Patch 1.9.10 — Rank Sezon Sonu',
    type: 'event',
    summary: 'Sezon 33 ödülleri dağıtıldı. Yeni sezon 34 başlıyor!',
    details: [
      'Sezon 33 ödülleri: Erekind skins + BP',
      'Rank sezon sıfırlama yapıldı',
      'Yeni sezon özel misyonlar eklendi',
      'MPL Dünya Şampiyonası özel etkinlik',
      'Yeni Avatar çerçeveleri mağazada',
      'Ranked sistem puanlama güncellendi',
    ],
    heroChanges: [],
  },
  {
    id: '5',
    version: '1.9.08',
    date: '2026-04-25',
    title: 'Patch 1.9.08 — Revamp: Aamon & Alpha',
    type: 'hero',
    summary: 'Aamon tamamen yeniden tasarlandı. Alpha görsel ve mekanik revamp.',
    details: [
      'Aamon yeni pasif: Gölge yürüyüşü mekanik değişti',
      'Aamon S2 artık bıçak bariyer oluşturuyor',
      'Alpha görsel tasarımı tamamen yenilendi',
      'Alpha mekanik: S1 ve S2 sinerji düzenlemesi',
      'Yeni sesler ve animasyonlar',
      'Eski kostümler de yeni modele güncellendi',
    ],
    heroChanges: [
      { hero: 'Aamon', change: 'Revamp', icon: '🗡️' },
      { hero: 'Alpha', change: 'Revamp', icon: '🤖' },
    ],
  },
];

export const TOURNAMENTS: Tournament[] = [
  {
    id: '1',
    name: 'M7 Dünya Şampiyonası',
    status: 'upcoming',
    date: '2026-07-15',
    prize: '$2,000,000',
    region: 'Global',
    logo: '🌍',
    teams: ['Echo', 'ONIC PH', 'RRQ', 'Blacklist', 'Team Falcons', 'Aurora'],
    matches: [
      { id: 'm1', team1: 'Echo', team2: 'ONIC PH', score1: 0, score2: 0, time: '15 Temmuz 14:00', isLive: false },
      { id: 'm2', team1: 'RRQ', team2: 'Blacklist', score1: 0, score2: 0, time: '15 Temmuz 17:00', isLive: false },
    ],
  },
  {
    id: '2',
    name: 'MPL Türkiye S5',
    status: 'live',
    date: '2026-06-27',
    prize: '₺500,000',
    region: 'Türkiye',
    logo: '🇹🇷',
    teams: ['GALATASARAY ESPORTS', 'Team Aura', 'Shadow Team', 'Digital Knights'],
    matches: [
      { id: 'm3', team1: 'GALATASARAY ESPORTS', team2: 'Team Aura', score1: 2, score2: 1, time: 'CANLI', isLive: true },
      { id: 'm4', team1: 'Shadow Team', team2: 'Digital Knights', score1: 0, score2: 0, time: 'Bugün 20:00', isLive: false },
    ],
  },
  {
    id: '3',
    name: 'MPL Philippines S14',
    status: 'live',
    date: '2026-06-25',
    prize: '$150,000',
    region: 'Filipinler',
    logo: '🇵🇭',
    teams: ['ONIC PH', 'Echo', 'Nexplay', 'RSG PH'],
    matches: [
      { id: 'm5', team1: 'ONIC PH', team2: 'Echo', score1: 1, score2: 2, time: 'CANLI', isLive: true },
      { id: 'm6', team1: 'Nexplay', team2: 'RSG PH', score1: 3, score2: 0, time: 'Tamamlandı', isLive: false },
    ],
  },
  {
    id: '4',
    name: 'MPL Indonesia S14',
    status: 'completed',
    date: '2026-06-01',
    prize: 'Rp 3,000,000,000',
    region: 'Endonezya',
    logo: '🇮🇩',
    teams: ['EVOS Legends', 'RRQ Hoshi', 'Aura Fire', 'Geek Fam'],
    matches: [
      { id: 'm7', team1: 'EVOS Legends', team2: 'RRQ Hoshi', score1: 3, score2: 1, time: 'Tamamlandı', isLive: false },
    ],
  },
];

export const PLAYERS: Player[] = [
  {
    id: '1',
    username: 'DragonSlayer_TR',
    playerId: '123456789',
    rank: 'Mitolojik Şan',
    mainHero: 'Fanny',
    winRate: '%72',
    region: 'TR',
    status: 'online',
    avatar: '🐉',
  },
  {
    id: '2',
    username: 'NightBloom',
    playerId: '987654321',
    rank: 'Efsanevi',
    mainHero: 'Ling',
    winRate: '%68',
    region: 'TR',
    status: 'in-game',
    avatar: '🌸',
  },
  {
    id: '3',
    username: 'TigerClaw',
    playerId: '456789123',
    rank: 'Mitolojik Şan',
    mainHero: 'Fredrinn',
    winRate: '%65',
    region: 'TR',
    status: 'offline',
    avatar: '🐯',
  },
  {
    id: '4',
    username: 'StarForge',
    playerId: '321654987',
    rank: 'Şan',
    mainHero: 'Beatrix',
    winRate: '%61',
    region: 'TR',
    status: 'online',
    avatar: '⭐',
  },
  {
    id: '5',
    username: 'PhoenixRise',
    playerId: '741852963',
    rank: 'Efsanevi',
    mainHero: 'Layla',
    winRate: '%58',
    region: 'TR',
    status: 'in-game',
    avatar: '🔥',
  },
];

export const HIGHLIGHTS: Highlight[] = [
  {
    id: '1',
    user: 'DragonSlayer_TR',
    avatar: '🐉',
    title: 'Fanny 5 Kill Solo Comeback!',
    hero: 'Fanny',
    likes: 1842,
    comments: 234,
    time: '2 saat önce',
    thumbnail: '🎬',
    stickers: ['🔥', '💯', '⚡'],
  },
  {
    id: '2',
    user: 'NightBloom',
    avatar: '🌸',
    title: 'Ling Godlike - Lord Steal',
    hero: 'Ling',
    likes: 3201,
    comments: 412,
    time: '5 saat önce',
    thumbnail: '🎮',
    stickers: ['👑', '😱', '🎯'],
  },
  {
    id: '3',
    user: 'TigerClaw',
    avatar: '🐯',
    title: 'Fredrinn Tank Build 1v5',
    hero: 'Fredrinn',
    likes: 987,
    comments: 156,
    time: 'Dün',
    thumbnail: '🛡️',
    stickers: ['💪', '🏆', '⚔️'],
  },
];

export const MLBB_STICKERS = [
  '🔥', '💯', '⚡', '👑', '😱', '🎯', '💪', '🏆', '⚔️', '🛡️',
  '🐉', '⭐', '🌟', '💎', '🎮', '🎬', '🥇', '🏅', '🎖️', '🌸',
  '🔫', '🗡️', '🪄', '🌙', '☀️', '❄️', '🌊', '🌪️', '💥', '✨',
  '🤖', '🧙', '🧝', '🧛', '🦁', '🐯', '🦅', '🐺', '🦊', '🐲',
];

export const CHATBOT_KNOWLEDGE = `
Sen Mobile Legends Hub uygulamasının yapay zeka asistanısın. Aşağıdaki bilgilere sahipsin:

UYGULAMA HAKKINDA:
- Mobile Legends Hub: MLBB oyuncuları için kapsamlı bir mobil topluluk uygulaması
- Tamamen ücretsiz, reklamsız

ÖZELLIKLER:
1. Güncelleme Rehberi: Patch notları, kahraman değişiklikleri, meta güncellemeleri kronolojik sırayla
2. Highlight & Sticker: Kısa video/görsel paylaşma, MLBB temalı sticker kütüphanesi
3. Turnuva Takibi: MPL, M Serisi ve topluluk turnuvalarını canlı skorlar ve bracket görünümüyle takip et
4. Arkadaş Bulma: Player ID ile arama, arkadaş ekleme, takım kurma
5. Profil: Sosyal medya tarzı profil, paylaşılan içeriklerin grid görünümü
6. Canlı Destek: Bu chatbot (sen!) ve insan desteği kombinasyonu
7. Pro Özellikler: Yakında açılacak premium özellikler bölümü
8. Tema: 5 farklı tema (Karanlık, Beyaz, Açık Mavi, Fıstık Yeşili, Açık Sarı)
9. QR Kod Paylaşım: Uygulamayı QR kod veya link ile paylaş
10. Güvenlik: E-posta doğrulama, 2 aşamalı doğrulama (telefon)

GÜNCEL META (Patch 1.9.16):
- Tier S: Fredrinn, Ling, Fanny, Julian
- Tier A: Beatrix, Esmeralda, Arlott, Joy
- Tier B: Layla, Miya, Alucard, Zilong
- En çok bufflanmış: Fredrinn (+15% S2 hasar)
- En çok nerflanmış: Esmeralda (kalkan değeri düşürüldü)

POPULER TURNUVALAR:
- M7 Dünya Şampiyonası (15 Temmuz 2026) - 2 milyon dolar ödül
- MPL Türkiye S5 (Devam ediyor) - 500,000 TL ödül
- MPL Philippines S14 (Devam ediyor)

KAHRAMANLar HAKKINDA:
- Fanny: Yüksek marifet gerektiren kanca kahramanı, ADC/Jungler
- Ling: Duvar tırmanan assassin, yüksek mobil
- Fredrinn: Tank/Fighter, kontr ateşi mekanikli güçlü tank
- Beatrix: Çok yönlü silah değiştiren marksman
- Esmeralda: Tank/Mage, kalkan büyüten destekçi
- Layla: Başlangıç seviyesi marksman, menzilli ADC

RANK SİSTEMİ:
Bronz → Gümüş → Altın → Platin → Elmas → Üstat → Şan → Efsanevi → Mitolojik → Mitolojik Şan

GENEL İPUÇLARI:
- Her kahramanın counter'larını öğren
- Map farkındalığı kritik
- Ekip iletişimi çok önemli
- Turtle ve Lord kontrolü oyun belirleyici
- 3-1-1 lane dağılımı genellikle güçlü

Kullanıcıların sorularını Türkçe olarak nazik ve yardımsever şekilde yanıtla.
`;
