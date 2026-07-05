import { useTheme } from '@/contexts/ThemeContext';

/**
 * Returns the current theme's color scheme.
 * Replaces the previous static useColors hook with a dynamic theme-aware version.
 */
export function useColors() {
  const { colors } = useTheme();
  return colors;
}
