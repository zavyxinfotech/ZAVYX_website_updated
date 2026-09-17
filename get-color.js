async function run() {
  try {
    const { Jimp } = await import('jimp');
    const image = await Jimp.read('./assets/logo/logo.png');
    const w = image.bitmap.width;
    const h = image.bitmap.height;
    
    console.log(`width: ${w}, height: ${h}`);
    
    // Scan middle horizontal line to find the dark text color
    const colors = {};
    for (let x = Math.floor(w * 0.3); x < Math.floor(w * 0.9); x += 2) {
      for (let y = Math.floor(h * 0.3); y < Math.floor(h * 0.7); y += 2) {
        const hex = image.getPixelColor(x, y).toString(16).padStart(8, '0');
        if (hex !== '00000000' && !hex.startsWith('ffff') && hex.length === 8 && !hex.endsWith('00')) {
          const color = '#' + hex.substring(0, 6);
          colors[color] = (colors[color] || 0) + 1;
        }
      }
    }
    
    const sortedColors = Object.entries(colors).sort((a,b) => b[1] - a[1]);
    console.log('Top colors:');
    sortedColors.slice(0, 5).forEach(c => console.log(c[0], c[1]));
  } catch (err) {
    console.error(err);
  }
}
run();
