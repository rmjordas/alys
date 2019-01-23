const viewBox = {
  vertical: '0 0 11.7 6.8',
  horizontal: '0 0 5.8 10.7',
};
const verticalPathTransform = 'translate(237.7 103.95) rotate(90)';

export const chevronIconOptions = {
  up: {
    d: 'M.5,10.2,5.3,5.3.5.5',
    viewBox: viewBox.vertical,
    transform: {
      group: 'translate(238.2 110.25) rotate(180)',
      path: verticalPathTransform,
    },
  },
  right: {
    d: 'M.5,10.2,5.3,5.3.5.5',
    viewBox: viewBox.horizontal,
    transform: {
      group: 'translate(-652.002 -385)',
      path: 'translate(652.002 385)',
    },
  },
  down: {
    d: 'M.5,10.2,5.3,5.3.5.5',
    viewBox: viewBox.vertical,
    transform: {
      group: 'translate(-226.5 -103.45)',
      path: verticalPathTransform,
    },
  },
  left: {
    d: 'M5.3,10.2.5,5.3,5.3.5',
    viewBox: viewBox.horizontal,
    transform: {
      group: 'translate(-512.002 -387)',
      path: 'translate(512.002 387)',
    },
  },
};
