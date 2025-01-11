type NumberPalette = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  1000: string;
};

const grayPllater: NumberPalette = {
  100: '#fff',
  200: '#e9e9ea',
  300: '#d9d9da',
  400: '#c8c8c9',
  500: '#b7b7b9',
  600: '#A7A7A9',
  700: '#858587',
  800: '#646465',
  900: '#424243',
  1000: '#000',
};

const purplePalette: NumberPalette = {
  100: '#f4f3f3',
  200: '#cdc7c9',
  300: '#a69a9e',
  400: '#7f6e74',
  500: '#584249',
  600: '#32161F',
  700: '#281118',
  800: '#1e0d12',
  900: '#14080c',
  1000: '#090406',
};

const greenPalette: NumberPalette = {
  100: '#f5f7f7',
  200: '#cfd8d9',
  300: '#aababc',
  400: '#859c9e',
  500: '#607e81',
  600: '#3B6064',
  700: '#2f4c50',
  800: '#23393c',
  900: '#172628',
  1000: '#0b1313',
};

const redPalette: NumberPalette = {
  100: '#fef4f5',
  200: '#fdced0',
  300: '#fba7ab',
  400: '#fa8086',
  500: '#f95961',
  600: '#F8333C',
  700: '#c62830',
  800: '#941e24',
  900: '#631418',
  1000: '#310a0b',
};

const iridescentTurquoisePalette: NumberPalette = {
  100: '#f8fffc',
  200: '#dffff0',
  300: '#c6ffe5',
  400: '#adffda',
  500: '#94ffcf',
  600: '#7CFFC4',
  700: '#63cc9c',
  800: '#4a9975',
  900: '#31664e',
  1000: '#183227',
};

const paletteNames = {
  Gray: grayPllater,
  Red: redPalette,
  IridescentTurquoise: iridescentTurquoisePalette,
  Purple: purplePalette,
  Green: greenPalette,
};

type NamePalette = keyof typeof paletteNames;
export type Color = `${NamePalette}.${keyof NumberPalette}`;

const getColor = (color: Color) => {
  const [name, nembrt] = color.split('.');
  const paletteName = name as NamePalette;
  const paletteNembrt = Number(nembrt) as keyof NumberPalette;

  return paletteNames[paletteName][paletteNembrt];
};

const getColorForPlatter = (palette: NamePalette) => {
  return paletteNames[palette];
};

export const colors = { getColor, getColorForPlatter };
