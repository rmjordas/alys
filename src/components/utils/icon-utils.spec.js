import { COLOR_WHITE, COLOR_DARK, COLOR_PRIMARY } from '@/constants';
import { iconDark } from './icon-utils';

test('returns correct foreground color when background color is dark', () => {
  expect(iconDark(true)).toBe(COLOR_WHITE);
  expect(iconDark(true, COLOR_PRIMARY)).toBe(COLOR_PRIMARY);
});

test('returns correct foreground color when background color is light', () => {
  expect(iconDark(false)).toBe(COLOR_DARK);
  expect(iconDark(false, undefined, COLOR_PRIMARY)).toBe(COLOR_PRIMARY);
});
