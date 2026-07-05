/**
 * MLBB Hub — Multi-theme color system
 * 5 themes: dark, white, lightBlue, pistachio, lightYellow
 */

export type ThemeName = 'dark' | 'white' | 'lightBlue' | 'pistachio' | 'lightYellow';

export interface ColorScheme {
  background: string;
  backgroundSecondary: string;
  foreground: string;
  card: string;
  cardForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  gold: string;
  cyan: string;
  tabBar: string;
  tabBarBorder: string;
  headerBg: string;
  overlay: string;
  text: string;
  tint: string;
}

export const themes: Record<ThemeName, ColorScheme> = {
  dark: {
    background: '#0A0F1E',
    backgroundSecondary: '#111827',
    foreground: '#F0F6FF',
    card: '#161D2F',
    cardForeground: '#F0F6FF',
    primary: '#00D4FF',
    primaryForeground: '#0A0F1E',
    secondary: '#1E2A45',
    secondaryForeground: '#B0C4DE',
    muted: '#1E2A45',
    mutedForeground: '#6B7FA3',
    accent: '#FFD700',
    accentForeground: '#0A0F1E',
    destructive: '#FF4757',
    destructiveForeground: '#FFFFFF',
    border: '#1E2A45',
    input: '#1E2A45',
    gold: '#FFD700',
    cyan: '#00D4FF',
    tabBar: '#0D1526',
    tabBarBorder: '#1E2A45',
    headerBg: '#0D1526',
    overlay: 'rgba(0,0,0,0.7)',
    text: '#F0F6FF',
    tint: '#00D4FF',
  },
  white: {
    background: '#FFFFFF',
    backgroundSecondary: '#F8FAFC',
    foreground: '#0F172A',
    card: '#FFFFFF',
    cardForeground: '#0F172A',
    primary: '#1A56DB',
    primaryForeground: '#FFFFFF',
    secondary: '#F1F5F9',
    secondaryForeground: '#334155',
    muted: '#F1F5F9',
    mutedForeground: '#64748B',
    accent: '#F59E0B',
    accentForeground: '#FFFFFF',
    destructive: '#EF4444',
    destructiveForeground: '#FFFFFF',
    border: '#E2E8F0',
    input: '#F1F5F9',
    gold: '#F59E0B',
    cyan: '#0EA5E9',
    tabBar: '#FFFFFF',
    tabBarBorder: '#E2E8F0',
    headerBg: '#FFFFFF',
    overlay: 'rgba(0,0,0,0.5)',
    text: '#0F172A',
    tint: '#1A56DB',
  },
  lightBlue: {
    background: '#EBF5FB',
    backgroundSecondary: '#D6EAF8',
    foreground: '#1A3A5C',
    card: '#FFFFFF',
    cardForeground: '#1A3A5C',
    primary: '#2196F3',
    primaryForeground: '#FFFFFF',
    secondary: '#BBDEFB',
    secondaryForeground: '#1565C0',
    muted: '#E3F2FD',
    mutedForeground: '#5B8DB8',
    accent: '#FF9800',
    accentForeground: '#FFFFFF',
    destructive: '#F44336',
    destructiveForeground: '#FFFFFF',
    border: '#BBDEFB',
    input: '#E3F2FD',
    gold: '#FF9800',
    cyan: '#00BCD4',
    tabBar: '#DDEEFF',
    tabBarBorder: '#BBDEFB',
    headerBg: '#D6EAF8',
    overlay: 'rgba(0,0,0,0.4)',
    text: '#1A3A5C',
    tint: '#2196F3',
  },
  pistachio: {
    background: '#E8F5E9',
    backgroundSecondary: '#C8E6C9',
    foreground: '#1B5E20',
    card: '#FFFFFF',
    cardForeground: '#1B5E20',
    primary: '#4CAF50',
    primaryForeground: '#FFFFFF',
    secondary: '#A5D6A7',
    secondaryForeground: '#2E7D32',
    muted: '#DCEDC8',
    mutedForeground: '#558B2F',
    accent: '#FF6F00',
    accentForeground: '#FFFFFF',
    destructive: '#D32F2F',
    destructiveForeground: '#FFFFFF',
    border: '#A5D6A7',
    input: '#C8E6C9',
    gold: '#FFC107',
    cyan: '#00ACC1',
    tabBar: '#D7EED8',
    tabBarBorder: '#A5D6A7',
    headerBg: '#C8E6C9',
    overlay: 'rgba(0,0,0,0.4)',
    text: '#1B5E20',
    tint: '#4CAF50',
  },
  lightYellow: {
    background: '#FFFDE7',
    backgroundSecondary: '#FFF9C4',
    foreground: '#4A3800',
    card: '#FFFFFF',
    cardForeground: '#4A3800',
    primary: '#F9A825',
    primaryForeground: '#FFFFFF',
    secondary: '#FFF176',
    secondaryForeground: '#795500',
    muted: '#FFF9C4',
    mutedForeground: '#9E7B00',
    accent: '#F57C00',
    accentForeground: '#FFFFFF',
    destructive: '#C62828',
    destructiveForeground: '#FFFFFF',
    border: '#FFE57F',
    input: '#FFF9C4',
    gold: '#FFA000',
    cyan: '#0097A7',
    tabBar: '#FFF8DC',
    tabBarBorder: '#FFE57F',
    headerBg: '#FFF9C4',
    overlay: 'rgba(0,0,0,0.4)',
    text: '#4A3800',
    tint: '#F9A825',
  },
};

export const themeLabels: Record<ThemeName, string> = {
  dark: 'Karanlık',
  white: 'Beyaz',
  lightBlue: 'Açık Mavi',
  pistachio: 'Fıstık Yeşili',
  lightYellow: 'Açık Sarı',
};

const colors = themes.dark;
export default colors;
export { colors };
