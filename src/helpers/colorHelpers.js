export function hexToRGB(hexColor){

}

const convertSingleRGBToHex = color => {
    let hexPart = Number(color).toString(16);
    hexPart = hexPart.length < 2 ? `0${hexPart}` : hexPart

    return hexPart
}

export function RGBtoHex(red, green, blue){
    return `${convertSingleRGBToHex(red)}${convertSingleRGBToHex(green)}${convertSingleRGBToHex(blue)}`
}