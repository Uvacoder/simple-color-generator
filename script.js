const colours = [
  'AliceBlue',
  'AntiqueWhite',
  'Aqua',
  'Aquamarine',
  'Azure',
  'Beige',
  'Bisque',
  'Black',
  'BlanchedAlmond',
  'Blue',
  'BlueViolet',
  'Brown',
  'BurlyWood',
  'CadetBlue',
  'Chartreuse',
  'Chocolate',
  'Coral',
  'CornflowerBlue',
  'Cornsilk',
  'Crimson',
  'Cyan',
  'DarkBlue',
  'DarkCyan',
  'DarkGoldenRod',
  'DarkGray',
  'DarkGrey',
  'DarkGreen',
  'DarkKhaki',
  'DarkMagenta',
  'DarkOliveGreen',
  'Darkorange',
  'DarkOrchid',
  'DarkRed',
  'DarkSalmon',
  'DarkSeaGreen',
  'DarkSlateBlue',
  'DarkSlateGray',
  'DarkSlateGrey',
  'DarkTurquoise',
  'DarkViolet',
  'DeepPink',
  'DeepSkyBlue',
  'DimGray',
  'DimGrey',
  'DodgerBlue',
  'FireBrick',
  'FloralWhite',
  'ForestGreen',
  'Fuchsia',
  'Gainsboro',
  'GhostWhite',
  'Gold',
  'GoldenRod',
  'Gray',
  'Grey',
  'Green',
  'GreenYellow',
  'HoneyDew',
  'HotPink',
  'IndianRed',
  'Indigo',
  'Ivory',
  'Khaki',
  'Lavender',
  'LavenderBlush',
  'LawnGreen',
  'LemonChiffon',
  'LightBlue',
  'LightCoral',
  'LightCyan',
  'LightGoldenRodYellow',
  'LightGray',
  'LightGrey',
  'LightGreen',
  'LightPink',
  'LightSalmon',
  'LightSeaGreen',
  'LightSkyBlue',
  'LightSlateGray',
  'LightSlateGrey',
  'LightSteelBlue',
  'LightYellow',
  'Lime',
  'LimeGreen',
  'Linen',
  'Magenta',
  'Maroon',
  'MediumAquaMarine',
  'MediumBlue',
  'MediumOrchid',
  'MediumPurple',
  'MediumSeaGreen',
  'MediumSlateBlue',
  'MediumSpringGreen',
  'MediumTurquoise',
  'MediumVioletRed',
  'MidnightBlue',
  'MintCream',
  'MistyRose',
  'Moccasin',
  'NavajoWhite',
  'Navy',
  'OldLace',
  'Olive',
  'OliveDrab',
  'Orange',
  'OrangeRed',
  'Orchid',
  'PaleGoldenRod',
  'PaleGreen',
  'PaleTurquoise',
  'PaleVioletRed',
  'PapayaWhip',
  'PeachPuff',
  'Peru',
  'Pink',
  'Plum',
  'PowderBlue',
  'Purple',
  'RebeccaPurple',
  'Red',
  'RosyBrown',
  'RoyalBlue',
  'SaddleBrown',
  'Salmon',
  'SandyBrown',
  'SeaGreen',
  'SeaShell',
  'Sienna',
  'Silver',
  'SkyBlue',
  'SlateBlue',
  'SlateGray',
  'SlateGrey',
  'Snow',
  'SpringGreen',
  'SteelBlue',
  'Tan',
  'Teal',
  'Thistle',
  'Tomato',
  'Turquoise',
  'Violet',
  'Wheat',
  'White',
  'WhiteSmoke',
  'Yellow',
  'YellowGreen',
];

const colorBtn = document.getElementById('color-btn');
const rgbBtn = document.getElementById('rgb-btn');
const hslBtn = document.getElementById('hsl-btn');
const hexBtn = document.getElementById('hex-btn');
const namedColor = document.getElementById('name');
const rgbColor = document.getElementById('rgb');
const hexColor = document.getElementById('hex');
const hslColor = document.getElementById('hsl');

// change the bg color to the generated named color
function changeBg(e) {
  e.preventDefault();
  const color = colours[namedColorMaker()];
  document.body.style.backgroundColor = color;
  document.getElementById('link').style.color = color;
  namedColor.textContent = `background-colour: ${color}`;
  rgbColor.textContent = `background-colour: ${nameToRGB(color)}`;
  hexColor.textContent = `background-colour: ${nameToHex(color)}`;
  hslColor.textContent = `background-colour: ${nameToHSL(color)}`;
}

// change the bg color to the generated rgb color
function changeBgRGB() {
  const rgb = rgbMaker();
  document.body.style.backgroundColor = rgb;
  document.getElementById('link').style.color = rgb;
  rgbColor.textContent = `background-colour: ${rgb}`;
  hexColor.textContent = '';
  hslColor.textContent = '';
  namedColor.textContent = '';
}

// change the bg color to the generated hsl color
function changeBgHSL() {
  const hsl = hslMaker();
  document.body.style.backgroundColor = hsl;
  document.getElementById('link').style.color = hsl;
  hslColor.textContent = `background-colour: ${hsl}`;
  hexColor.textContent = '';
  namedColor.textContent = '';
  rgbColor.textContent = '';
}

// change the bg color to the generated hsl color
function changeBgHex() {
  const hex = '#' + hexMaker();
  document.body.style.backgroundColor = hex;
  document.getElementById('link').style.color = hex;
  hexColor.textContent = `background-colour: ${hex}`;
  hslColor.textContent = '';
  namedColor.textContent = '';
  rgbColor.textContent = '';
}

// randomly generate named color
function namedColorMaker() {
  return Math.floor(Math.random() * colours.length);
}

// randomly generate RGB color
function rgbMaker() {
  return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)})`;
}
// randomly generate HSL color
function hslMaker() {
  return `hsl(${Math.floor(Math.random() * 360)}, ${Math.floor(
    Math.random() * 100
  )}%, ${Math.floor(Math.random() * 100)}%)`;
}
// randomly generate hex code color
function hexMaker() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

// convert named color to rgb
function nameToRGB(name) {
  // Create fake div
  let fakeDiv = document.createElement('div');
  fakeDiv.style.color = name;
  document.body.appendChild(fakeDiv);

  // Get color of div
  let cs = window.getComputedStyle(fakeDiv),
    pv = cs.getPropertyValue('color');

  // Remove div after obtaining desired color value
  document.body.removeChild(fakeDiv);

  return pv;
}
// convert named color to hex code
function nameToHex(name) {
  // Get RGB from named color in temporary div
  let fakeDiv = document.createElement('div');
  fakeDiv.style.color = name;
  document.body.appendChild(fakeDiv);

  let cs = window.getComputedStyle(fakeDiv),
    pv = cs.getPropertyValue('color');

  document.body.removeChild(fakeDiv);

  // Code ripped from RGBToHex() (except pv is substringed)
  let rgb = pv.substr(4).split(')')[0].split(','),
    r = (+rgb[0]).toString(16),
    g = (+rgb[1]).toString(16),
    b = (+rgb[2]).toString(16);

  if (r.length == 1) r = '0' + r;
  if (g.length == 1) g = '0' + g;
  if (b.length == 1) b = '0' + b;

  return '#' + r + g + b;
}

// convert named color to hsl code
function nameToHSL(name) {
  let fakeDiv = document.createElement('div');
  fakeDiv.style.color = name;
  document.body.appendChild(fakeDiv);

  let cs = window.getComputedStyle(fakeDiv),
    pv = cs.getPropertyValue('color');

  document.body.removeChild(fakeDiv);

  // Code ripped from RGBToHSL() (except pv is substringed)
  let rgb = pv.substr(4).split(')')[0].split(','),
    r = rgb[0] / 255,
    g = rgb[1] / 255,
    b = rgb[2] / 255,
    cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}

colorBtn.addEventListener('click', changeBg);
rgbBtn.addEventListener('click', changeBgRGB);
hslBtn.addEventListener('click', changeBgHSL);
hexBtn.addEventListener('click', changeBgHex);
