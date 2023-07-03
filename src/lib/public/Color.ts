import isColor from "./isColor";
import convert from "../utils/conversion/convert";
import toArray from "../utils/toArray";

export default class Color {
    color: string | { hex: string, rgb: string, hsl: string, hsv: string, cmyk: string } | any
    colorSystem: string | null
    imageUrl: string

    constructor(color?: string) {

        if (!color) {

            const letters = "0123456789ABCDEF";
            let randHex = "#";

            for (let i = 0; i < 6; i++) {
                randHex += letters[(Math.floor(Math.random() * 16))];
            }

            this.color = {
                hex: randHex,
                rgb: convert({ initial: "hex", final: "rgb", color: randHex }),
                hsl: convert({ initial: "hex", final: "hsl", color: randHex }),
                hsv: convert({ initial: "hex", final: "hsv", color: randHex }),
                cmyk: convert({ initial: "hex", final: "cmyk", color: randHex })
            }
            this.colorSystem = null;
            this.imageUrl = `https://dummyimage.com/600x400/${randHex.replace("#", "")}/${randHex.replace("#", "")}.png`;

        } else {

            if (!(isColor(color).color)) throw new TypeError("Passed parameter is not a valid color code");

            const hexcolor = convert({ initial: isColor(color).colorSystem, final: "hex", color: color });

            this.color = color;
            this.colorSystem = isColor(color).colorSystem;
            this.imageUrl = `https://dummyimage.com/600x400/${hexcolor.replace("#", "")}/${hexcolor.replace("#", "")}.png`;
        }
    }

    public toHex(): string {
        const random = typeof this.color === "object" ? true : typeof this.color === "string" ? false : null;

        return (random ? this.color.hex : convert({ initial: this.colorSystem, final: "hex", color: this.color }));
    }

    public toRgb(): string {
        const random = typeof this.color === "object" ? true : typeof this.color === "string" ? false : null;

        return (random ? this.color.rgb : convert({ initial: this.colorSystem, final: "rgb", color: this.color }));
    }

    public toHsl(): string {
        const random = typeof this.color === "object" ? true : typeof this.color === "string" ? false : null;

        return (random ? this.color.hsl : convert({ initial: this.colorSystem, final: "hsl", color: this.color }));
    }

    public toHsv(): string {
        const random = typeof this.color === "object" ? true : typeof this.color === "string" ? false : null;

        return (random ? this.color.hsv : convert({ initial: this.colorSystem, final: "hsv", color: this.color }));
    }

    public toCmyk(): string {
        const random = typeof this.color === "object" ? true : typeof this.color === "string" ? false : null;

        return (random ? this.color.cmyk : convert({ initial: this.colorSystem, final: "cmyk", color: this.color }));
    }

    public toArray(): Array<string> | { hex: Array<string>, rgb: Array<string>, hsl: Array<string>, hsv: Array<string>, cmyk: Array<string> } {
        const random = typeof this.color === "object" ? true : typeof this.color === "string" ? false : null;

        if (random) {
            const randomResult = {
                hex: toArray(this.color.hex),
                rgb: toArray(this.color.rgb),
                hsl: toArray(this.color.hsl),
                hsv: toArray(this.color.hsv),
                cmyk: toArray(this.color.cmyk),
            }

            return randomResult;
        } else {
            return toArray(this.color);
        }
    }

}
