export const interpolateColor = (percentage: number): string => {
  // Parse the colors
  const c1 = parseInt("00834f", 16);
  const c2 = parseInt("e0824e", 16);

  // Extract the RGB values
  const r1 = (c1 >> 16) & 255;
  const g1 = (c1 >> 8) & 255;
  const b1 = c1 & 255;

  const r2 = (c2 >> 16) & 255;
  const g2 = (c2 >> 8) & 255;
  const b2 = c2 & 255;

  // Interpolate the RGB values
  const r = Math.round(r1 + (r2 - r1) * percentage);
  const g = Math.round(g1 + (g2 - g1) * percentage);
  const b = Math.round(b1 + (b2 - b1) * percentage);

  // Convert back to hexadecimal
  const interpolatedColor = `#${((r << 16) | (g << 8) | b)
    .toString(16)
    .padStart(6, "0")}`;

  return interpolatedColor;
};

//   // Usage
//   const percentage: number = 0.5; // 50%

//   const interpolatedColor: string = interpolateColor(percentage);
//   console.log(interpolatedColor);
