/**
 * Ekran geçiş animasyonu sabitleri ve yardımcıları.
 * Expo Router'ın yerleşik animasyon sistemiyle uyumlu.
 */

export type ScreenAnimation =
  | 'slide_from_right'
  | 'slide_from_bottom'
  | 'fade'
  | 'fade_from_bottom'
  | 'none';

/** Hazır geçiş ön ayarları */
export const SCREEN_ANIMATIONS = {
  /** Standart ekran geçişi — sağdan kayar */
  slideRight: 'slide_from_right' as ScreenAnimation,
  /** Modal ekranlar — alttan çıkar */
  slideUp: 'slide_from_bottom' as ScreenAnimation,
  /** Profil / ayarlar — soluklaşma + ölçek */
  fade: 'fade' as ScreenAnimation,
  /** Ana sekme geçişleri */
  fadeBottom: 'fade_from_bottom' as ScreenAnimation,
} as const;

/** Ekran adına göre otomatik animasyon seçimi (Expo Router Stack) */
export const SCREEN_ANIMATION_MAP: Record<string, ScreenAnimation> = {
  '(auth)':      'fade',
  '(tabs)':      'fade',
  settings:      'slide_from_right',
  security:      'slide_from_right',
  themes:        'slide_from_right',
  pro:           'slide_from_right',
  share:         'slide_from_right',
  'hero-builds': 'slide_from_right',
  'user/[id]':   'slide_from_right',
};
