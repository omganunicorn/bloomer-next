import { darken } from 'polished';

export function getBGColor(props) {
  if (props.isColor) return props.theme.colors[props.isColor];
  return props.theme.colors.white;
}

export function getBorderColor(props) {
  if (props.isColor !== undefined) return 'transparent';
  return '#bdbdbd';
}

export function getHoverColor(color) {
  return darken(0.1, color);
}

export function getSize(props) {
  return props.isSmall ? 'isSmall' : props.isMedium ? 'isMedium' : props.isLarge ? 'isLarge' : false;
}

export function getTextColor(props) {
  const isColor = props.isColor;
  if (isColor === 'warning') return 'rgba(0, 0, 0, 0.7)';
  if (isColor === 'danger' ||
    isColor === 'info' ||
    isColor === 'link' ||
    isColor === 'primary' ||
    isColor === 'success') {
      return 'white';
    }
  return '#363636';
}


export default { getBGColor, getBorderColor, getHoverColor, getTextColor };
