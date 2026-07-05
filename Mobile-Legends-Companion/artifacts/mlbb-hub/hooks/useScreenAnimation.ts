/**
 * Ekran açılış animasyonu hook'u.
 * Ekrana her odaklanıldığında opacity + translateY + scale ile beliriş efekti verir.
 * Expo Router'ın useFocusEffect'i ile tetiklenir.
 */

import { useCallback } from 'react';
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { useFocusEffect } from 'expo-router';

export function useScreenAnimation() {
  const opacity    = useSharedValue(0);
  const translateY = useSharedValue(24);
  const scale      = useSharedValue(0.97);

  const animate = useCallback(() => {
    // Değerleri sıfırla, ardından canlandır
    opacity.value    = 0;
    translateY.value = 24;
    scale.value      = 0.97;

    opacity.value    = withTiming(1, { duration: 380, easing: Easing.out(Easing.cubic) });
    translateY.value = withSpring(0, { stiffness: 180, damping: 20 });
    scale.value      = withSpring(1, { stiffness: 180, damping: 20 });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFocusEffect(animate);

  const animStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [
      { translateY: translateY.value },
      { scale: scale.value },
    ],
  }));

  return { animStyle };
}
