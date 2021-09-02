import { hex2rgb, hex2hsl, hex2hsv, hex2cmyk, rgb2hex, hsl2hex, hsv2hex, cmyk2hex } from "./functions"
import toArray from "../toArray";

export default (
    options: { initial: "hex" | "rgb" | "hsl" | "hsv" | "cmyk" | any, final: "hex" | "rgb" | "hsl" | "hsv" | "cmyk" | any, color: string }
): string | any => {
    const values = toArray(options.color);

    let result;

    switch (`${options.initial}-${options.final}`) {

        //
        // options.initial = "hex"
        // options.final = "rgb"
        //
        case "hex-hex": {
            result = options.color;

            break;
        }

        //
        // options.initial = "hex"
        // options.final = "rgb"
        //
        case "hex-rgb": {
            result = hex2rgb(values[0], values[1], values[2]);

            break;
        }

        //
        // options.initial = "hex"
        // options.final = "hsl"
        //
        case "hex-hsl": {
            result = hex2hsl(values[0], values[1], values[2]);

            break;
        }

        //
        // options.initial = "hex"
        // options.final = "hsv"
        //
        case "hex-hsv": {
            result = hex2hsv(values[0], values[1], values[2]);

            break;
        }

        //
        // options.initial = "hex"
        // options.final = "cmyk"
        //
        case "hex-cmyk": {
            result = hex2cmyk(values[0], values[1], values[2]);

            break
        }

        // ---------------------------------------------- HEX ---------------------------------------------- 
        // ---------------------------------------------- HEX ---------------------------------------------- 

        //
        // options.initial = "rgb"
        // options.final = "hex"
        //
        case "rgb-hex": {
            result = rgb2hex(values[0], values[1], values[2])

            break;
        }

        //
        // options.initial = "rgb"
        // options.final = "rgb"
        //
        case "rgb-rgb": {
            result = options.color;

            break;
        }

        //
        // options.initial = "rgb"
        // options.final = "hsl"
        //
        case "rgb-hsl": {
            const rgbValues = toArray(rgb2hex(values[0], values[1], values[2]));

            result = hex2hsl(rgbValues[0], rgbValues[1], rgbValues[2]);

            break;
        }

        //
        // options.initial = "rgb"
        // options.final = "hsv"
        //
        case "rgb-hsv": {
            const rgbValues = toArray(rgb2hex(values[0], values[1], values[2]));

            result = hex2hsv(rgbValues[0], rgbValues[1], rgbValues[2])

            break;
        }

        //
        // options.initial = "rgb"
        // options.final = "cmyk"
        //
        case "rgb-cmyk": {
            const rgbValues = toArray(rgb2hex(values[0], values[1], values[2]));

            result = hex2cmyk(rgbValues[0], rgbValues[1], rgbValues[2])

            break;
        }

        // ---------------------------------------------- RGB ---------------------------------------------- 
        // ---------------------------------------------- RGB ---------------------------------------------- 

        //
        // options.initial = "hsl"
        // options.final = "hex"
        //
        case "hsl-hex": {
            result = hsl2hex(values[0], values[1], values[2])

            break;
        }

        //
        // options.initial = "hsl"
        // options.final = "rgb"
        //
        case "hsl-rgb": {
            const hslValues = toArray(hsl2hex(values[0], values[1], values[2]));
            result = hex2rgb(hslValues[0], hslValues[1], hslValues[2])

            break;
        }

        //
        // options.initial = "hsl"
        // options.final = "hsl"
        // 
        case "hsl-hsl": {
            result = options.color;

            break;
        }

        //
        // options.initial = "hsl"
        // options.final = "hsv"
        //
        case "hsl-hsv": {
            const hslValues = toArray(hsl2hex(values[0], values[1], values[2]));

            result = hex2hsv(hslValues[0], hslValues[1], hslValues[2]);

            break;
        }

        //
        // options.initial = "hsl"
        // options.final = "cmyk"
        //
        case "hsl-cmyk": {
            const hslValues = toArray(hsl2hex(values[0], values[1], values[2]));

            result = hex2cmyk(hslValues[0], hslValues[1], hslValues[2]);

            break;
        }

        // ---------------------------------------------- HSL ---------------------------------------------- 
        // ---------------------------------------------- HSL ---------------------------------------------- 

        //
        // options.initial = "hsv"
        // options.final = "hex"
        //
        case "hsv-hex": {
            result = hsv2hex(values[0], values[1], values[2]);

            break;
        }

        //
        // options.initial = "hsv"
        // options.final = "rgb"
        //
        case "hsv-rgb": {
            const hsvValues = toArray(hsv2hex(values[0], values[1], values[2]));

            result = hex2rgb(hsvValues[0], hsvValues[1], hsvValues[2]);

            break;
        }

        //
        // options.initial = "hsv"
        // options.final = "hsl"
        //
        case "hsv-hsl": {
            const hsvValues = toArray(hsv2hex(values[0], values[1], values[2]));

            result = hex2hsl(hsvValues[0], hsvValues[1], hsvValues[2]);

            break;
        }

        //
        // options.initial = "hsv"
        // options.final = "hsv"
        //
        case "hsv-hsv": {
            result = options.color;

            break;
        }

        //
        // options.initial = "hsv"
        // options.final = "cmyk"
        //
        case "hsv-cmyk": {
            const hsvValues = toArray(hsv2hex(values[0], values[1], values[2]));

            result = hex2cmyk(hsvValues[0], hsvValues[1], hsvValues[2]);

            break;
        }

        // ---------------------------------------------- HSV ---------------------------------------------- 
        // ---------------------------------------------- HSV ---------------------------------------------- 

        //
        // options.initial = "cmyk"
        // options.final = "hex"
        //
        case "cmyk-hex": {
            result = cmyk2hex(values[0], values[1], values[2], values[3]);

            break;
        }

        //
        // options.initial = "cmyk"
        // options.final = "rgb"
        //
        case "cmyk-rgb": {
            const cmykValues = toArray(cmyk2hex(values[0], values[1], values[2], values[3]));

            result = hex2rgb(cmykValues[0], cmykValues[1], cmykValues[2]);

            break;
        }

        //
        // options.initial = "cmyk"
        // options.final = "hsl"
        //
        case "cmyk-hsl": {
            const cmykValues = toArray(cmyk2hex(values[0], values[1], values[2], values[3]));

            result = hex2hsl(cmykValues[0], cmykValues[1], cmykValues[2]);

            break;
        }

        //
        // options.initial = "cmyk"
        // options.final = "hsv"
        //
        case "cmyk-hsv": {
            const cmykValues = toArray(cmyk2hex(values[0], values[1], values[2], values[3]));

            result = hex2hsv(cmykValues[0], cmykValues[1], cmykValues[2]);

            break;
        }

        //
        // options.initial = "cmyk"
        // options.final = "cmyk"
        //
        case "cmyk-cmyk": {
            result = options.color;

            break;
        }

    }

    return result;
}