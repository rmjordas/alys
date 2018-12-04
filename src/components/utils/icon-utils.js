import { COLOR_WHITE, COLOR_DARK } from '@/constants';

/** Determines the color of the icon depending on the background. */
export function iconDark(
  isDark,
  colorWhenBgDark = COLOR_WHITE,
  colorWhenBgLight = COLOR_DARK,
) {
  return isDark ? colorWhenBgDark : colorWhenBgLight;
}
