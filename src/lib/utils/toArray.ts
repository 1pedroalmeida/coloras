import isColor from "../public/isColor";

export default (
    color: any
): Array<string> => {
    const colorSystem = isColor(color).colorSystem;

    return colorSystem === "hex" ? color.replace("#", "").match(/.{1,2}/g) : color.match(/\d+/g)
}