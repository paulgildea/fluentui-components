import { BrandVariants } from "@fluentui/react-components";
var tinycolor = require("tinycolor2");

export const generateBrandVariants = (value?: string):BrandVariants => {
  const baseColor = tinycolor(value);
	const lum = baseColor.getLuminance();
	const hsv = baseColor.toHsv();

	const brandRamp: BrandVariants = {
    10: '#FF69B4',
    20: '#FF69B4',
    30: '#FF69B4',
    40: '#FF69B4',
    50: '#FF69B4',
    60: '#FF69B4',
    70: '#FF69B4',
    80: '#FF69B4',
    90: '#FF69B4',
    100: '#FF69B4',
    110: '#FF69B4',
    120: '#FF69B4',
    130: '#FF69B4',
    140: '#FF69B4',
    150: '#FF69B4',
    160: '#FF69B4',
  };

	if (lum > 0)
	{
		brandRamp[10] = darken(hsv, 1.0);
    brandRamp[20] = darken(hsv, .90);
		brandRamp[30] = darken(hsv, .75);
		brandRamp[40] = darken(hsv, .60);
		brandRamp[50] = darken(hsv, .45);
		brandRamp[60] = darken(hsv, .30);
    brandRamp[70] = darken(hsv, .15);
	}
	brandRamp[80] = baseColor.toHexString();
	if (lum < 1)
	{
		brandRamp[90] = lighten(hsv, .30);
		brandRamp[100] = lighten(hsv, .36);
		brandRamp[110] = lighten(hsv, .36);
		brandRamp[120] = lighten(hsv, .48);
		brandRamp[130] = lighten(hsv, .64);
		brandRamp[140] = lighten(hsv, .72);
    brandRamp[150] = lighten(hsv, .84);
    brandRamp[160] = lighten(hsv, 1.0);
    
	}

  return brandRamp;
};

const lighten = (color: any, factor: number): string =>
{
	return tinycolor.fromRatio({
		h: color.h,
		s: clamp(color.s * (1 - factor)),
		v: clamp(color.v + (1 - color.v) * factor),
		a: color.a,
	}).toHexString();
}

const darken = (color: any, factor: number): string =>
{
	return tinycolor.fromRatio({
		h: color.h,
		s: color.s,
		v: clamp(color.v * (1 - factor)),
		a: color.a,
	}).toHexString();
}

const clamp = (value: number): number =>
{
	return value < 0 ? 0 : value > 1 ? 1 : value;
}
