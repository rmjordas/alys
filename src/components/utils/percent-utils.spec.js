import { getWidthAsPercentOfTotalWidth } from './percent-utils';

test('should return 250 with total width of 500 and percent of 50', () => {
  const width = getWidthAsPercentOfTotalWidth(50, 500);

  expect(width).toBe(250);
});
