import { useTheme } from 'emotion-theming';

export const useColor = (color = 'primary') => {
  const theme = useTheme().default;

  let themeColor = 'accent';

  switch (color) {
    case 'basic':
      themeColor = 'subtle';
      break;
    case 'danger':
      themeColor = 'danger';
      break;
    case 'success':
      themeColor = 'success';
      break;
    case 'warning':
      themeColor = 'warning';
      break;
    case 'primary':
    default:
      themeColor = 'accent';
      break;
  }

  return {
    h100: theme.color[`${themeColor}100`],
    h200: theme.color[`${themeColor}200`],
    h300: theme.color[`${themeColor}300`],
    h400: theme.color[`${themeColor}400`],
    h500: theme.color[`${themeColor}500`],
    h600: theme.color[`${themeColor}600`],
    h700: theme.color[`${themeColor}700`],
    h800: theme.color[`${themeColor}800`],
    h900: theme.color[`${themeColor}900`],
  };
};
