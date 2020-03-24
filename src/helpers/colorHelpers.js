export function hexToRGB(hex){
    if (hex.charAt(0) === '#') {
        hex = hex.substr(1);
    }
    if ((hex.length < 2) || (hex.length > 6)) {
        return false;
    }
    var values = hex.split(''),
        r,
        g,
        b;

    if (hex.length === 2) {
        r = parseInt(values[0].toString() + values[1].toString(), 16);
        g = r;
        b = r;
    } else if (hex.length === 3) {
        r = parseInt(values[0].toString() + values[0].toString(), 16);
        g = parseInt(values[1].toString() + values[1].toString(), 16);
        b = parseInt(values[2].toString() + values[2].toString(), 16);
    } else if (hex.length === 6) {
        r = parseInt(values[0].toString() + values[1].toString(), 16);
        g = parseInt(values[2].toString() + values[3].toString(), 16);
        b = parseInt(values[4].toString() + values[5].toString(), 16);
    } else {
        return false;
    }
    return {red: r,green: g,blue: b};
}

const convertSingleRGBToHex = color => {
    let hexPart = Number(color).toString(16);
    hexPart = hexPart.length < 2 ? `0${hexPart}` : hexPart

    return hexPart
}

export function RGBtoHex(red, green, blue){
    return `#${convertSingleRGBToHex(red)}${convertSingleRGBToHex(green)}${convertSingleRGBToHex(blue)}`
};

export const lightenDarkenColor = function (col, amt) {
    const hslColor = hexToHSL(col);
    const changedHSL = {...hslColor, l : hslColor.l + parseInt(amt)};

    if(changedHSL.l > 100) changedHSL.l = 100;
    if(changedHSL.l < 0) changedHSL.l = 0;

    return HSLToHex(changedHSL);
}

export const hexToHSL = col => {
    let { red, green, blue } = hexToRGB(col);
    
    red /= 255;
    green /= 255;
    blue /= 255;

    let max = Math.max(red,green,blue);
    let min = Math.min(red,green,blue);

    let h,s,l = (max + min) / 2;
    
    if(max === min){
        h = s = 0;
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch(max) {
            case red: h = (green - blue) / d + (green < blue ? 6 : 0); break;
            case green: h = (blue - red) / d + 2; break;
            case blue: h = (red - green) / d + 4; break;
        }
        
        h /= 6;
    }

    s = s*100;
    s = Math.round(s);
    l = l*100;
    l = Math.round(l);
    h = Math.round(360*h);

    return {h,s,l};
};


function HSLToHex({h,s,l}) {
    s /= 100;
    l /= 100;
  
    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c/2,
        r = 0,
        g = 0,
        b = 0;
  
    if (0 <= h && h < 60) {
      r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
      r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
      r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
      r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
      r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
      r = c; g = 0; b = x;
    }
    // Having obtained RGB, convert channels to hex
    r = Math.round((r + m) * 255).toString(16);
    g = Math.round((g + m) * 255).toString(16);
    b = Math.round((b + m) * 255).toString(16);
  
    // Prepend 0s, if necessary
    if (r.length === 1)
      r = "0" + r;
    if (g.length === 1)
      g = "0" + g;
    if (b.length === 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }
  